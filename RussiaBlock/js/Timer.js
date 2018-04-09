(function(window) {
    'use strict';

    function Timer() {
        this.canvas = new Canvas('time', 100, 70);
        this.time = 0;
        this.timerId;
        this._init();
    }

    Timer.prototype = {
        constructor: Timer,
        _init: function() {
            this._render();
            this.resume();
        },
        _render: function() {
            this.canvas.drawText(this.format(this.time));
        },
        format: function (time) {
        	let hour, minute, second;
        	hour = Math.floor(time/3600);
        	minute = Math.floor((time - hour*3600)/60);
        	second = time - hour*3600 - minute*60;
        	return (hour > 10 ? hour : ('0' + hour)) + ':' + (minute > 10 ? minute : ('0' + minute)) + ':' + (second > 10 ? second : ('0' + second));
        },
        pause: function() {
            window.clearInterval(this.timerId);
        },
        resume: function() {
            var self = this;
            this.timerId = window.setInterval(function() {
                self.time += 1;
                self._render();
            }, 1000);            	
        },
        stop: function() {
            this.pause();
        }
    };

    window.Timer = Timer;
})(window);