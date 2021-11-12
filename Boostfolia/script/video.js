$("#playButton").click(function () {
	$("#playButton").css("display", "none");
	$("#videoPlayer").css("display", "block");
	$("#videoPlayer")[0].src += "?autoplay=1";
});