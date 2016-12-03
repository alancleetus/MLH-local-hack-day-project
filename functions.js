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
