var video;
var playButton;

window.onload = function () {
	video = document.getElementById("videoPlayer");
	playButton = document.getElementById("playButton");
};

function play() {
	video.play();
	video.style.opacity = "1";
	video.setAttribute("controls", "controls");
	video.volume = 0.02;
	playButton.style.display = "none";
}