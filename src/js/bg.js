(function(){
	var bgPos = 0;
	var bgPosScrollSpeed = 20; //20
	var bgUpdateInterval = 500; //500
	var canvas;
	var context;
	var isBgBlurred = false;
	var blurValInPx = 5;
	var bgImg = new Image();

	canvas = document.getElementById("bg");
	context = canvas.getContext("2d");
	bgImg.src = "img/bg.png";
	bgImg.onload = draw;
	setInterval(updateBgPos, bgUpdateInterval);

	window.onresize = function() { draw(); };

	function updateBgPos(){
		requestAnimationFrame(function() {
			bgPos = (bgPos + bgPosScrollSpeed) % (window.innerHeight * 3);
			draw();
		});
	}
	
	function draw(){
		createjs.CSSPlugin.install(createjs.Tween);
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		context.imageSmoothingEnabled = false;
   		context.webkitImageSmoothingEnabled = false;
   		context.mozImageSmoothingEnabled = false;
		
		drawBg();
	}
	
	function drawBg() {
		// Height of the main bg image
		imgHeight = window.innerWidth * bgImg.height / bgImg.width;

		// Draw gradient
		var my_gradient=context.createLinearGradient(0,bgPos -window.innerHeight*4,0,window.innerHeight * 4);
		my_gradient.addColorStop(0,"lightblue");
		my_gradient.addColorStop(0.25,"orange");
		my_gradient.addColorStop(.33,"red");
		my_gradient.addColorStop(.5,"purple");
		my_gradient.addColorStop(0.667,"red");
		my_gradient.addColorStop(.75,"orange");
		my_gradient.addColorStop(1,"lightblue");
		context.fillStyle=my_gradient;
		context.fillRect(0,bgPos -window.innerHeight*3,window.innerWidth, window.innerHeight * 4);

		// Then draw the main bg on top
		context.drawImage(bgImg, 0, 0, window.innerWidth, imgHeight);
	}
})();
