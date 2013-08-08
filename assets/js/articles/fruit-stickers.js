$(function(){
    
    // yeah, there's probably a faster way to do this...
    $('#controls .next').toggleClass('hide')
    .click(function(){
        var i = $('#booklet .page.selected').index('#booklet .page');
        if (i != $('#booklet .page').length-1 ) {
            $('#booklet .page.selected').toggleClass('flipped selected');
            $('#booklet .page').eq(i+1).addClass('selected');
            $('#copy p.selected').toggleClass('selected');
            $('#copy p').eq(i+1).toggleClass('selected');
        } 
        if (i == 0) {
            $('#controls .previous').toggleClass('hide');
        } else if ( i == $('#booklet .page').length-2 ) {
            $(this).toggleClass('hide');
        }
        return false;
    });
    
    $('#controls .previous').click(function(){
        var i = $('#booklet .page.selected').index('#booklet .page');
        if(i != 0 ) {
            $('#booklet .page').eq(i-1).toggleClass('flipped selected');
            $('#booklet .page').eq(i).toggleClass('selected');
            $('#copy p.selected').toggleClass('selected');
            $('#copy p').eq(i-1).toggleClass('selected');
        }
        if (i == $('#booklet .page').length-1 ) {
            $('#controls .next').toggleClass('hide');
        } else if ( i == 1 ) {
            $(this).toggleClass('hide');
        }
        return false;
    });

    $('#copy')
        .css({height: 200})
        .children()
            .css({
                position: 'absolute',
                left: 0,
                top: 0
            })
    ;

});