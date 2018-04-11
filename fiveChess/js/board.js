(function(window) {
	'use strict';
	function board () {
		this.level = 15;
		this.blockWidth = window.config.size;
		this.boardSize = this.level*this.blockWidth;
		this.boardOffset = window.config.size/2;
		this.chessesData = [];
		this.Canvas = new Canvas('chess_board', this.boardSize, this.boardSize);
		this.canvasContext = this.Canvas.context;
		this._init();
	};

	board.prototype = {
		constructor: board,
		_init: function () {
			this.initBoardData();
			window.Loader.setResourse('image', 'images/qiling_zhang.jpeg', 'chessBg');
			let self = this;
			window.Loader.loaderCallback = function () {
				self.drawChessBoard();
				let chess = document.getElementById('chess_board');
				let bColor = true;
				chess.addEventListener("click", function (e) {
					let posX = Math.floor(e.offsetX/self.blockWidth);
					let posY = Math.floor(e.offsetY/self.blockWidth);
					if (!self.chessesData[posX][posY]) {
						self.drawChess(posX, posY, bColor);
						if (bColor) {
							self.chessesData[posX][posY] = 1;

						}else{
							self.chessesData[posX][posY] = 2;
						}
					}
					bColor = !bColor;
				});
			};
		},
		initBoardData: function () {
			let i,
			j;
			for (i=0; i<this.level; i++) {
				this.chessesData.push([]);
				for (j=0; j<this.level; j++) {
					this.chessesData[i][j] = 0;
				}
			}
		},
		drawChessBoard: function () {
			this.canvasContext.strokeStyle = '#D6D1D1';
			this.canvasContext.linesize = 0.5;
			this.canvasContext.drawImage(window.Loader.getResourse('chessBg'), 0, 0, 500, 650, 0, 0, this.boardSize, this.boardSize);
			let i;
			for (i = 0; i < this.level; i++) {
				this.canvasContext.moveTo(this.boardOffset, this.boardOffset + i*this.blockWidth);
				this.canvasContext.lineTo(this.boardSize - this.boardOffset, this.boardOffset + i*this.blockWidth);		
				this.canvasContext.moveTo(this.boardOffset + i*this.blockWidth, this.boardOffset);
				this.canvasContext.lineTo(this.boardOffset + i*this.blockWidth, this.boardSize - this.boardOffset);		
			}
			this.canvasContext.stroke();
		},
		drawChess: function (posX, posY, color) {
			posX = posX * this.blockWidth + this.boardOffset || 0;
			posY = posY * this.blockWidth + this.boardOffset || 0;
			this.canvasContext.beginPath();
			this.canvasContext.arc(posX, posY, this.blockWidth/2*0.9, 0, 2 * Math.PI);
			this.canvasContext.closePath();
			this.canvasContext.fill();
			let gradient = this.canvasContext.createRadialGradient(posX, posY, 0, 
																   posX, posY, this.blockWidth/3);
			if (color) {
				gradient.addColorStop(0, '#636766');
				gradient.addColorStop(1, '#0A0A0A');
			}else{
				gradient.addColorStop(0, '#F9F9F9');
				gradient.addColorStop(1, '#D1D1D1');
			}
			this.canvasContext.fillStyle = gradient;
			this.canvasContext.fill();
		}
	};
	
	window.board = board;
})(window);