$("#submit").on("click", function () {
	var email = $("#email").val().trim();
	var number = $("#number").val().trim();
	var name = $("#name").val().trim();
	var message = $("#message").val().trim();

	if (email == "" || number == "" || name == "" || message == "") {
		alert("Fill in all field values!")
		return false;
	}

	$.ajax({
		url: 'http://zheniat.beget.tech/send.php',
		type: 'POST',
		cache: false,
		data: { 'name': name, 'email': email, 'number': number, 'message': message },
		dataType: 'html',
		beforeSend: function () {
			$("#submit").prop("disabled", true);
		},
		success: function (data) {
			if (!data)
				alert("There were errors, the message was not sent!")
			else
				$("#formMessage").trigger("reset");
			alert(data);
			$("#submit").prop("disabled", false);
		}
	})
});