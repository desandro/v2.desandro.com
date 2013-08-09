var 
  supportTouches = ('createTouch' in document),
  mouseEvents = { start: 'mousedown', move: 'mousemove', end: 'mouseup' },
  touchEvents = { start: 'touchstart', move: 'touchmove', end: 'touchend' },
  cursorEvents = supportTouches ? touchEvents : mouseEvents,
  posters,
  startVector,
  
  getDistance = function(a, b) {
    var dx = ( b.x - a.x ),
        dy = ( b.y - a.y );
    return Math.sqrt( dx*dx + dy*dy);
  },
  

  
  handleCursorMove = function( event ) {
    
    
    
    var cursor = supportTouches ? event.changedTouches[0] : event,
        moveVector = {
          x : cursor.pageX,
          y : cursor.pageY
        },
        pitch = (startVector.y - moveVector.y),
        yaw = (startVector.x - moveVector.x)*-1,
        pitchSign = pitch < 0 ? -1 : 1,
        yawSign = yaw < 0 ? -1 : 1,
        factor = 2.2;


    pitch =  Math.sqrt( pitch * pitchSign ) * pitchSign * factor;
    yaw =  Math.sqrt( yaw * yawSign ) * yawSign * factor;

    // console.log('yaw', yaw, 'pitch', pitch);

    posters.style.webkitTransform = 'translateZ(-200px)  rotateX('+pitch+'deg) rotateY('+yaw+'deg)';
    
    // console.log( getDistance(startVector, moveVector) );
    
  },

  handleTransitionEnd = function( event ) {
    posters.className = '';
    // console.log('transition ended');
    posters.removeEventListener( 'webkitTransitionEnd', handleTransitionEnd, false);
  },

  handleCursorEnd = function ( event ) {
    
    // console.log('cursor end');
    
    posters.className = 'reset';
    posters.addEventListener( 'webkitTransitionEnd', handleTransitionEnd, false);
    
    window.removeEventListener( cursorEvents.move, handleCursorMove, false );
    window.removeEventListener( cursorEvents.end, handleCursorEnd, false );
    
    
    posters.style.webkitTransform = 'translateZ(-200px)  rotateX(0deg) rotateY(0deg)';
    
  },

  handleCursorStart = function( event ) {
    // do nothing if clicked on link
    if (supportTouches && ( event.target.localName == 'a' || event.target.parentNode.localName == 'a') ) {
      return;
    }
    
    // console.log('cursor start');
    posters.className = 'rotating';
    
    window.addEventListener( cursorEvents.move, handleCursorMove, false );
    window.addEventListener( cursorEvents.end, handleCursorEnd, false );
    
    var cursor = supportTouches ? event.changedTouches[0] : event;
    startVector = {
      x : cursor.pageX,
      y : cursor.pageY
    };
    
    event.preventDefault();
    
  },

  docReady = function() {
    var beholdPoster = document.getElementById('behold'),
        shadowPoster = beholdPoster.cloneNode(true);
    
    posters = document.getElementById('posters');
    
    shadowPoster.id = 'shadow';
    
    posters.insertBefore( shadowPoster, beholdPoster );
    
    if ( Modernizr.csstransforms3d ) {
      posters.addEventListener(cursorEvents.start, handleCursorStart, false);
    }
    
    
  }
;
  
window.addEventListener('DOMContentLoaded', docReady, false);