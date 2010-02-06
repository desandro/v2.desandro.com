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



if (typeof getStyleProperty('transform') == 'string') {

	$(function(){

		var rotateTheta = -.5;
		var moveTheta = 0;
		var ourP = $('#ouroboros p');
		var ourSpan = $('#ouroboros span');

		var pTransform = 'rotate('+rotateTheta+'rad)';

		$('#ouroboros').height(940);

		$('#ouroboros span').css({
				display: 'inline-block',
				position: 'absolute'
		});
		

		ourP.each(function(){
			
			// do some re-position of each P to center
			
			var span = $(this).children('span');
			var transOrigin = {
				x: (span.width() / 2),
				y: (span.height() / 2)
			};
			transOrigin.str = transOrigin.x + 'px ' + transOrigin.y + 'px';
			
			$(this).css({
				position: 'absolute',
				top: 470,
				left: 470,
				cursor: 'move',
				'-moz-transform': pTransform,
				'-webkit-transform': pTransform,
				'-moz-transform-origin': transOrigin.str,
				'-webkit-transform-origin': transOrigin.str

			});
			
			// rotate each letter
			span.each(function(i){
				var spanCount = $(this).siblings().length +1;
				var spanTheta = ( i / spanCount ) * Math.PI * 2;
				
				if( $(this).parent().hasClass('advice') ) {
					spanTheta = spanTheta * -1;
					var yPos = 278;
				} else {
					var yPos = -450;
				}

				var transform = 'rotate('+ spanTheta +'rad) translate(0, ' + yPos + 'px)';
				$(this).css({
					'-moz-transform': transform,
					'-webkit-transform': transform
				});						
			});
			
		});



		function mouseTheta(event) {
			var pos = {
				x: event.pageX - ourP.offset().left,
				y: event.pageY - ourP.offset().top
			};
			var theta = Math.atan2(pos.x, pos.y) + Math.PI;
			return theta;
		}

		function ourMouseMove(event) {
			var theta = rotateTheta - mouseTheta(event);
			moveTheta = theta;
			var transform = 'rotate('+ (theta) +'rad)';
			ourP.css({
				'-moz-transform': transform,
				'-webkit-transform': transform
			});
		}

		function ourMouseUp() {
			$(document)
				.unbind('mousemove', ourMouseMove )
				.unbind('mouseup', ourMouseUp );
			rotateTheta = moveTheta;

		}

		$('#ouroboros span').bind('mousedown', function(event){
			rotateTheta = rotateTheta + mouseTheta(event);
			$(document)
				.bind('mousemove', ourMouseMove )
				.bind('mouseup', ourMouseUp );
		});



	});


}
