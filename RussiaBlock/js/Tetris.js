(function (window) {
	'use strict';

	var speed = 1000;

	function Tetris () {
		this.Board = new window.Board();
		(new window.Keyboard()).init(this.Board);
	}

	Tetris.prototype = {
		constructor: Tetris,
		startGame: function () {
			let self = this;
			var interval = window.setInterval(function () {
				self.Board.tick();
			}, speed);
		},
		endGame: function () {

		}
	}
	
	window.Tetris = Tetris;
})(window);