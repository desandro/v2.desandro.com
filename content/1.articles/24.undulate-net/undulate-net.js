(function(){
  
  var HALF_ROOT_3 = Math.sqrt(3) / 2,
      isTouch = !!('createTouch' in document),
      cursorStartEvent = isTouch ? 'touchstart' : 'mousedown',
      cursorMoveEvent = isTouch ? 'touchmove' : 'mousemove',
      cursorEndEvent = isTouch ? 'touchend' : 'mouseup',
      // shim layer with setTimeout fallback
      // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
      requestAnimFrame = (function(){
        return  window.requestAnimationFrame       || 
                window.webkitRequestAnimationFrame || 
                window.mozRequestAnimationFrame    || 
                window.oRequestAnimationFrame      || 
                window.msRequestAnimationFrame     || 
                function( callback, element ){
                  window.setTimeout(callback, 1000 / 60);
                };
      })();
  
  
  /* ==================== EventHandler ==================== */

  function EventHandler() {}

  EventHandler.prototype.handleEvent = function( event ) {
    if ( this[event.type] ) {
      this[event.type](event);
    }
  };
  
  /* ==================== RangeDisplay ==================== */

  // displays the value of a range input
  // why isn't this in the HTML5 spec?

  function RangeDisplay( range ) {
    this.range = range;
    this.output = document.createElement('span');
    this.output.className = 'range-display';


    this.units = this.range.getAttribute('data-units') || '';

    this.range.parentNode.appendChild( this.output );

    this.range.addEventListener( 'change', this, false);
    
    // trigger change to set text
    this.change();
    
  }

  RangeDisplay.prototype = new EventHandler();

  RangeDisplay.prototype.change = function( event ) {
    this.output.textContent = this.range.value + this.units;
  };
  
  // ======================= UndulateNode  ===============================
  
  function UndulateNode( settings ) {
    // extend settings over constructor
    for ( var key in settings ) {
      this[ key ] = settings[ key ];
    }
    
    this.angle = 0;
    this.offsetX = 0;
    this.offsetY = 0;
    
  }
  
  UndulateNode.prototype.elasticizeProperty = function ( prop, target ) {
    var deltaProp = prop + 'Delta';
    this[ deltaProp ] = ( this[ deltaProp ] || 0 ) * this.parent.elasticity + (this[ prop ] - target) * this.parent.responsiveness;
    this[ prop ] -= this[ deltaProp ];
  };
  
  UndulateNode.prototype.update = function() {
    
    var cursor, identifier, distance, angle, dx, dy;
    for ( identifier in this.parent.cursors ) {
      cursor = this.parent.cursors[ identifier ];
      dx = cursor.pageX - this.x - this.parent.offset.x;
      dy = cursor.pageY - this.y - this.parent.offset.y;
      distance = Math.sqrt( dx * dx + dy * dy );
      angle = Math.atan2( dy, dx );
    }
    
    this.angle = angle || this.angle;
    
    var targetD = distance ? (this.parent.displacementRadius - distance) : 0;
    targetD = Math.max( targetD, 0 ) * this.parent.displacementIntensity;
    
    var targetOffsetX = Math.cos( this.angle ) * -targetD,
        targetOffsetY = Math.sin( this.angle ) * -targetD;
        
    this.elasticizeProperty( 'offsetX', targetOffsetX );
    this.elasticizeProperty( 'offsetY', targetOffsetY );

    this.x = this.origin.x + this.offsetX;
    this.y = this.origin.y + this.offsetY;
    
  };
  
  UndulateNode.prototype.render = function() {
    var ctx = this.parent.context;
    // ctx.lineWidth = 5;
    
    // ctx.strokeStyle = 'white';

    if ( this.parent.isRenderingGrid ) {
      
      // node on right
      this.renderLineToNode( this.parent.nodes[ this.row ][ this.col + 1 ] );
    
      var nextNodeRow = this.parent.nodes[ this.row + 1 ],
          colShiftA = this.row % 2 ? 0 : -1,
          colShiftB = this.row % 2 ? 1 : 0;
      if ( nextNodeRow ) {
        // diagonal down/left
        this.renderLineToNode( nextNodeRow[ this.col + colShiftA ] );
        // diagonal down/right
        this.renderLineToNode( nextNodeRow[ this.col + colShiftB ] );
      }
    }
    
    // ctx.fillStyle = 'white';
    if ( this.parent.isRenderingDots ) {
      ctx.beginPath();
      ctx.arc( this.x, this.y, 5, 0, Math.PI*2, false );
      ctx.fill();
    }
    
  };
  
  UndulateNode.prototype.renderLineToNode = function( node ) {
    // don't proceed if no node
    if ( !node ) {
      return;
    }
    
    var ctx = this.parent.context;
    ctx.beginPath();
    ctx.moveTo( this.x, this.y );
    ctx.lineTo( node.x, node.y );
    ctx.stroke();
    
  };
  
  
  // ======================= UndulateNet  ===============================

  function UndulateNet( settings ) {
    // extend settings over constructor
    for ( var key in settings ) {
      this[ key ] = settings[ key ];
    }
    
    // don't proceed if canvas is not supported
    if ( !this.canvas.getContext || !this.canvas.getContext('2d') ) {
      return;
    }
    
    // get canvas context
    this.context = this.canvas.getContext('2d');
    
    // add nodes
    this.populate();
    
    this.cursors = {};
    
    this.canvas.addEventListener( cursorStartEvent, this, false );
    
    this.animate();
    
  }
  
  UndulateNet.prototype = new EventHandler();
  
  UndulateNet.prototype.populate = function() {
    
    this.offset = {
      x: this.canvas.offsetLeft,
      y: this.canvas.offsetTop
    };
    
    var verticalPadding = 100;
    
    // set size
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight + verticalPadding * 2;
    
    var netHeight = this.height - verticalPadding * 2;
    
    this.spacing = Math.sqrt( ( this.width * netHeight ) / ( this.nodeCount * HALF_ROOT_3 ) );
    
    this.nodes = [];
    
    this.cols = Math.ceil( this.width / this.spacing );
    this.rows = Math.ceil( netHeight / ( this.spacing * HALF_ROOT_3 ) );
    
    var nodeCount = this.cols * this.rows;
    
    var xAdjust = ( ( this.width % this.spacing ) - this.spacing / 2 ) / 2,
        yAdjust = ( netHeight % ( this.spacing * HALF_ROOT_3 ) ) / 2 + 100,
        origin,
        y, x, row, col, rowAdjust, node,
        rowNodes;
    
    var ctx = this.context;
    
    for ( row = 0; row < this.rows; row++ ) {
      this.nodes[row] = [];
      y = row * this.spacing * HALF_ROOT_3 + yAdjust;
      for ( col = 0; col < this.cols; col++ ) {
        rowAdjust = (row % 2) * 0.5;
        origin = {
          x : (col + rowAdjust) * this.spacing + xAdjust,
          'y' : y
        };
        node = new UndulateNode({
          parent : this,
          'origin' : origin,
          'row' : row,
          'col' : col
        });
        
        this.nodes[row].push( node );
      }
    }
  };
  
  UndulateNet.prototype.animate = function() {
    
    var ctx = this.context,
        node, row, col;
    
    ctx.clearRect( 0, 0, this.width, this.height );

    for ( row = 0; row < this.rows; row++ ) {
      for ( col = 0; col < this.cols; col++ ) {
        node = this.nodes[row][col];
        node.update();
      }
    }

    for ( row = 0; row < this.rows; row++ ) {
      for ( col = 0; col < this.cols; col++ ) {
        node = this.nodes[row][col];
        node.render();
      }
    }
    
    var instance = this;
    requestAnimFrame( function() { instance.animate(); } );
    
  };
  
  // ======================= event handling ===============================

  UndulateNet.prototype.mousedown = function( event ) {
    this.cursorStart( event );
    event.preventDefault();
  };
  
  UndulateNet.prototype.mousemove = function( event ) {
    this.cursors.mouse = event;
  };
  
  UndulateNet.prototype.mouseup = function( event ) {
    this.cursorEnd( event );
  };
  
  // TODO - add multi-touch
  UndulateNet.prototype.touchstart = function( event ) {
    this.cursorStart( event.changedTouches[0] );
    event.preventDefault();
    
  };

  UndulateNet.prototype.touchend = function( event ) {
    this.cursorEnd( event );
  };
  
  UndulateNet.prototype.cursorStart = function( cursor ) {
    this.cursors.mouse = cursor;
    
    document.addEventListener( cursorMoveEvent, this, false );
    document.addEventListener( cursorEndEvent, this, false );
    
  };
  
  UndulateNet.prototype.cursorEnd = function ( event ) {
    delete this.cursors.mouse;
    
    document.removeEventListener( cursorMoveEvent, this, false );
    document.removeEventListener( cursorEndEvent, this, false );
    
  };
  
  // ======================= init  ===============================
  
  function init() {
    
    var canvasElem = document.getElementById('canvas');
    var net = new UndulateNet({
      canvas: canvasElem,
      nodeCount: 550, // an approximate figure
      elasticity: 0.97,
      responsiveness: 0.06,
      displacementRadius: 400,
      displacementIntensity: -0.12,
      isRenderingGrid: true,
      isRenderingDots: false
    });
    
    // add range displays
    var inputs = document.getElementsByTagName('input'),
        input;
    for (var i=0, len = inputs.length; i < len; i++) {
      input = inputs[i];
      if ( input.type === 'range' ) {
        new RangeDisplay( input );
      }
    }
    
    // range changes
    document.getElementById('elasticity').addEventListener( 'change', function( event ) {
      net.elasticity = parseInt( event.target.value, 10 ) / 100;
    }, false );

    document.getElementById('responsiveness').addEventListener( 'change', function( event ) {
      net.responsiveness = parseInt( event.target.value, 10 ) / 100;
    }, false );
    
    document.getElementById('displacement-radius').addEventListener( 'change', function( event ) {
      net.displacementRadius = parseInt( event.target.value, 10 );
    }, false );
    
    document.getElementById('displacement-intensity').addEventListener( 'change', function( event ) {
      net.displacementIntensity = parseInt( event.target.value, 10 ) / 100;
    }, false );
    
    
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    // by John Hann, who, sadly, is not Jon Hamm
    var debounce = function ( func, execAsap ) {
      var timeout;

      return function debounced () {
        var obj = this, args = arguments;
        function delayed () {
          if ( !execAsap ) {
            func.apply( obj, args );
          }
          timeout = null; 
        }

        if ( timeout ) {
          clearTimeout( timeout );
        } else if ( execAsap ) {
          func.apply( obj, args );
        }

        timeout = setTimeout( delayed, 100 ); 
      };

    };
    
    
    document.getElementById('node-count').addEventListener( 'change', debounce( function( event ) {
      net.nodeCount = parseInt( event.target.value, 10 );
      net.populate();
    }), false );
    
    document.getElementById('render-grid').addEventListener( 'change', function( event ) {
      net.isRenderingGrid = event.target.checked;
    }, false );
    
    document.getElementById('render-dots').addEventListener( 'change', function( event ) {
      net.isRenderingDots = event.target.checked;
    }, false );
    
  }
  
  window.addEventListener( 'load', init, false);
  
})();