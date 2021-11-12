$(document).ready(function () {
	$('.ourWorksCarousel').carousel({ interval: false });
});

$(function () {
	$('.btn').click(function () {
		$('.btn').removeClass('activeOurWorksSliderButtons');
		$(this).addClass("activeOurWorksSliderButtons");
	});
});
