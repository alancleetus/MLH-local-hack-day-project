var $xPos_mouse = 0;
var $yPos_mouse = 0;
var $newX = 0; 
var $newY =0;

$(document).mousemove(function(e){
	$xPos_mouse = e.pageX;
	$yPos_mouse = e.pageY;

	if($yPos_mouse < 50) $yPos_mouse = 50;
});

	var $loop = setInterval(function(){
	
	// change 12 to alter damping higher is slower
	$newX += (($xPos_mouse - $newX)/12);
	$newY += (($yPos_mouse - $newY)/12);
	$("#seeker").css({left:$newX +'px', top:$newY +'px'});  
}, 3);


/*****************************/
function game()
{
	console.log("start");
	var posX = 0;
	var posY = 50;
	
	var dist = 100;
	var dir = 0;
	var timer = 50;
	var gwHeight = $("#game_window").height();
	var gwWidth = $("#game_window").width();
	
	console.log(gwHeight+" "+gwWidth);
	var the_dot = document.getElementById("dot");
		
	var id = setInterval(playGame,5);
	function playGame()
	{
		if(timer == 0)
		{
			timer = 50;
			dir = Math.floor(Math.random()*4);
		}
		switch(dir)
		{
			case 0:
				moveUp();
				break;
		
			case 1:
				moveDown();
				break;
		
			case 2:
				moveLeft();
				break;
		
			case 3:
				moveRight();
				break;
		
		}
		timer--;
	}
	
	function moveUp()
	{
		if(posY-dist > 50) posY--;
		else posY++
		the_dot.style.top = posY+"px";
		console.log("up");
	}
	
	function moveDown()
	{
		if(posY+dist < gwHeight) posY++;
		else posY--;
		the_dot.style.top = posY+"px";
		console.log("down");
	}
	
	function moveLeft()
	{
		if(posX-dist > 0) posX--;
		else posX++;
		the_dot.style.left = posX+"px";
		console.log("left");
	}
	
	function moveRight()
	{
		if(posX+dist < gwHeight) posX++;
		else posX--;
		the_dot.style.left = posX+"px";
		console.log("right");
	}
	
}