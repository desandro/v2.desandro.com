!window.jQuery && document.write('<script src="/_base/js/jquery-1.4.2.min.js"><\/script>');

$(function(){
  $('.short-url input').click(function(){
    this.focus();
    this.select();
  });
});