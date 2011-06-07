/* Modernizr 2.0 (Custom Build) | MIT & BSD
 * Contains: csstransforms | csstransforms3d | cssclasses | prefixed | teststyles | testprop | testallprops | prefixes | domprefixes
 */
;window.Modernizr=function(a,b,c){function C(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+o.join(c+" ")+c).split(" ");return B(d,b)}function B(a,b){for(var d in a)if(k[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function A(a,b){return!!~(""+a).indexOf(b)}function z(a,b){return typeof a===b}function y(a,b){return x(n.join(a+";")+(b||""))}function x(a){k.cssText=a}var d="2.0",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l,m=Object.prototype.toString,n=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),o="Webkit Moz O ms Khtml".split(" "),p={},q={},r={},s=[],t=function(a,c,d,e){var f,h,j,k=b.createElement("div");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:i+(d+1),k.appendChild(j);f=["&shy;","<style>",a,"</style>"].join(""),k.id=i,k.innerHTML+=f,g.appendChild(k),h=c(k,a),k.parentNode.removeChild(k);return!!h},u,v={}.hasOwnProperty,w;!z(v,c)&&!z(v.call,c)?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],c)};var D=function(a,c){var d=a.join(""),f=c.length;t(d,function(a,c){var d=b.styleSheets[b.styleSheets.length-1],g=d.cssText||d.cssRules[0].cssText,h=a.childNodes,i={};while(f--)i[h[f].id]=h[f];e.csstransforms3d=i.csstransforms3d.offsetLeft===9},f,c)}([,["@media (",n.join("transform-3d),("),i,")","{#csstransforms3d{left:9px;position:absolute}}"].join("")],[,"csstransforms3d"]);p.csstransforms=function(){return!!B(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])},p.csstransforms3d=function(){var a=!!B(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);a&&"webkitPerspective"in g.style&&(a=e.csstransforms3d);return a};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));x(""),j=l=null,e._version=d,e._prefixes=n,e._domPrefixes=o,e.testProp=function(a){return B([a])},e.testAllProps=C,e.testStyles=t,e.prefixed=function(a){return C(a,"pfx")},g.className=g.className.replace(/\bno-js\b/,"")+(f?" js "+s.join(" "):"");return e}(this,this.document);

