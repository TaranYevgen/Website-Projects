var slideIndex = 1;
showEmployeeSlide(slideIndex);

function showEmployeeSlide(slideNumber) {
	var slides = document.getElementsByClassName("biographyBubble");
	var dots = document.getElementsByClassName("employeeDots");

	for (var count = 0; count < slides.length; count++) {
		if (count == (slideNumber - 1)) {
			slides[count].style.display = "block";
			dots[count].className += " active";
		}
		else {
			slides[count].style.display = "none";
			dots[count].className = dots[count].className.replace(" active", "");
		}
	}
}