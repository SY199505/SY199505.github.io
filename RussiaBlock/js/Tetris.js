(function (window) {
	'use strict';

	function Tetris () {
		this.Board = new window.Board(this);
		this.audio;
		this.status = 'palying';
		(new window.Keyboard()).init(this.Board);
	}

	Tetris.prototype = {
		constructor: Tetris,
		initAudio: function () {
			this.audio = new Howl({
				src: './audio/bg.wav',
				loop: false,
				volume: 0.1
			});
			this.audio.play();
		},
		stop_tick: function () {
			window.clearInterval(config.interval);
		},
		startGame: function () {
			this.initAudio();
			this.resume();
		},
		endGame: function () {
			this.audio.stop();
			this.stop_tick();
			this.status = 'over';
		},
		pauseGame: function () {
			if (this.status === 'over') {
				return;
			}
			//暂停音乐
			this.audio.pause();
			//解除按键响应
			this.status = 'pause';
			//停止自由下落
			this.stop_tick();
		},
		resume: function () {
			if (this.status === 'over') {
				return;
			}
			this.audio.play();
			this.status = 'palying';
			let self = this;
			config.interval = window.setInterval(function () {
				self.Board.tick();
			}, config.speed);
		}
	}
	
	window.Tetris = Tetris;
})(window);