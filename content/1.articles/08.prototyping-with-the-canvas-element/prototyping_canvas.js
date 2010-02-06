function draw() {
	var dropCanvas = document.getElementById("drop-cnvs");
	if (dropCanvas.getContext) {
		var ctx = dropCanvas.getContext("2d");
		var h = $("#drop-cnvs").height();
		var w = $("#drop-cnvs").width();
		
		var grad = ctx.createLinearGradient(0,0,0,h);
		grad.addColorStop(0, 'rgba(0,0,0,.15)');
		grad.addColorStop(.3, 'rgba(0,0,0,.05)');
		grad.addColorStop(1, 'rgba(0,0,0,.0)');
		ctx.fillStyle = grad;
		ctx.fillRect( 0, 0, w, h);
	}


	var favCanvas = document.getElementById("fav-cnvs");
	if (favCanvas.getContext) {
		var ctx = favCanvas.getContext("2d");
		var h = $("#fav-cnvs").height();
		var w = $("#fav-cnvs").width();
		
		// it's the code
		var grad = ctx.createLinearGradient(0,0,0,h);
		grad.addColorStop(0, '#E79');
		grad.addColorStop(1, '#B46');
		ctx.fillStyle = grad;
		
		ctx.beginPath();
			ctx.lineTo(1,1);
			ctx.lineTo(8,1);
			ctx.arc(8, 8, 7, -Math.PI/2, Math.PI/2, false);
			ctx.lineTo(1,15);
			ctx.lineTo(1,11);
			ctx.lineTo(3,11);
			ctx.lineTo(3,4);
			ctx.lineTo(7,4);
			ctx.lineTo(7,11);
			ctx.arc(8, 8, 3, Math.PI/2, -Math.PI/2, true);
			ctx.lineTo(1,5);
			ctx.lineTo(1,1);
			ctx.fill();
		ctx.closePath();
	}
	
	var gradsCanvas = document.getElementById("grads-cnvs");
	if (gradsCanvas.getContext) {
		var ctx = gradsCanvas.getContext("2d");
		var h = $("#grads-cnvs").height();
		var w = $("#grads-cnvs").width();
		
		// it's the code
		var s = w/6;
		
		var colors = new Array("#F8A","#3D8","#EB2", "#8AF", "#C66", "#C4C" );
		
		 for ( i=0; i<=5; i++) {
		  ctx.fillStyle = colors[i];
		  ctx.fillRect( i*s, 0, s, h);
		}
		
		var lingrad = ctx.createLinearGradient(0,0,0,h);
		  lingrad.addColorStop( 0/h, 'rgba(255,255,255,1)');
		  lingrad.addColorStop( .73, 'rgba(255,255,255,0)');
		  lingrad.addColorStop( .87, 'rgba(0,0,0,0)' );
		  lingrad.addColorStop( 1, 'rgba(0,0,0,.1)' ); 
		
		
		ctx.fillStyle = lingrad;
		ctx.fillRect( 0, 0, w, h);
	}
	
	
	var rssCanvas = document.getElementById("rss-cnvs");
	if (rssCanvas.getContext) {
		var ctx = rssCanvas.getContext("2d");
		var h = $("#rss-cnvs").height();
		var w = $("#rss-cnvs").width();
		
		// it's the code

		// orange gradient
		var grad = ctx.createLinearGradient(0,0,w,h);
		grad.addColorStop(0, '#D80');
		grad.addColorStop(.5, '#FA3');
		grad.addColorStop(1, '#D80');
		
		
		// orange background w/ gradient
		var r = 2.5; // corner radius
		ctx.fillStyle = grad;
		ctx.beginPath();
		ctx.arc( r,     r, r, Math.PI, Math.PI*(3/2),false);
		ctx.arc( w-r,   r, r, Math.PI*(3/2), 0,false);
		ctx.arc( w-r, h-r, r, 0, Math.PI*(1/2),false);
		ctx.arc( r,   h-r, r, Math.PI*(1/2), Math.PI,false);
		ctx.fill();
		ctx.closePath();
		
		// circle bottom left
		ctx.fillStyle = "#FFF";
		ctx.beginPath();
		ctx.arc( 3.5, 10.5, 1.5, 0, Math.PI*2, true);
		ctx.fill();
		ctx.closePath();
		
		
		// quarter circle lines
		ctx.strokeStyle = "#FFF";
		ctx.lineWidth = 2;
		ctx.beginPath();
		ctx.arc( 2, 12, 6, 0, -(Math.PI/2), true);
		ctx.stroke();
		ctx.closePath();
		
		ctx.beginPath();
		ctx.arc( 2, 12, 9.5, 0, -(Math.PI/2), true); 
		ctx.stroke();
		ctx.closePath();

	}	

	var grainCanvas = document.getElementById("grain-cnvs");
	if (grainCanvas.getContext) {
		var ctx = grainCanvas.getContext("2d");
		var h = $("#grain-cnvs").height();
		var w = $("#grain-cnvs").width();
		
		for ( ih=0; ih<h; ih++) {
		  for ( iw=0; iw<w; iw++ ) {
			var alpha = Math.random()*.07+.04;
			ctx.fillStyle = 'rgba(0,0,0,'+ alpha + ')';
			ctx.fillRect( iw, ih, 1, 1);
		  }
		} 
	}

	
	var diagCanvas = document.getElementById("diag-cnvs");
	if (diagCanvas.getContext) {
		var ctx = diagCanvas.getContext("2d");
		var h = $("#diag-cnvs").height();
		var w = $("#diag-cnvs").width();
		
		var color1 = 'rgba(255,0,0,1)';
		var color2 = 'rgba(255,0,0,.2)';

		ctx.fillStyle = color2;
		ctx.fillRect( 0, 0, w, h);

		ctx.fillStyle = color1;
		  ctx.lineTo( 0, 0);
		  ctx.lineTo( w/2, 0);
		  ctx.lineTo( 0, h/2);
		  ctx.lineTo( 0, 0);
		  ctx.moveTo( w, 0);
		  ctx.lineTo( w, h/2);
		  ctx.lineTo( w/2, h);
		  ctx.lineTo( 0, h);
		  ctx.fill();
		ctx.closePath();
	}
	
	var boxesCanvas = document.getElementById("boxes-cnvs");
	if (boxesCanvas.getContext) {
		var ctx = boxesCanvas.getContext("2d");
		var h = $("#boxes-cnvs").height();
		var w = $("#boxes-cnvs").width();
		
		var color1 = 'hsla(330,30%,92%,1)';
		var color2 = 'hsla(0,0%,100%,1)';
		ctx.fillStyle = color1;
		ctx.lineWidth = 1;
		ctx.strokeStyle = color2;

		for ( i=0; i<=800; i++ ) {
		  //randomize values for placement and size
		  var x = Math.random()*w;
		  var y = Math.random()*(Math.random()*.75+.25)*h*.9;
		  var s = 5+Math.random()*Math.random()*Math.random()*100;
		  var theta = Math.random()*3.14;

		  // render boxes on the left
		  ctx.save();
			var x1 = x-w/2;
			ctx.translate( x1, y);
			ctx.rotate(theta);
			ctx.translate(-s/2, -s/2);
			ctx.fillRect(0,0,s,s);
			ctx.strokeRect(0,0,s,s);
		  ctx.restore();

		  // render the same boxes on the right, so it repeats
		  ctx.save();
			var x2 = x+w/2;
			ctx.translate( x2, y);
			ctx.rotate(theta);
			ctx.translate(-s/2, -s/2);
			ctx.fillRect(0,0,s,s);
			ctx.strokeRect(0,0,s,s);
		  ctx.restore();

		}
	}

	var arrowsCanvas = document.getElementById("arrows-cnvs");
	if (arrowsCanvas.getContext) {
		var ctx = arrowsCanvas.getContext("2d");
		var h = $("#arrows-cnvs").height();
		var w = $("#arrows-cnvs").width();

		function arrow(s, x, y, angle, color) {
		  ctx.save();
		  ctx.translate(x,y);
		  ctx.translate(s*1,s*2);
		  ctx.rotate(angle);
		  ctx.translate(s*-1,s*-2);
		  ctx.beginPath();
		  ctx.fillStyle = color;
		  ctx.lineTo(s*1.8,s*0);
		  ctx.lineTo(s*.8,s*2);
		  ctx.lineTo(s*1.8,s*4);
		  ctx.lineTo(s*1,s*4);
		  ctx.lineTo(s*0,s*2);
		  ctx.lineTo(s*1,s*0);
		  ctx.fill();
		  ctx.closePath();
		  ctx.restore();
		} 
		
		var r = 5;
		arrow(r, r*0, 0, Math.PI*0, "rgba(0,0,0,.2)");
		arrow(r, r*1.2, 0, Math.PI*0, "rgba(0,0,0,.2)");
		arrow(r, r*0, 40, Math.PI*0, "rgba(0,0,0,.6)");
		arrow(r, r*1.2, 40, Math.PI*0, "rgba(0,0,0,.6)");

		arrow(r, r*0, 80, Math.PI*1, "rgba(0,0,0,.2)");
		arrow(r, r*1.2, 80, Math.PI*1, "rgba(0,0,0,.2)");
		arrow(r, r*0, 120, Math.PI*1, "rgba(0,0,0,.6)");
		arrow(r, r*1.2, 120, Math.PI*1, "rgba(0,0,0,.6)");

	}
	
}


		
$(function() {
	draw();
})