(function (window) {
	'use strict';
	
	function HighScore () {
		this.context = new Canvas('highScore', 100, 70);
		this.init();
	};

	HighScore.prototype = {
		constructor: HighScore,
		init: function () {
			this.render();
		},
		render: function () {
			this.context.drawText(this.getScore());
		},
		setScore: function (score) {
			window.localStorage.setItem('highScore', score);
			this.render();
		},
		getScore: function () {
			return window.localStorage.getItem('highScore') || 0;
		},
		compareScore: function (score) {
			if (score > this.getScore()) {
				this.setScore(score);
			}
		}
	};

	window.HighScore = HighScore;
})(window);