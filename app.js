function validatePassword() {
	var password = document.getElementById("password-input").value;

	if (password == "myPassword") {
		window.location.href = "ultra.html";
	} else {
		document.getElementById("password-form").reset();
		var errorMessage = document.createElement("p");
		errorMessage.innerHTML = "Incorrect password. Please try again.";
		errorMessage.id = "error-message";
		document.getElementById("password-form").appendChild(errorMessage);
		event.preventDefault();
	}
}
