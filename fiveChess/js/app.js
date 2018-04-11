(function(document) {
	'use strict';
	function _init () {
		new board();
	};

	document.addEventListener('DOMContentLoaded', function (e) {
		_init();
	})
})(document);