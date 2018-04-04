(function (window) {
	'use strict';

	let keys = {
		37: 'left',
		38: 'top',
		39: 'right',
		40: 'down'
	}
	
	function Keyboard () {

	}

	Keyboard.prototype = {
		constructor: Keyboard,
		init: function (board) {
			var self = this;
			self.board = board;
			document.addEventListener('keydown', function (e) {
				if (self.board.Tetris.status === 'palying') {
					self.keyDown(e);
				}
			});
		},
		keyDown: function (e) {
			this.press(keys[e.keyCode]);
		},
		press: function (director) {
			switch (director) {
				case 'left': 
					if (this.board.validPos(-1, 0)) {
						this.board.Shape.x -= 1;
                    	this.board.Shape.draw(this.board.context);
					}
					break;
				case 'top': 
					if (this.board.validPos(0, 0)) {
						this.board.Shape.transform();
	                	this.board.Shape.draw(this.board.context);
	                }
					break;
				case 'right': 
					if (this.board.validPos(1, 0)) {
						this.board.Shape.x += 1;
                		this.board.Shape.draw(this.board.context);
					}
					break;
				case 'down': 
					if (this.board.validPos(0, 1)) {
						this.board.Shape.y += 1;
                    	this.board.Shape.draw(this.board.context);
					}
					break;
			}
		}
	};

	window.Keyboard = Keyboard;
})(window);