(function(window) {
	'use strict';
	function Canvas (canvasId, width, height) {
		this.el = document.getElementById(canvasId);
		this.context = this.el.getContext('2d');
		this.el.width = width || window.innerWidth;
		this.el.height = height || window.innerHeight;
	};

	Canvas.prototype = {
		constructor: Canvas
	};
	
	window.Canvas = Canvas;
})(window);