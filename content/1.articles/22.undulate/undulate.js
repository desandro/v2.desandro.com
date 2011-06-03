/* Modernizr 2.0 (Custom Build) | MIT & BSD
 * Contains: csstransforms | csstransforms3d | cssclasses | prefixed | teststyles | testprop | testallprops | prefixes | domprefixes
 */
;window.Modernizr=function(a,b,c){function C(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+o.join(c+" ")+c).split(" ");return B(d,b)}function B(a,b){for(var d in a)if(k[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function A(a,b){return!!~(""+a).indexOf(b)}function z(a,b){return typeof a===b}function y(a,b){return x(n.join(a+";")+(b||""))}function x(a){k.cssText=a}var d="2.0",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l,m=Object.prototype.toString,n=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),o="Webkit Moz O ms Khtml".split(" "),p={},q={},r={},s=[],t=function(a,c,d,e){var f,h,j,k=b.createElement("div");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:i+(d+1),k.appendChild(j);f=["&shy;","<style>",a,"</style>"].join(""),k.id=i,k.innerHTML+=f,g.appendChild(k),h=c(k,a),k.parentNode.removeChild(k);return!!h},u,v={}.hasOwnProperty,w;!z(v,c)&&!z(v.call,c)?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],c)};var D=function(a,c){var d=a.join(""),f=c.length;t(d,function(a,c){var d=b.styleSheets[b.styleSheets.length-1],g=d.cssText||d.cssRules[0].cssText,h=a.childNodes,i={};while(f--)i[h[f].id]=h[f];e.csstransforms3d=i.csstransforms3d.offsetLeft===9},f,c)}([,["@media (",n.join("transform-3d),("),i,")","{#csstransforms3d{left:9px;position:absolute}}"].join("")],[,"csstransforms3d"]);p.csstransforms=function(){return!!B(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},p.csstransforms3d=function(){var a=!!B(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);a&&"webkitPerspective"in g.style&&(a=e.csstransforms3d);return a};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));x(""),j=l=null,e._version=d,e._prefixes=n,e._domPrefixes=o,e.testProp=function(a){return B([a])},e.testAllProps=C,e.testStyles=t,e.prefixed=function(a){return C(a,"pfx")},g.className=g.className.replace(/\bno-js\b/,"")+(f?" js "+s.join(" "):"");return e}(this,this.document);

