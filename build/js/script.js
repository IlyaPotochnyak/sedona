var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function(event) {
	event.preventDefault();
	if (navMain.classList.contains("main-nav--closed")) {
		navMain.classList.remove("main-nav--closed");
		navMain.classList.add("main-nav--opened");
	} else {
		navMain.classList.add("main-nav--closed");
		navMain.classList.remove("main-nav--opened");
	}
});

var form = document.querySelector(".feedback__form");
var tel = document.getElementById("telephone");
var error = document.querySelector(".feedback__error");

tel.addEventListener("keyup", function(event) {
	// Each time the user types something, we check if the
	// email field is valid.
	if (tel.validity.valid) {
		// In case there is an error message visible, if the field
		// is valid, we remove the error message.
		error.innerHTML = ""; // Reset the content of the message
		error.className = "feedback__error"; // Reset the visual state of the message
	}
}, false);
form.addEventListener("submit", function(event) {
	// Each time the user tries to send the data, we check
	// if the email field is valid.
	if (!tel.validity.valid) {
		// If the field is not valid, we display a custom
		// error message.
		error.innerHTML = "Ошибка, перепроверьте номер";
		error.className = "feedback__error  feedback__error--active";
		// And we prevent the form from being sent by canceling the event
		event.preventDefault();
	}
}, false);
