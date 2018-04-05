(function(window) {
    'use strict';
    function random (min, max) { //大于min小于max的整数
        return Math.floor(Math.random()*max + min);
    }
    function Shape() {
        this.shapeList = [
            {
                //方块
                shapeType: [[1, 1],[1, 1]] 
            }, 
            {
                //长条
                shapeType: [[1, 1, 1, 1]] 
            }, 
            {
                //T型
                shapeType: [[0, 1, 0],[1, 1, 1]] 
            }, 
            {
                //L型
                shapeType: [[1, 0],[1, 0], [1, 1]] 
            }, 
            {
                //Z型
                shapeType: [[1, 1, 0],[0, 1, 1]] 
            }, 
            {
                //三角型
                shapeType: [[1, 0],[1, 1]] 
            },
            {
                //凹型
                shapeType: [[1, 0, 1], [1, 1, 1]]
            } 
        ];
        this.num = random(1, 7); // 1到this.shapeList.length之间的整数
        this.block = new Block(this.num);
        this.x = 5;
        this.y = 0;
        this.layout = this.shapeList[this.num - 1].shapeType;
    };

    Shape.prototype = {
        constructor: Shape,
        draw: function(context) {
            for (var i = 0; i < this.layout.length; i++) {
                for (var j = 0; j < this.layout[i].length; j++) {
                    if (this.layout[i][j]) {
                        this.block.draw(context, j + this.x, i + this.y);
                    }
                }
            }
        },
        transform: function () {
            let newLayout = [];
            let i, j;
            for (i = 0; i < this.layout[0].length; i++) {
                newLayout[i] = [];
                for (j = 0; j < this.layout.length; j++) {
                    newLayout[i][j] = this.layout[this.layout.length - 1 - j][i];
                }
            }
            this.layout = newLayout;
            this.resetLayoutPos();
        },
        resetLayoutPos: function () {
            this.x = this.x < 0 ? 0 : this.x;
            this.y = this.y < 0 ? 0 : this.y;
            this.x = this.x + this.layout[0].length > config.cols ? config.cols - this.layout[0].length : this.x;
            this.y = this.y + this.layout.length > config.rows ? config.rows - this.layout.length : this.y;
        }
    };

    window.Shape = Shape;
})(window);