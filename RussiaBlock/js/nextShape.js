(function (window) {
	'use strict';
	
	function nextShape () {
		this.Canvas = new Canvas('nextShape', 100, 70);
		this.Shape;
		this.init();
	};

	nextShape.prototype = {
		constructor: nextShape,
		init: function () {

		},
		render: function (shape, size) {
			this.Canvas.clear();	
			shape.draw(this.Canvas.context, size)
		}
	};

	window.nextShape = nextShape;
})(window);