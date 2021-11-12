$("#submit").on("click", function () {
	var name = $("#name").val().trim();
	var email = $("#email").val().trim();
	var subject = $("#subject").val().trim();
	var projectBudget = $("#projectBudget").val().trim();
	var message = $("#message").val().trim();

	if (name == "" || email == "" || subject == "" || projectBudget == "" || message == "") {
		alert("Fill in all field values!")
		return false;
	}

	$.ajax({
		url: 'http://zheniat.beget.tech/sendAlexis.php',
		type: 'POST',
		cache: false,
		data: { 'name': name, 'email': email, 'subject': subject, 'projectBudget': projectBudget, 'message': message },
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