var aboutUsDots = document.getElementsByClassName("aboutUsDots");
var currentIndex = 0;
var slideIndex = 0;
var lineOfAboutUs = document.getElementById('lineOfAboutUsSlider');

autoSlider();
var leftOffset = 0;
var timer;

aboutUsDots[currentIndex].className += " activeDotsForAboutUs"

function autoSlider() {
	clearTimeout(timer);
	timer = setTimeout(sliderLeft, 6000);
}

function sliderLeft() {
	leftOffset -= 479;
	aboutUsDots[currentIndex].className = aboutUsDots[currentIndex].className.replace(" activeDotsForAboutUs", "");
	currentIndex++;

	if (leftOffset < -1437) {
		leftOffset = 0;
		currentIndex = 0;
	}

	aboutUsDots[currentIndex].className += " activeDotsForAboutUs"
	lineOfAboutUs.style.left = leftOffset + 'px';
	autoSlider();
}


function showAboutUsSlide(slideNumber) {
	leftOffset = slideNumber * -479;
	aboutUsDots[currentIndex].className = aboutUsDots[currentIndex].className.replace(" activeDotsForAboutUs", "");
	currentIndex = slideNumber;

	if (leftOffset < -1437) {
		leftOffset = 0;
		currentIndex = 0;
	}

	aboutUsDots[currentIndex].className += " activeDotsForAboutUs"
	lineOfAboutUs.style.left = leftOffset + 'px';
	autoSlider();
}