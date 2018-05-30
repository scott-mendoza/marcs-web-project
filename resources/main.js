console.log("Webpage is loading in!");

// Gets called the web-page finishes loading everything,
// like the buttons and headers, etc.
window.onload = function() {
	// Socket library, will automatically connect to our server.
	// See this for the tutorial: 
	// https://socket.io/get-started/chat/
	var socket = io(); 
	
	var sendButton = document.getElementById("sendButton");
	var messageBox = document.getElementById("messageBox");
	var messageList = document.getElementById("messageList");
	var userCountDisplay = document.getElementById("userCountDisplay");

	// When a user clicks the send-button,
	sendButton.addEventListener("click", function() {
		// Grab the message.
		var message = messageBox.value;
		// Send it to the server.
		socket.emit("messageSent", message);
		// Reset the message box to empty.
		messageBox.value = "";
	});

	// Here, the server will send us messages when people post.
	socket.on("messagePosted", function(message) {
		// Create a new list element.
		var newListElement = document.createElement("li");

		// Set its class (this will determine the style of the item)
		newListElement.className = "list-group-item";
		// Set the text to hold the new message.
		newListElement.textContent = message;

		// Add the message to the messageList so we can see it.
		messageList.append(newListElement);
	});

	socket.on("updateUserCount", function(newCount) {
		userCountDisplay.text = newCount + " Users Online"
	});


	// This is some magic so that when a user presses
	// enter in the textbox, we trigger a send
	// (by pressing the button through code).
	messageBox.addEventListener("keyup", function(e) {
		e.preventDefault();
		var enterSymbolCode = 0xD; // Numerical representation for Enter.

		if (e.keyCode === enterSymbolCode) {
			sendButton.click();
		}
	});
}
