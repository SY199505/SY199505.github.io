$(function () {
	$('.first-level-item').on('mouseover', function () {
		$('.second-level', $(this)).show();
	}).on('mouseout', function () {
		$('.second-level', $(this)).hide();
	});
	$('.slide').on('mouseover', function () {
		$(this).find('.second-level').slideDown(1000);
	}).on('mouseout', function () {
		$(this).find('.second-level').slideUp('slow');
	});
});

// DOMLoadComplete