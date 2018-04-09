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
		draw: function (context, x, y, blockPos, size) {
			size = size || this.size;
		    context.drawImage(this.sprite, (blockPos - 1 || this.blockType - 1) * this.originalSize, 0, this.originalSize, this.originalSize, x * size, y * size, size, size);
		}
	};

	window.Block = Block;
})(window);