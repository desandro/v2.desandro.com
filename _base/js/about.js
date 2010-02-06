/**
 * test for CSS properties, in this case CSS Transform, taken from
 * http://thinkweb2.com/projects/prototype/feature-testing-css-properties/
 */
var getStyleProperty = (function(){
  var prefixes = ['Moz', 'Webkit', 'Khtml', 'O', 'Ms'];
  function getStyleProperty(propName, element) {
    element = element || document.documentElement;
    var style = element.style,
        prefixed;
    // test standard property first
    if (typeof style[propName] == 'string') return propName;
    // capitalize
    propName = propName.charAt(0).toUpperCase() + propName.slice(1);
    // test vendor specific properties
    for (var i=0, l=prefixes.length; i<l; i++) {
      prefixed = prefixes[i] + propName;
      if (typeof style[prefixed] == 'string') return prefixed;
    }
  }
  return getStyleProperty;
})();


// lemme get that JAY QUAIR-REEEEE
;$(function(){
	// if browser supports transforms, rotate the socialize links
	if (typeof getStyleProperty('transform') == 'string') {
		
		$('#socialize').css({
			marginTop: 40,
			height: 400
		})
		
		$('#socialize h2').css({
		    lineHeight: '1.0em',
		    position: 'absolute',
		    width: 160,
		    top: 120,
		    left: 150,
		});
	
	
		$('#socialize ul').css({
		    position: 'relative',
		    left: 230,
		    top: 145,
		    width: 20,
		    height: 20,
		    overflow: 'visible',
		});
		
		var liCount = $('#socialize li').length;
		
		$('#socialize li').css({
		    textAlign: 'right',
		    paddingLeft: 80,
		    position: 'absolute',
		    top: 0,
		    left: 0,
		    '-moz-transform-origin': '0px 0.45em',
		    '-webkit-transform-origin': '0px 0.45em',
		})
		.each(function(i){
			var theta = (360/liCount)*i;
			var transformation = 'rotate(' + theta + 'deg)';
			$(this).css({
				'-moz-transform': transformation,
				'-webkit-transform': transformation
			});
		});
	}

	
});