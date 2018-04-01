(function (window) {
    'use strict';
    
    function Board() {
        this.blockSize = 30;
        this.rows = 20;
        this.cols = 13;
        this.canvas = new Canvas('c_game_main', this.cols * this.blockSize, this.rows * this.blockSize);
        this.context = this.canvas.context;
        this.boardList = [];
        this.Shape = new window.Shape();
        ResourceManager.getResource('blocks');
        this._init();
    }

    Board.prototype = {
        constructor: Board,
        _buildGridData () {
            var i, j;
            for (i = 0; i < this.rows; i++) {
                this.boardList[i] = [];
                for (j = 0; j < this.cols; j++) {
                    this.boardList[i][j] = 0;
                }
            }
        },
        _initGrid () {
            var i;
            this.context.strokeStyle = 'green';
            this.context.lineWidth = 0.5;
            //绘制线条的笔迹
            for (i = 0; i <= this.rows; i++) {
                this.context.moveTo(0, i * this.blockSize);
                this.context.lineTo(this.canvas.width, i * this.blockSize);
            }
            for (i = 0; i <= this.cols; i++) {
                this.context.moveTo(i * this.blockSize, 0);
                this.context.lineTo(i * this.blockSize, this.canvas.height);
            }
            //绘制线条
            this.context.stroke();

            //缓存数据
            this.gridImageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
        },
        _init: function () {
            this._buildGridData();
            this._initGrid();
            this.Shape.draw(this.context);
        },
        tick: function () {
            this.Shape.y += 1;
            this.canvas.clear();
            this.context.putImageData(this.gridImageData, 0, 0);
            this.Shape.draw(this.context);
        },
        validPos: function (moveX, moveY) {
            let nextX = moveX + this.Shape.x;
            let nextY = moveY + this.Shape.y;
            for (let row = 0; row < this.Shape.layout.length; row++) {
                for (let col = 0; col < this.Shape.layout[row].length; col++) {
                    if (this.Shape.layout[row][col] 
                        && nextX >= 0 
                        && nextY <= this.rows - this.Shape.layout.length 
                        && !this.boardList[row + nextY][col + nextX]) {
                        this.canvas.clear();
                        this.context.putImageData(this.gridImageData, 0, 0);
                        return true;
                    }
                }
            }
            return false;
        }
    };  

    window.Board = Board;
})(window);