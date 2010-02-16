$(function(){

    // Paul Irish logger
	function debug(){
	    window.console && console.log.call(console,arguments);
	}


    $('article').each(function(){
        var $canvas = $(this).find('canvas');
		if ( $canvas.length != 0 ) {
        
            debug( $(this).attr('id') );
	        var $header = $(this).find('.copy header');
        
	        var points = [];
        
	        $(this).find('.copy details').each(function(i){
	            points[i] = {
	                x: ($(this).offset().left - $canvas.offset().left) + $(this).outerWidth(false)/2,
	                y: ($(this).offset().top - $canvas.offset().top)  + $(this).outerHeight(false)/2
	            };
	        });

        
	        var canvas = $canvas[0];
			if (canvas.getContext) {
				var ctx = canvas.getContext("2d");

				// begin canvas code
			
				function deetLine() {
	    			ctx.beginPath();

	    			    ctx.moveTo(points[0].x, points[0].y);

	    			    for (var i=1; i < points.length; i++) {
	    			        var p1, cp1, p2, cp2, handleD;

	                        p1 = points[i-1];
	                        p2 = points[i];

	                        handleD = Math.sqrt( Math.pow(p2.x-p1.x ,2 ) + Math.pow(p2.y-p1.y ,2 ) ) * .35;
	                        handleD = parseInt(handleD);

	                        cp1 = {
	                            x: p1.x,
	                            y: p1.y + handleD
	                        }
	                        cp2 = {
	                            x: p2.x,
	                            y: p2.y - handleD
	                        }

	                        ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, p2.x, p2.y);
	    			    };

	    			    ctx.stroke();
	    			ctx.closePath();			    
				}

	            ctx.strokeStyle = '#222';
				ctx.lineWidth = 2;
				deetLine();
			
	        } // close (canvas.getContext)
		} // close if ( $(this).find('.copy details').length > 0 )
        
    });

    function getCurrentI(maxCount, items) {
        var 
            y = $(window).scrollTop(),
            currentI = maxCount - 1
        ;
        for (i=0; i < maxCount; i++) {
            if ( items[i]-20 > y ) { 
                currentI = i - 1;
                break; 
            }
        }
        return currentI;        
    }

    // Repurposed Anchor Anything script from Cedric Dugas 
    // http://www.position-absolute.com/articles/better-html-anchor-a-jquery-script-to-slide-the-scrollbar/
    function scrollTo(y, article) {
        $("html:not(:animated),body:not(:animated)").animate({ scrollTop: y}, 1200, 'easeInOutQuart', function(){
            if (article ) { window.location.hash = article.attr('id'); }
        });
    }
   
    var 
        articleY = [],
        imagesY = [],
        articleCount = $('article').length,
        imageCount =  $('article .images div').length
    ;

    $(window).scroll(function(){
        var 
            currentI = getCurrentI(articleCount, articleY),
            $previousNav = $('#port-nav .nav-article.current');
            previousI = $('#port-nav .nav-article').index( $previousNav );
        ;
        
        if ( currentI != previousI && currentI != -1 ) {
            $previousNav.removeClass('current');
            $('#port-nav .nav-article').eq(currentI).addClass('current');
        }
    });

	// get article offset Top values
	$('article').each(function(i){
	    articleY[i] = $(this).offset().top;
	});
	// get images div heights
	$('article .images div').each(function(i){
	    imagesY[i] = $(this).offset().top;
	});
	$(window).scroll();

    // $(window).load(function(){
    // 
    // });

    
    // port nav article scrolling
    $('#port-nav .nav-article a').click(function(){
        var 
            i = $('#port-nav .nav-article').index( $(this).parent() ),
            target =  $('article').eq(i),
            article = target,
            y = target.offset().top
        ;
        scrollTo(y, article); 
        return false;
    });

    function prevNextScroll(i) {
        var target = $('article .images div').eq(i),
            y = target.offset().top,
            article = target.parents('article'),
            firstImage = article.find('.images div').first()
        ;
        if ( target.index() != firstImage.index() ) { article = undefined; }
        scrollTo(y, article);
    }

    // prev & next buttons
    $('#port-nav .previous a').click(function(){
        var currentI = getCurrentI(imageCount, imagesY);
        if ( currentI > 0 ) {
            prevNextScroll(currentI-1);
        }
        return false;
    });
    $('#port-nav .next a').click(function(){
        var currentI = getCurrentI(imageCount, imagesY);
        if ( currentI != imageCount-1 ) {
            prevNextScroll(currentI+1);
        }
        return false;
    });
   
});