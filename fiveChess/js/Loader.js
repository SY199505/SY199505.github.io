(function () {
	'use strict';

	let cacheMap = new Map();
	let count = 0;

	function addCount () {
		count++;
		if (count && typeof(window.Loader.loaderCallback) === 'function') {
			window.Loader.loaderCallback();
		}
	};

	let setResourse = function (type, src, name) {
		let resourse;
		switch (type) {
			case 'image':
				resourse = new Image();
				resourse.src = src;
				break;
			default:
				throw new Error('Must provider attr');
				break;
		}
		resourse.onload = function () {
			cacheMap.set(name, resourse);
			addCount();
		}
	};

	let getResourse = function (key) {
		return cacheMap.get(key);
	};

	window.Loader = {
		setResourse: setResourse,
		getResourse: getResourse,
		loaderCallback: null
	}

})(window);