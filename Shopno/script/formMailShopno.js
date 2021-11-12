$("#submit").on("click", function () {
	var name = $("#name").val().trim();
	var subject = $("#subject").val().trim();
	var email = $("#email").val().trim();
	var message = $("#message").val().trim();

	if (name == "" || email == "" || subject == "" || projectBudget == "" || message == "") {
		alert("Fill in all field values!")
		return false;
	}

	$.ajax({
		url: 'http://zheniat.beget.tech/sendShopno.php',
		type: 'POST',
		cache: false,
		data: { 'name': name, 'subject': subject, 'email': email, 'message': message },
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