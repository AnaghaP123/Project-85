canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

gcw = 75;
gch = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

gx = 5;
gy = 225;

function add() {
	background_img = new Image();
	background_img.onload = uploadBackground();
	background_img.src = background_image;
	gc_img = new Image();
	gc_img.onload = uploadgc();
	gc_img.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}

function uploadgc() {
	ctx.drawImage(gc_img, gx, gy, gcw, gch);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(gy >= 0)
	{
		gy = gy - 10;
		uploadBackground();
		uploadgc();
	}
}

function down()
{
	if(gy <= 400)
	{
		gy = gy + 10;
		uploadBackground();
		uploadgc();
	}
}

function left()
{
	if(gx >= 0)
	{
		gx = gx - 10;
		uploadBackground();
		uploadgc();
	}
}

function right()
{
	if( gx <= 800)
	{
		gx = gx + 10;
		uploadBackground();
		uploadgc();
	}
}
