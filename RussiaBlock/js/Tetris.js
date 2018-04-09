(function (window) {
	'use strict';

	function Tetris () {
		this.audio;
		this.Score = new window.Score();
		this.Timer = new window.Timer();
		this.Level = new window.Level();
		this.HighScore = new window.HighScore();
		this.nextShape = new window.nextShape();
		this.Board = new window.Board(this);
		this.status = 'playing';
		(new window.Keyboard()).init(this.Board);
	};

	Tetris.prototype = {
		constructor: Tetris,
		initAudio: function () {
			this.audio = new Howl({
				src: './audio/bg.wav',
				loop: false,
				volume: 0.1
			});
			this.playMusic();
		},
		playMusic: function () {
			if (config.music) {
				this.audio.play();
			}
		},
		startTick: function () {
			let self = this;
			window.config.interval = window.setInterval(function () {
				self.Board.tick();
			}, window.config.speed);
		},
		stop_tick: function () {
			window.clearInterval(window.config.interval);
		},
		startGame: function () {
			this.initAudio();
			this.startTick();
		},
		endGame: function () {
			this.Timer.pause();
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
			//停止计时器
			this.Timer.pause();
		},
		resume: function () {
			if (this.status === 'over') {
				return;
			}
			this.Timer.resume();
			this.playMusic();
			this.status = 'playing';
			this.startTick();
		}
	}
	
	window.Tetris = Tetris;
})(window);