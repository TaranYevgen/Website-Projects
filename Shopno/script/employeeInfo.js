var infoSlideIndex;
showEmployeeInfoSlide(infoSlideIndex);

function showEmployeeInfoSlide(infoSlideNumber) {
	var infoSlides = document.getElementsByClassName("emloyeeInfo");

	for (var count = 0; count < infoSlides.length; count++) {
		if (count == (infoSlideNumber)) {
			infoSlides[count].style.display = "block";
		}
		else {
			infoSlides[count].style.display = "none";
		}
	}
}