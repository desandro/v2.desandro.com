// Paul Irish FOUC fighter
// http://paulirish.com/2009/avoiding-the-fouc-v3/
(function(H){H.className=H.className.replace(/\bno-js\b/,'js')})(document.documentElement);

try{Typekit.load();}catch(e){}

!window.jQuery && document.write('<script src="/_base/js/jquery-1.4.2.min.js"><\/script>')

$(function(){
  $('.short-url input').click(function(){
    this.focus();
    this.select();
  });
});