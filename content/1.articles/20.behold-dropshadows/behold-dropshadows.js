// Minified Moderizr that only checks for 3d transforms
window.Modernizr=(function(window,doc,undefined){var version='1.5',ret={},enableHTML5=true,docElement=doc.documentElement,mod='modernizr',m=doc.createElement(mod),m_style=m.style,f=doc.createElement('input'),smile=':)',tostring=Object.prototype.toString,prefixes=' -o- -moz- -ms- -webkit- -khtml- '.split(' '),tests={},inputs={},attrs={},classes=[],isEventSupported=(function(){var TAGNAMES={'select':'input','change':'input','submit':'form','reset':'form','error':'img','load':'img','abort':'img'};function isEventSupported(eventName,element){element=element||document.createElement(TAGNAMES[eventName]||'div');eventName='on'+eventName;var isSupported=(eventName in element);if(!isSupported){if(!element.setAttribute){element=document.createElement('div')}if(element.setAttribute&&element.removeAttribute){element.setAttribute(eventName,'');isSupported=typeof element[eventName]=='function';if(typeof element[eventName]!='undefined'){element[eventName]=undefined}element.removeAttribute(eventName)}}element=null;return isSupported}return isEventSupported})();var _hasOwnProperty=({}).hasOwnProperty,hasOwnProperty;if(typeof _hasOwnProperty!=='undefined'&&typeof _hasOwnProperty.call!=='undefined'){hasOwnProperty=function(object,property){return _hasOwnProperty.call(object,property)}}else{hasOwnProperty=function(object,property){return((property in object)&&typeof object.constructor.prototype[property]==='undefined')}}function set_css(str){m_style.cssText=str}function set_css_all(str1,str2){return set_css(prefixes.join(str1+';')+(str2||''))}function contains(str,substr){return(''+str).indexOf(substr)!==-1}function test_props(props,callback){for(var i in props){try{m_style[props[i]]!==undefined}catch(e){continue}if(m_style[props[i]]!==undefined&&(!callback||callback(props[i],m))){return true}}}function test_props_all(prop,callback){var uc_prop=prop.charAt(0).toUpperCase()+prop.substr(1),props=[prop,'Webkit'+uc_prop,'Moz'+uc_prop,'O'+uc_prop,'ms'+uc_prop,'Khtml'+uc_prop];return!!test_props(props,callback)}tests['csstransforms3d']=function(){var ret=!!test_props(['perspectiveProperty','WebkitPerspective','MozPerspective','OPerspective','msPerspective']);if(ret){var st=document.createElement('style'),div=doc.createElement('div');st.textContent='@media ('+prefixes.join('transform-3d),(')+'modernizr){#modernizr{height:3px}}';doc.getElementsByTagName('head')[0].appendChild(st);div.id='modernizr';docElement.appendChild(div);ret=div.offsetHeight===3;st.parentNode.removeChild(st);div.parentNode.removeChild(div)}return ret};for(var feature in tests){if(hasOwnProperty(tests,feature)){classes.push(((ret[feature.toLowerCase()]=tests[feature]())?'':'no-')+feature.toLowerCase())}}set_css('');m=f=null;ret._enableHTML5=enableHTML5;ret._version=version;docElement.className=docElement.className.replace(/\bno-js\b/,'')+' js';docElement.className+=' '+classes.join(' ');return ret})(this,this.document);

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