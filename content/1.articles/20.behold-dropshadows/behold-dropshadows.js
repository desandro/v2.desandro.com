

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
  }
  
  handleCursorStart = function( event ) {
    
    console.log('cursor start');
    
    window.addEventListener( cursorEvents.move, handleCursorMove, false );
    window.addEventListener( cursorEvents.end, handleCursorEnd, false );
    
    startVector = {
      x : event.pageX,
      y : event.pageY
    };
    
    event.preventDefault();
    
  },
  
  handleCursorMove = function( event ) {
    
    var moveVector = {
          x : event.pageX,
          y : event.pageY
        },
        ratio = .25,
        pitch = (startVector.y - moveVector.y),
        yaw = (startVector.x - moveVector.x)*-1,
        pitchSign = pitch < 0 ? -1 : 1,
        yawSign = yaw < 0 ? -1 : 1,
        factor = 2.2
    ;


    pitch =  Math.sqrt( pitch * pitchSign ) * pitchSign * factor;
    yaw =  Math.sqrt( yaw * yawSign ) * yawSign * factor

    console.log('yaw', yaw, 'pitch', pitch);

    posters.style.webkitTransform = 'translateZ(-200px)  rotateX('+pitch+'deg) rotateY('+yaw+'deg)';
    
    // console.log( getDistance(startVector, moveVector) );
    
  },

  handleCursorEnd = function ( event ) {
    
    console.log('cursor end');
    
    window.removeEventListener( cursorEvents.move, handleCursorMove, false );
    window.removeEventListener( cursorEvents.end, handleCursorEnd, false );
    
    
    posters.style.webkitTransform = 'translateZ(-200px)  rotateX(0deg) rotateY(0deg)';
    
  },

  docReady = function() {
    var beholdPoster = document.getElementById('behold'),
        shadowPoster = beholdPoster.cloneNode(true);
    
    posters = document.getElementById('posters');
    
    shadowPoster.id = 'shadow';
    
    posters.appendChild( shadowPoster );
    
    posters.addEventListener(cursorEvents.start, handleCursorStart, false);
    
  }
;
  
window.addEventListener('DOMContentLoaded', docReady, false);