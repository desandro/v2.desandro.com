$(function(){
    
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
        $('.primer strong').css({
            position: 'absolute',
            top: 40,
            left: 105,
        });
        
        $('.infinite em').css({
            fontSize: '32px',
            position: 'absolute',
            top: 0,
            left: 110,
            width: 299,
        })
            .children('strong').css({
                
                fontSize: '70px',
            });
        
    }
    
    
    $('#masonry10').masonry({columnWidth: 120, resizeable: false});
    
    
    
});