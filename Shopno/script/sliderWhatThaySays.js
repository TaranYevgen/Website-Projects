var whatTheySaysDots = document.getElementsByClassName("whatTheySaysDots");
var currentIndexWTS = 0;
var slideIndex = 0;
var lineOfWhatTheySaysSlider = document.getElementById('lineOfWhatTheySaysSlider');
var widthSliderContainer = document.querySelector('.sliderWhatTheySaysContainer').offsetWidth;
var containerWidthWithoutLastBlock = widthSliderContainer * (whatTheySaysDots.length - 1);

document.getElementById('nextButton').onclick = sliderLeftWTS;
document.getElementById('previousButton').onclick = function () {
	if ((currentIndexWTS - 1) < 0)
		showWhatTheySaysSlide(3);
	else
		showWhatTheySaysSlide(currentIndexWTS - 1);
}

autoSlider();
var leftOffsetWhatTheySays = 0;
var overturningTimer;

whatTheySaysDots[currentIndexWTS].className += " activeDotsForWhatTheySays"

function autoSlider() {
	clearTimeout(overturningTimer);
	overturningTimer = setTimeout(sliderLeftWTS, 6000);
}

function sliderLeftWTS() {
	leftOffsetWhatTheySays -= widthSliderContainer;
	whatTheySaysDots[currentIndexWTS].className =
		whatTheySaysDots[currentIndexWTS].className.replace(" activeDotsForWhatTheySays", "");
	currentIndexWTS++;

	if (leftOffsetWhatTheySays < -containerWidthWithoutLastBlock) {
		leftOffsetWhatTheySays = 0;
		currentIndexWTS = 0;
	}

	whatTheySaysDots[currentIndexWTS].className += " activeDotsForWhatTheySays"
	lineOfWhatTheySaysSlider.style.left = leftOffsetWhatTheySays + 'px';
	autoSlider();
}


function showWhatTheySaysSlide(slideNumberWTS) {
	leftOffsetWhatTheySays = slideNumberWTS * -widthSliderContainer;
	whatTheySaysDots[currentIndexWTS].className =
		whatTheySaysDots[currentIndexWTS].className.replace(" activeDotsForWhatTheySays", "");
	currentIndexWTS = slideNumberWTS;

	if (leftOffsetWhatTheySays < -containerWidthWithoutLastBlock) {
		leftOffsetWhatTheySays = 0;
		currentIndexWTS = 0;
	}

	whatTheySaysDots[currentIndexWTS].className += " activeDotsForWhatTheySays"
	lineOfWhatTheySaysSlider.style.left = leftOffsetWhatTheySays + 'px';
	autoSlider();
}