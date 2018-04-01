(function(window) {
    'use strict';

    function Shape() {
        this.form = Math.floor(Math.random()*4 + 1);
        this.block = new Block(7);
        this.x = 0;
        this.y = 0;
        this.layouts = {
            1: [
                [0, 1, 0],
                [1, 1, 1]
            ],
            2: [
                [1, 0],
                [1, 1],
                [1, 0]
            ],
            3: [
                [1, 1, 1],
                [0, 1, 0]
            ],
            4: [
                [0, 1],
                [1, 1],
                [0, 1]
            ]
        };
        this.layout = this.layouts[this.form];
    }

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
            this.layout = this.layouts[(this.form = this.form + 1 > 4 ? 1 : this.form + 1)]
        }
    };

    window.Shape = Shape;
})(window);