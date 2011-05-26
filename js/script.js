$(document).ready(function() {  

	$('.slideshow') 
	.after('<div id="nav">') 
	.cycle({ 
	    fx:     'turnLeft', 
	    speed:  'slow', 
	    timeout: 0, 
	    pager:  '#nav' 
	});
	
	$('#portfolio1').codaSlider();
});