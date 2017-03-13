$(document).ready(function() {
	var height = $(window).height();
	$(document).scroll(function(){
		var scrollTop = $(this).scrollTop();
		var pixels = scrollTop / 150;

		if(scrollTop < height) {
			$("#header-slideshow").css({
				"-webkit-filter":"blur(" + pixels + "px)",
				"background-position": "center -" + pixels * 10 + "px"
			});
		}
	});
});