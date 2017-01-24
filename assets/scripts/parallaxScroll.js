$(document).ready(function() {
	var ypos, image;
	function parallex() {
		ypos = window.pageYOffset;
		image = document.getElementById("header-slideshow");
		image.style.top = ypos * 0.6 +'px';
	}
	window.addEventListener('scroll', parallex);
});