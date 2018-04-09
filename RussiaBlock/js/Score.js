(function (window) {
	'use strict';
	
	function Score () {
		this.context = new window.Canvas ('score', 100, 70);
		this.initScore = 0;
		this.init();
	};

	Score.prototype = {
		constructor: Score,
		init: function () {
			this.render();
		},
		render: function () {
			this.context.drawText(this.initScore);
		},
		addScore: function (score) {
			this.initScore += score;
			this.render();
			return this.initScore;
		}
	}

	window.Score = Score;
})(window);