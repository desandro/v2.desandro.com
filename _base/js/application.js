// Paul Irish FOUC fighter
// http://paulirish.com/2009/avoiding-the-fouc-v3/
(function(H){H.className=H.className.replace(/\bno-js\b/,'js')})(document.documentElement);

;$(function(){
    
    $('.short-url input').click(function(){
        this.focus();
        this.select();
    })
    
});