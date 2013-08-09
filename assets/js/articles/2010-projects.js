var proj2010 = {
  
  colorT : ~~(Math.random()*18),
  
  changeColor : function() {
    proj2010.$body.removeClass( 'color' + proj2010.colorT % 18 )
      .addClass( 'color' + (proj2010.colorT+1) % 18 );
    proj2010.colorT++;
    setTimeout( proj2010.changeColor, 1000 )
  }
  
};

$(function(){
  
  if ( Modernizr.csstransitions ) {
    proj2010.$body = $(document.body);
    proj2010.changeColor();
  }
  
  
});