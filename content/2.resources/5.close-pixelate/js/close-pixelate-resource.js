var pixelations = {
  'officer' : [
    { shape : 'diamond', resolution : 48, size: 50 },
    { shape : 'diamond', resolution : 48, offset : 24 },
    { shape : 'circle', resolution : 8, size: 6 }
  ],
  'stanley' : [
    { resolution: 32 },
    { shape : 'circle', resolution : 32, offset: 15 },
    { shape : 'circle', resolution : 32, size: 26, offset: 13 },
    { shape : 'circle', resolution : 32, size: 18, offset: 10 },
    { shape : 'circle', resolution : 32, size: 12, offset: 8 }
  ],
  'take-my-portrait' : [
    { resolution: 48 },
    { shape: 'diamond', resolution: 48, offset: 12, alpha: 0.5  },
    { shape: 'diamond', resolution: 48, offset: 36, alpha: 0.5  },
    { shape: 'circle', resolution: 16, size: 8, offset: 4, alpha: 0.5 }
  ],
  'tony' : [
    { shape: 'circle', resolution: 32, size: 6, offset: 8 },
    { shape: 'circle', resolution: 32, size: 9, offset: 16 },
    { shape: 'circle', resolution: 32, size: 12, offset: 24 },
    { shape: 'circle', resolution: 32, size: 9, offset: 0 }
  ],
  'wonder' : [
    { shape: 'diamond', resolution: 24, size: 25 },
    { shape: 'diamond', resolution: 24, offset: 12 },
    { resolution: 24, alpha: 0.5 }
  ],
  'anita' : [
    { shape: 'square', resolution: 32 },
    { shape: 'circle', resolution: 32, offset: 16 },
    { shape: 'circle', resolution: 32, offset: 0, alpha: 0.5 },
    { shape: 'circle', resolution: 16, size: 9, offset: 0, alpha: 0.5 }
  ],
  'giraffe' : [
    { shape : 'circle', resolution : 24 },
    { shape : 'circle', resolution : 24, size: 9, offset: 12 }
  ],
  'kendra' : [
    { shape : 'square', resolution : 48, offset: 24 },
    { shape : 'circle', resolution : 48, offset : 0 },
    { shape : 'diamond', resolution : 16, size: 15, offset : 0, alpha : 0.6 },
    { shape : 'diamond', resolution : 16, size: 15, offset : 8, alpha : 0.6 }
  ],
  'gavin' : [
    { shape : 'square', resolution : 48 },
    { shape : 'diamond', resolution : 12, size: 8 },
    { shape : 'diamond', resolution : 12, size: 8, offset : 6 }
  ]
};

var docReady = function() {

  document.getElementById('example2').closePixelate( [ 
    { resolution: 24 }
  ] );
  
  document.getElementById('example3').closePixelate( [ 
    { resolution: 24 },
    { shape : 'circle', resolution : 24, size: 16, offset: 12, alpha: 0.5 }
  ] );
  
  // iterate through pixelations object, rendering each object with its option sets
  for ( key in pixelations ) {
    var options = pixelations[key];
    document.getElementById( key ).closePixelate( options );
  }
  
};

window.addEventListener( 'DOMContentLoaded', docReady, false);