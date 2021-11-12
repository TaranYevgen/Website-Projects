var homeDots = document.getElementsByClassName("homeDots");
var currentIndex = 0;
var slideIndex = 0;
var lineHome = document.getElementById('lineOfHomeSlider');

autoSlider();
var leftOffset = 0;
var timer;

homeDots[currentIndex].className += " activeDotsForHome"

function autoSlider() {
	clearTimeout(timer);
	timer = setTimeout(sliderLeft, 6000);
}

function sliderLeft() {
	leftOffset -= 772;
	homeDots[currentIndex].className = homeDots[currentIndex].className.replace(" activeDotsForHome", "");
	currentIndex++;

	if (leftOffset < -2316) {
		leftOffset = 0;
		currentIndex = 0;
	}

	homeDots[currentIndex].className += " activeDotsForHome"
	lineHome.style.left = leftOffset + 'px';
	autoSlider();
}


function showHomeSlide(slideNumber) {
	leftOffset = slideNumber * -772;
	homeDots[currentIndex].className = homeDots[currentIndex].className.replace(" activeDotsForHome", "");
	currentIndex = slideNumber;

	if (leftOffset < -2316) {
		leftOffset = 0;
		currentIndex = 0;
	}

	homeDots[currentIndex].className += " activeDotsForHome"
	lineHome.style.left = leftOffset + 'px';
	autoSlider();
}