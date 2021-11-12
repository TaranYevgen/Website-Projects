var homeDots = document.getElementsByClassName("testimonialsDots");
var currentIndex = 0;
var slideIndex = 0;
var lineOfTestimonialsSlider = document.getElementById('lineOfTestimonialsSlider');

autoSlider();
var leftOffset = 0;
var timer;

homeDots[currentIndex].className += " activeDotsForTestimonials"

function autoSlider() {
	clearTimeout(timer);
	timer = setTimeout(sliderLeft, 6000);
}

function sliderLeft() {
	leftOffset -= 1139;
	homeDots[currentIndex].className = homeDots[currentIndex].className.replace(" activeDotsForTestimonials", "");
	currentIndex++;

	if (leftOffset < -5695) {
		leftOffset = 0;
		currentIndex = 0;
	}

	homeDots[currentIndex].className += " activeDotsForTestimonials"
	lineOfTestimonialsSlider.style.left = leftOffset + 'px';
	autoSlider();
}


function showTestimonialsSlide(slideNumber) {
	leftOffset = slideNumber * -1139;
	homeDots[currentIndex].className = homeDots[currentIndex].className.replace(" activeDotsForTestimonials", "");
	currentIndex = slideNumber;

	if (leftOffset < -5695) {
		leftOffset = 0;
		currentIndex = 0;
	}

	homeDots[currentIndex].className += " activeDotsForTestimonials"
	lineOfTestimonialsSlider.style.left = leftOffset + 'px';
	autoSlider();
}