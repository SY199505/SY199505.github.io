(function(window) {
    'use strict';
    /**
     * Canvas操作类
     * @param canvasId Canvas元素的ID属性
     * @param width canvas宽度
     * @param height canvas高度
     */
    function Canvas(canvasId, width, height) {
        this.canvasId = canvasId;
        this.el = document.getElementById(canvasId);
        if (!this.el) {
            throw new Error('Must provider a right canvas id.');
        }
        this.context = this.el.getContext('2d');
        this.width = width || window.innerWidth;
        this.height = height || window.innerHeight;

        this._init();
    }

    Canvas.prototype = {
        constructor: Canvas,
        _init: function () {
            this.el.width = this.width;
            this.el.height = this.height;
        },
        clear: function (x, y, width, height) {
            x = x || 0;
            y = y || 0;
            width = width || this.width;
            height = height || this.height;
            this.context.clearRect(x, y, width, height);
        },
        drawText: function (text, x, y) {
            const size = 25;
            this.context.font = size + 'px Arial';
            this.context.fillStyle = 'red';
            this.context.textAlign = 'center';
            this.context.fillText(text, x = x ? x : this.width / 2, y = y ? y : (this.height + size) / 2);
        }
    };
    window.Canvas = Canvas;
})(window);