(function(){
  
  var isTouch = !!('createTouch' in document),
      cursorStartEvent = isTouch ? 'touchstart' : 'mousedown',
      cursorMoveEvent = isTouch ? 'touchmove' : 'mousemove',
      cursorEndEvent = isTouch ? 'touchend' : 'mouseup',
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
  
  
  // elastic rope constructor
  function ElasticRope ( settings ) {
    // extend settings on to constructor
    for ( var key in settings ) {
      this[ key ] = settings[ key ];
    }
    
    this.center = {
      x: this.element.offsetWidth / 2,
      y: this.element.offsetHeight / 2
    };
    
    this.cursorPoint = this.center;
    this.isUntouched = true;
    this.t = Math.random() * 100;
    
    this.links = [];
    
    this.elementOffset = {
      x : this.element.offsetLeft,
      y : this.element.offsetTop
    };
    
    var link,
        linkSettings = {
          rope: this,
          x: this.center.x,
          y: this.center.y
        },
        fragment = document.createDocumentFragment();
    
    for (var i=0; i < this.linkCount; i++) {
      linkSettings.index = i;
      link = new ElasticRopeLink( linkSettings );
      this.links.push( link );
      fragment.appendChild( link.element );
    }
    
    this.element.appendChild( fragment );
    
    this.element.addEventListener( cursorStartEvent, this, false);
    
    // kick off animation
    this.animate();
    
  }
  
  ElasticRope.prototype.animate = function() {
    
    if ( this.isUntouched ) {
      this.t += 0.001;
      this.cursorPoint = {
        x: Math.sin( this.t * 7  ) * 40 + this.center.x,
        y: Math.cos( this.t * 13 ) * 40 + this.center.y
      }
    }
    
    
    for (var i=0, len = this.links.length; i < len; i++) {
      this.links[i].update();
    }
    
    // console.log( this.links[0].previousLink.x, this.cursorPoint.x );
    
    var instance = this;
    requestAnimFrame( function(){ instance.animate() } );
  };
  
  // ======================= event handling ===============================

  ElasticRope.prototype.handleEvent = function( event ) {
    if ( this[event.type] ) {
      this[event.type](event);
    }
  };

  ElasticRope.prototype.mousedown = function( event ) {
    this.cursorStart( event );
    event.preventDefault();
  };
  
  ElasticRope.prototype.touchstart = function( event ) {
    if ( !this.hasActiveCursor ) {
      var touch = event.changedTouches[0];
      this.cursorStart( touch );
      this.cursorIdentifier = touch.identifier;
    }
    event.preventDefault();
  };
  
  ElasticRope.prototype.cursorStart = function ( cursor ) {
    this.updateCursorPoint( cursor );
    document.addEventListener( cursorMoveEvent, this, false);
    document.addEventListener( cursorEndEvent, this, false);
    
    this.isUntouched = false;
    this.hasActiveCursor = true;
    
  };
  
  ElasticRope.prototype.mousemove = function( event ) {
    // console.log(event.type)
    this.updateCursorPoint( event );
    event.preventDefault();
  };
  
  ElasticRope.prototype.touchmove = function( event ) {
    for (var i=0, len = event.changedTouches.length; i < len; i++) {
      var touch = event.changedTouches[i];
      if ( touch.identifier == this.cursorIdentifier ) {
        this.updateCursorPoint( touch );
      }
    }
    
    event.preventDefault();
  };
  
  ElasticRope.prototype.mouseup = function( event ) {
    this.cursorEnd();
  };
  
  ElasticRope.prototype.touchend = function( event ) {
    for (var i=0, len = event.changedTouches.length; i < len; i++) {
      var touch = event.changedTouches[i];
      if ( touch.identifier == this.cursorIdentifier ) {
        this.cursorEnd();
      }
    }
  };
  
  ElasticRope.prototype.cursorEnd = function() {
    document.removeEventListener( cursorMoveEvent, this, false);
    document.removeEventListener( cursorEndEvent, this, false);
    this.hasActiveCursor = false;
    
  };
  
  ElasticRope.prototype.updateCursorPoint = function ( cursor ) {
    this.cursorPoint = {
      x: cursor.pageX - this.elementOffset.x,
      y: cursor.pageY - this.elementOffset.y
    };
  };
  
  // ======================= Link ===============================
  
  function ElasticRopeLink ( settings ) {
    // extend settings on to constructor
    for ( var key in settings ) {
      this[ key ] = settings[ key ];
    }
    this.angle = 0;
    
    this.element = document.createElement('div');
    this.element.className = 'elastic-rope-dot ' + this.rope.className;
    
    
    if ( this.index ) {
      this.linkElement = document.createElement('div');
      this.linkElement.className = 'elastic-rope-link';
      this.element.appendChild( this.linkElement );
    }
    
  }
  
  ElasticRopeLink.prototype.elasticizeProperty = function ( prop, target ) {
    var deltaProp = prop + 'Delta';
    this[ deltaProp ] = ( this[ deltaProp ] || 0 ) * this.rope.elasticity + (this[ prop ] - target) * this.rope.responsiveness;
    this[ prop ] -= this[ deltaProp ];
  };
  
  ElasticRopeLink.prototype.update = function() {
    // calculate distance
    var previousLink = this.index ? this.rope.links[ this.index - 1 ] : this.rope.cursorPoint,
        dy = previousLink.y - this.y,
        dx = previousLink.x - this.x;
    this.angle = Math.atan2( dy, dx );
  
    var targetX = previousLink.x + Math.cos( this.angle ) * this.rope.linkDistance,
        targetY = previousLink.y + Math.sin( this.angle ) * this.rope.linkDistance;
        
    this.elasticizeProperty( 'x', targetX );
    this.elasticizeProperty( 'y', targetY );
    
    dy = previousLink.y - this.y;
    dx = previousLink.x - this.x;
    var linkDistance = Math.sqrt( dx * dx + dy * dy );
    this.angle = Math.atan2( dy, dx );
  
    this.linkScale = linkDistance / 10;
    
    this.renderX = this.x - this.rope.linkRadius;
    this.renderY = this.y - this.rope.linkRadius;
    
    this.render();
  };
  
  if ( Modernizr.csstransforms && Modernizr.csstransforms3d ) {
    // 3d transforms
    ElasticRopeLink.prototype.render = function() {
      this.element.style[ transformProp ] = 'translate3d(' + this.renderX + 'px, ' + this.renderY + 'px, 0 ) rotate(' + this.angle + 'rad)';
      if ( this.linkElement ) {
        this.linkElement.style[ transformProp ] = 'scale3d(' + this.linkScale + ', 1, 1)';
      }
    };
  } else if ( Modernizr.csstransforms ) {
    // 2d transforms
    ElasticRopeLink.prototype.render = function() {
      this.element.style[ transformProp ] = 'translate(' + this.renderX + 'px, ' + this.renderY + 'px) rotate(' + this.angle + 'rad)';
      if ( this.linkElement ) {
        this.linkElement.style[ transformProp ] = 'scaleX(' + this.linkScale + ')';
      }
    };
  } else {
    // absolute positioning
    ElasticRopeLink.prototype.render = function() {
      this.element.style.left = this.renderX + 'px'; 
      this.element.style.top = this.renderY + 'px'; 
    };
    
  }
  
  function init() {
    var ropeContainer = document.getElementById('elastic-rope');
    new ElasticRope({
      element: ropeContainer,
      responsiveness: 0.1,
      elasticity: 0.61,
      linkCount: isTouch ? 40 : 100,
      linkDistance: 10,
      linkRadius: 8
    });
  }
  
  window.addEventListener( 'load', init, false);
  
})();