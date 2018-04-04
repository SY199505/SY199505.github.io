(function (window) {
	'use strict';
	
	function Time () {
		this.context = new window.Canvas('time', 100, 70);
		this.initTime = 0;
		this.init();
	};

	Time.prototype = {
		constructor: Time,
		init: function () {
			this.context.drawText(this.initTime);
		}
	};

	window.Time = Time;
})(window);