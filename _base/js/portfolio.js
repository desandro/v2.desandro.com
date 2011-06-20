// Paul Irish logger
function debug(){
  window.console && console.log.call(console,arguments);
}

var getDistance = function ( a, b ) {
  var dx = ( b.x - a.x ) * ( b.x - a.x ),
      dy = ( b.y - a.y ) * ( b.y - a.y );
  return Math.sqrt( dx + dy );
};

var drawBeziers = function () {

  $('article').each(function(){
    var $this = $(this),
        $canvas = $this.find('canvas');

    // do not proceed if there is no canvas, or browser does not support canvas
		if ( !$canvas.length || !$canvas[0].getContext  ) {
		  return;
		}
      
    var $header = $this.find('.copy header'),
        points = [],
        canvasOffsetLeft = $canvas.offset().left,
        canvasOffsetTop = $canvas.offset().top;
    
    // get positions of details
    $this.find('.copy .details').each(function( i, el ){
      var $el = $( el );
      points.push({
        x: ( $el.offset().left - canvasOffsetLeft ) + $el.outerWidth() / 2,
        y: ( $el.offset().top - canvasOffsetTop )  + $el.outerHeight() / 2
      });
    });

      
		var ctx = $canvas[0].getContext("2d");

		// begin canvas code

    ctx.strokeStyle = '#222';
		ctx.lineWidth = 2;
		ctx.beginPath();

	    ctx.moveTo( points[0].x, points[0].y );

      for ( var i=1, len = points.length; i < len; i++ ) {
        var 
          // previous point
          p1 = points[i-1],
          // current point
          p2 = points[i],
          // distance that the control points are from the points
          handleD = parseInt( getDistance( p2, p1 ) * 0.35 ),
          // 1st control point
          cp1 = {
            x: p1.x,
            y: p1.y + handleD
          },
          // second control point
          cp2 = {
            x: p2.x,
            y: p2.y - handleD
          }
        ;

        ctx.bezierCurveTo( cp1.x, cp1.y, cp2.x, cp2.y, p2.x, p2.y );
      }

	    ctx.stroke();
		ctx.closePath();
		
  });
};

var getCurrentI = function ( maxCount, items ) {
  var y = $(window).scrollTop(),
      currentI = maxCount - 1;
  for ( var i=0; i < maxCount; i++ ) {
      if ( items[i]-20 > y ) { 
          currentI = i - 1;
          break;
      }
  }
  return currentI;        
};

var getCurrentIndex = function ( items ) {
  var y = $(window).scrollTop(),
      maxCount = items.length - 1,
      index = maxCount;
  for ( var i=0; i < maxCount; i++ ) {
    // if the y value of this item is greater than current Y
    // index is at the previous item
    if ( items[i]-20 > y ) { 
      index = i - 1;
      break;
    }
  }
  return index;
};

// Repurposed Anchor Anything script from Cedric Dugas 
// http://www.position-absolute.com/articles/better-html-anchor-a-jquery-script-to-slide-the-scrollbar/
// revised with the help of Sam Gentle
var scrollTo = function ( y, $article ) {
  $("html,body").animate({scrollTop: y}, {
     duration: 1200,
     easing: 'easeInOutQuart',
     queue: false,
     complete: function(){
       if ( $article ) {
         window.location.hash = $article.attr('id');
       }
     }
  });
};

$(function(){

  // draw Bezier curves when Typekit has loaded fonts
  Typekit.load({
    active: function() {
      // fonts have loaded!
      drawBeziers();
    },
    inactive: function() {
      // this browser doesn't support fonts
      drawBeziers();
    }
  });

   
  var articleY = [],
      imagesY = [],
      $articles = $('article'),
      $articleImageContainers = $articles.find('.images div'),
      articleCount = $articles.length,
      imageCount =  $articleImageContainers.length,
      $portNav = $('#port-nav'),
      $portNavItems = $portNav.find('.nav-article');

  // change the dot on the side quick nav
  $(window).scroll(function(){
    var currentI = getCurrentIndex( articleY ),
        $previousNav = $portNavItems.filter('.current'),
        previousI = $portNavItems.index( $previousNav );

    if ( currentI != previousI && currentI != -1 ) {
      $previousNav.removeClass('current');
      $portNavItems.eq( currentI ).addClass('current');
    }
  });

	// get article offset Top values
	$articles.each(function(){
    articleY.push(  $(this).offset().top );
	});
	// get images div heights
	$articleImageContainers.each(function(){
    imagesY.push( $(this).offset().top );
	});

  // trigger window scroll so quick nav dot is set
	$(window).scroll();


  // port nav article scrolling
  $portNavItems.find('a').click(function(){
    var i = $portNavItems.index( $(this).parent() ),
        $target =  $articles.eq(i),
        y = $target.offset().top;
    scrollTo( y, $target ); 
    return false;
  });

  var prevNextScroll = function (i) {
    var $target = $articleImageContainers.eq(i),
        y = $target.offset().top,
        $article = $target.index() === 0 ? $target.parents('article') : undefined;
    scrollTo( y, $article );
  };

  // prev & next buttons
  $portNav.find('.previous a').click(function(){
    var index = getCurrentIndex( imagesY );
    if ( index > 0 ) {
      prevNextScroll( index-1 );
    }
    return false;
  });
  $portNav.find('.next a').click(function(){
    var index = getCurrentIndex( imagesY );
    if ( index != imageCount-1 ) {
      prevNextScroll( index+1 );
    }
    return false;
  });
   
});