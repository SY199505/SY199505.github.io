(function adjust (window) {
	let innerWidth = window.innerWidth;
	let htmlSize = innerWidth*20/320;
	window.config.size = htmlSize;
	let html = document.getElementsByTagName('html')[0];
	html.style.fontSize = htmlSize + 'px';
})(window);