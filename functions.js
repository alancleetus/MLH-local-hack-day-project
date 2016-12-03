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
	
	var gwHeight = $("#game_window").height();
	var gwWidth = $("#game_window").width();
	
	console.log(gwHeight+" "+gwWidth);
	var the_dot = document.getElementById("dot");
		
	var id = setInterval(playGame,5);
	function playGame()
	{
		
	}
	
	function moveUp()
	{
		if(posY-1 > 50) posY--;
		else posY++
		the_dot.style.top = posY+"px";
	}
	
	function moveDown()
	{
		if(posY+1 < gwHeight) posY++;
		else posY--;
		the_dot.style.top = posY+"px";
	}
	
	function moveLeft()
	{
		if(posX-1 > 0) posX--;
		else posX++;
		the_dot.style.left = posX+"px";
	}
	
	function moveRight()
	{
		if(posX+1 < gwHeight) posX++;
		else posX--;
		the_dot.style.left = posX+"px";
	}
	
}