var lineOfServicesFirstSlider;
var leftOffsetOfService;
var widthOfServiceBlock;

function showBlueBackgroundFirstServices(serviceBlock, serviceLineName) {
	lineOfServicesFirstSlider = document.getElementById(serviceLineName);
	widthOfServiceBlock = document.querySelector(serviceBlock).offsetWidth;
	leftOffsetOfService = 0;

	leftOffsetOfService -= widthOfServiceBlock;

	lineOfServicesFirstSlider.style.left = leftOffsetOfService + 'px';
}

function showGrayBackgroundFirstServices(serviceBlock, serviceLineName) {
	lineOfServicesFirstSlider = document.getElementById(serviceLineName);
	widthOfServiceBlock = document.querySelector(serviceBlock).offsetWidth;
	leftOffsetOfService = -widthOfServiceBlock;

	leftOffsetOfService += widthOfServiceBlock;

	lineOfServicesFirstSlider.style.left = leftOffsetOfService + 'px';
}
