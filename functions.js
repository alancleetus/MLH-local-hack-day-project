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

/*global values*/
var score = 0;
var originalX = 0;
var originalY = 50

var posX = 0;
var posY = 50;

function game()
{
	console.log("start");
	
	var dist = 10;
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
			dir = Math.floor(Math.random()*8);
			score += 1;
			
			document.getElementById("val").innerHTML = score;

			switch(score/100)
			{
				case 0:
					var dist = 10;
					break;
				case 1:
					var dist = 100;
					break;
				case 2:
					var dist = 300;
					break;
				case 3:
					var dist = 400;
					break;
				case 4:
					var dist = 500;
					break;
				default:
					var dist = 600;
					break;
					
			}
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
			
			case 4:
				moveUp();
				moveLeft();
				break;
		
			case 5:
				moveUp();
				moveRight();
				break;
		
			case 6:
				moveDown();
				moveLeft();
				break;
		
			case 7:
				moveDown();
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
	
	
	document.getElementById("pauseGame").onclick  = function pauseGame()
	{
		clearInterval(id);
	
	}
	
	document.getElementById("endGame").onclick  = function endGame()
	{
		clearInterval(id);
		
		the_dot.style.top = originalY;
		the_dot.style.left = originalX
		
		posX = originalX;
		posY = originalY;
		score = 0;
		
		document.getElementById("val").innerHTML = score;
	}
	
	
}