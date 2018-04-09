(function (window) {
	'use strict';
	function Level () {
		this.level = 1;
		this.context = new Canvas('level', 100, 70);
		this.init();
	};

	Level.prototype = {
		constructor: Level,
		init: function () {
			this.render();
		},
		render: function () {
			this.context.drawText('Level ' + this.level);
		},
		addLevel: function () {
			this.level++;
			config.speed *= 0.8;
			console.log(config.speed);
			this.context.drawText('恭喜升级！');
			let self = this;
			window.setTimeout(function(){
				self.render();
			}, 500);
		},
		calLevel: function (preScore) {
			let level = this.level;
			for (level; level <= 10; level++) {
				if (level*level*100 < preScore) {
					this.addLevel();
				}
			}
		}
	}
	window.Level = Level;
})(window);