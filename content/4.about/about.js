$(function(){

  // position tranform links in pinwheel
  if ( Modernizr.csstransforms ) {
    var $socializeItems = $('#socialize li')
    var liCount = $socializeItems.length
    var transformProp = Modernizr.prefixed('transform')

    var theta;

    $socializeItems.each( function( i ) {
      theta = ( 360 / liCount ) * i
      this.style[ transformProp ] = 'rotate(' + theta + 'deg)'
    })
  }

});