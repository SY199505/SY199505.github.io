(function (window) {
    'use strict';
    
    function Board(Tetris) {
        this.Tetris = Tetris;
        this.Score = new Score();
        this.blockSize = 30;
        this.rows = config.rows;
        this.cols = config.cols;
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
            let i, j;
            for (i = 0; i < this.rows; i++) {
                this.boardList[i] = [];
                for (j = 0; j < this.cols; j++) {
                    this.boardList[i][j] = 0;
                }
            }
        },
        _initGrid () {
            let i;
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
            if (this.validPos(0, 1)) {
                this.Shape.y += 1;
                this.Shape.draw(this.context);
            }else {
                // window.clearInterval(config.interval);
                this.addShapeToBoardList();
                this.clearFullRows();
                this.Shape = new window.Shape();
            }
            this.refresh();
            this.Shape.draw(this.context);
        },
        refresh: function () {
            this.canvas.clear();
            this.context.putImageData(this.gridImageData, 0, 0);
            this.drawBlocks();
        },
        validPos: function (moveX, moveY) {
            let nextX = moveX + this.Shape.x;
            let nextY = moveY + this.Shape.y;
            for (let row = 0; row < this.Shape.layout.length; row++) {
                for (let col = 0; col < this.Shape.layout[row].length; col++) {
                    if (this.Shape.layout[row][col]) {
                        if (nextX < 0 //左边界
                            || nextX + col >= this.cols //右边界
                            || nextY + row >= this.rows //下边界
                            || this.boardList[row + nextY][col + nextX] //当前存在块
                            ) {
                            return false;
                        }
                    }
                }
            }
            this.refresh();
            return true;
        },
        addShapeToBoardList: function () {
            for (let row = 0; row < this.Shape.layout.length; row++) {
                for (let col = 0; col < this.Shape.layout[row].length; col++) {
                    if (this.Shape.layout[row][col]) {
                        let boardX = col + this.Shape.x;
                        let boardY = row + this.Shape.y;
                        if (this.boardList[boardY][boardX]) {
                            this.Tetris.endGame();
                        }else {
                            this.boardList[boardY][boardX] = this.Shape.num;
                        }
                    }
                }
            }
        },
        drawBlocks: function () {
            let row, col;
            for (row = 0; row < this.rows; row++) {
                for (col = 0; col < this.cols; col++) {
                    if (this.boardList[row][col]) {
                        this.Shape.block.draw(this.context, col, row, this.boardList[row][col]);
                    }
                }
            }
        },
        clearFullRows: function () {
            let lines = 0;
            for (let row = this.rows-1; row >= 0; row--) {
                let bFull = this.boardList[row].filter(function (item) {
                    return item > 0;
                }).length === this.cols;
                if (bFull) {
                    this.boardList.splice(row, 1);
                    this.boardList.unshift(this.creatEmptyRow());
                    row++;
                    lines++;
                }
            }
            this.Score.addScore(this.totalScore(lines));

        },
        totalScore: function (n) {
            return n*n*100;
        },
        creatEmptyRow: function () {
            let emptyRow = [];
            for (let col = 0; col < this.cols; col++) {
                emptyRow.push(0);
            }
            return emptyRow;
        }
    };  

    window.Board = Board;
})(window);