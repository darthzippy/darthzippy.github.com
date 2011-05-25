$(document).ready(function() {  

	$('.slideshow') 
	.before('<div id="nav">') 
	.cycle({ 
	    fx:     'turnLeft', 
	    speed:  'fast', 
	    timeout: 0, 
	    pager:  '#nav' 
	});
});