(function(){

  const HALF_ROOT_3 = Math.sqrt(3) / 2;

  var isTouch = !!('createTouch' in document),
    cursorStartEvent = isTouch ? 'touchstart' : 'mousedown',
    cursorMoveEvent = isTouch ? 'touchmove' : 'mousemove',
    cursorEndEvent = isTouch ? 'touchend' : 'mouseup',
    spacing = 50,
    transformProp = Modernizr.prefixed('transform'),
    // shim layer with setTimeout fallback
    // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function( callback, element){
                window.setTimeout(callback, 1000 / 60);
              };
    })();
  
  // Lily Constructor, the particle
  function Lily ( pond, x, y ) {
    this.pond = pond;
    this.x = x - this.pond.lilyRadius;
    this.y = y - this.pond.lilyRadius;
    
    this.pondOffset = {
      x : this.pond.element.offsetLeft,
      y : this.pond.element.offsetTop
    };
    
    this.elasticity = 0.93;
    this.responsiveness = 0.07;
    
    this.scale = 1;
    this.scaleDelta = 0;
    
    this.angle = 0;
    this.distance = 0;
    
    this.offsetX = 0;
    this.offsetY = 0;
    
    this.element = document.createElement('div');
    this.element.className = 'lily';
    this.element.style.fontSize = this.pond.lilyRadius + 'px';
    
    this.offset = {
      x: 0,
      y: 0
    }
    
  }
  
  Lily.prototype.elasticizeProperty = function ( prop, target ) {
    var deltaProp = prop + 'Delta';
    this[ deltaProp ] = ( this[ deltaProp ] || 0 ) * this.elasticity + (this[ prop ] - target) * this.responsiveness;
    this[ prop ] -= this[ deltaProp ];
  };
  
  Lily.prototype.render = function() {
    
    var cursor, identifier, distance, angle, dx, dy;
    for ( identifier in this.pond.cursors ) {
      cursor = this.pond.cursors[ identifier ];
      dx = cursor.pageX - this.x - this.pondOffset.x - this.pond.lilyRadius;
      dy = cursor.pageY - this.y - this.pondOffset.y - this.pond.lilyRadius;
      distance = Math.sqrt( dx * dx + dy * dy );
      angle = Math.atan2( dy, dx );
    }
    
    this.angle = angle || this.angle;
    distance = distance || 0;
    
    var targetD = distance ? (250 - distance) : 0;
    targetD = Math.max( targetD, 0 );
    
    var targetScale = 1 - (targetD / 250) * 0.5;
    
    this.elasticizeProperty( 'scale', targetScale );
    
    var targetOffsetX = Math.cos( this.angle ) * -targetD * 0.25,
        targetOffsetY = Math.sin( this.angle ) * -targetD * 0.25;
        
    this.elasticizeProperty( 'offsetX', targetOffsetX );
    this.elasticizeProperty( 'offsetY', targetOffsetY );

    this.transformedX = this.x + this.offsetX;
    this.transformedY = this.y + this.offsetY;
    
    this.positionAndScale();

  };
  
  if ( Modernizr.csstransforms && Modernizr.csstransforms3d ) {
    // 3d transforms
    Lily.prototype.positionAndScale = function() {
      this.element.style[ transformProp ] = 'translate3d(' + this.transformedX + 'px, ' + this.transformedY + 'px, 0 ) scale3d(' + this.scale + ', ' + this.scale + ', 1)';
    };
  } else if ( Modernizr.csstransforms ) {
    // 2d transforms
    Lily.prototype.positionAndScale = function() {
      this.element.style[ transformProp ] = 'translate(' + this.transformedX + 'px, ' + this.transformedY + 'px) scale(' + this.scale + ')';
    };
  } else {
    // absolute positioning
    Lily.prototype.positionAndScale = function() {
      this.element.style.left = this.transformedX + 'px'; 
      this.element.style.top = this.transformedY + 'px'; 
    };
    
  }
  
  // LilyPond Constructor, the field
  function LilyPond ( element, spacing, lilyRadius ) {
    this.element = element;
    this.lilyRadius = lilyRadius;
    
    this.width = this.element.offsetWidth;
    this.height = this.element.offsetHeight;
    
    this.element.addEventListener( cursorStartEvent, this, false );

    this.lilies = [];
    
    var fragment = document.createDocumentFragment(),
      cols = Math.ceil( this.width / spacing ),
      rows = Math.ceil( this.height / ( spacing * HALF_ROOT_3 ) ),
      xAdjust = ( ( this.width % spacing ) - spacing / 2 ) / 2,
      yAdjust = ( this.height % ( spacing * HALF_ROOT_3 ) ) / 2,
      y, x, row, col, rowAdjust, lily;
    
    for ( row = 0; row < rows; row++ ) {
      y = row * spacing * HALF_ROOT_3 + yAdjust;
      for ( col = 0; col < cols; col++ ) {
        rowAdjust = (row % 2) * 0.5;
        x = (col + rowAdjust) * spacing + xAdjust;
        lily = new Lily( this, x, y );
        fragment.appendChild( lily.element );
        this.lilies.push( lily );
      }
    }
    
    this.element.appendChild( fragment )
    
    // mouse or touches
    this.cursors = {};
    
    // kick off animation
    this.animate();
    
  }
  
  LilyPond.prototype.animate = function() {
    // console.log('animate', this.t);
    this.isUnlogged = true;
    for (var i=0, len = this.lilies.length; i < len; i++) {
      this.lilies[i].render();
      if ( i > 2 ) {
        this.Unlogged = false;
      }
    }
    

    var instance = this;
    requestAnimFrame( function(){ instance.animate() } );
  }

  // ======================= event handling ===============================

  LilyPond.prototype.handleEvent = function( event ) {
    if ( this[event.type] ) {
      this[event.type](event);
    }
  };

  LilyPond.prototype.mousedown = function( event ) {
    this.cursorStart( event );
    event.preventDefault();
    
  };
  

  
  LilyPond.prototype.mousemove = function( event ) {
    this.cursors.mouse = event;
  };
  
  LilyPond.prototype.mouseup = function( event ) {
    this.cursorEnd( event );
  };
  
  // TODO - add multi-touch
  LilyPond.prototype.touchstart = function( event ) {
    this.cursorStart( event.changedTouches[0] );
    event.preventDefault();
    
  };

  LilyPond.prototype.touchend = function( event ) {
    this.cursorEnd( event );
  };
  
  LilyPond.prototype.cursorStart = function( cursor ) {
    this.cursors.mouse = cursor;
    
    document.addEventListener( cursorMoveEvent, this, false );
    document.addEventListener( cursorEndEvent, this, false );
    
  };
  
  LilyPond.prototype.cursorEnd = function ( event ) {
    delete this.cursors.mouse;
    
    document.removeEventListener( cursorMoveEvent, this, false );
    document.removeEventListener( cursorEndEvent, this, false );
    
  };

  function init() {
    var liliesContainer = document.getElementById('lilies');
    new LilyPond( liliesContainer, 60, 28 );
  }

  window.addEventListener( 'load', init, false);
  
})();

