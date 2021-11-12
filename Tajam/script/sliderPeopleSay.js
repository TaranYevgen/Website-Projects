document.getElementById('nextButton').onclick = sliderPeopleSayLeft;
document.getElementById('previousButton').onclick = sliderPeopleSayRight;
var lineReviews = document.getElementById('lineOfPeopleSaySlider');
var peopleSayDots = document.getElementsByClassName('peopleSayDots');

var offset = -1544;
var currentDotsIndex = 2;

peopleSayDots[currentDotsIndex].className += " activeDotsForPeopleSay";

function sliderPeopleSayRight() {
	offset += 772;
	peopleSayDots[currentDotsIndex].className = peopleSayDots[currentDotsIndex].className.replace(" activeDotsForPeopleSay", "");
	currentDotsIndex--;

	if (offset > 0) {
		offset = -3088;
		currentDotsIndex = 4;
	}

	peopleSayDots[currentDotsIndex].className += " activeDotsForPeopleSay";
	lineReviews.style.left = offset + 'px';
}

function sliderPeopleSayLeft() {
	offset -= 772;
	peopleSayDots[currentDotsIndex].className =
		peopleSayDots[currentDotsIndex].className.replace(" activeDotsForPeopleSay", "");
	currentDotsIndex++;

	if (offset < -3088) {
		offset = 0;
		currentDotsIndex = 0;
	}

	peopleSayDots[currentDotsIndex].className += " activeDotsForPeopleSay";
	lineReviews.style.left = offset + 'px';
}

$('.sliderOfAvatars').slick({
	slidesToShow: 4,
	centerMode: true,
	slidesToScroll: 1,
	dots: false,
	arrows: false,
	infinite: true,
	variableWidth: true,
	arrows: true,
	nextArrow: '.nextButton',
	prevArrow: '.previousButton',
});