function show (context) {
	let secondLevel = context.getElementsByTagName('ul')[0];
	secondLevel.style.display = 'block';
};	

function hide (context) {
	let secondLevel = context.getElementsByTagName('ul')[0];
	secondLevel.style.display = 'none';
};
let isIE = !!window.ActiveXObject;
let isIE6 = isIE && !window.XMLHttpRequest;