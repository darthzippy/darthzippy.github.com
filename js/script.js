$(document).ready(function() {  

	$('.slideshow') 
	.before('<div id="nav">') 
	.cycle({ 
	    fx:     'turnLeft', 
	    speed:  'slow', 
	    timeout: 0, 
	    pager:  '#nav' 
	});
});