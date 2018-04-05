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
				if (self.board.Tetris.status === 'playing') {
					self.keyDown(e);
				}
			});
	        document.addEventListener('click', function (e) {
                if (self.board.Tetris.status === 'playing') {
                    switch (e.target.classList[0]) {
                        case 'control-left':
                            if (self.board.validPos(-1, 0)) {
                                self.board.Shape.x -= 1;
                                self.board.Shape.draw(self.board.context);
                            }
                            break;
                        case 'control-change':
           					if (self.board.validPos(0, 0)) {
								self.board.Shape.transform();
			                	self.board.Shape.draw(self.board.context);
			                }
                            break;
                        case 'control-right':
							if (self.board.validPos(1, 0)) {
								self.board.Shape.x += 1;
		                		self.board.Shape.draw(self.board.context);
							}
							break;
                        case 'control-down':
							if (self.board.validPos(0, 1)) {
								self.board.Shape.y += 1;
		                    	self.board.Shape.draw(self.board.context);
							}
							break;
                    }
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