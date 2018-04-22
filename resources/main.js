console.log("Webpage is loading in!");

// Gets called the web-page finishes loading everything,
// like the buttons and headers, etc.
window.onload = function() {
	var myButton = document.getElementById("button1");
	var myHeader = document.getElementById("header");
	// We're setting a callback on the button
	// for everytime it gets clicked.
	myButton.addEventListener("click", function() {
		if (myHeader.innerHTML == "My header") {
			myHeader.innerHTML = "No, ur header";
		} else {
			myHeader.innerHTML = "My header";
		}
	});
}
