(function (window) {
	'use strict';
	
	function Block (blockType) {
		this.blockType = blockType;
		this.size = 60;
		this.originalSize = 64;
		this.sprite = window.ResourceManager.getResource('blocks');
	}

	Block.prototype = {
		constructor: Block,
		draw: function (context, x, y, blockPos) {
		    context.drawImage(this.sprite, (blockPos - 1 || this.blockType - 1) * this.originalSize, 0, this.originalSize, this.originalSize, x * this.size, y * this.size, this.size, this.size);
		}
	};

	window.Block = Block;
})(window);