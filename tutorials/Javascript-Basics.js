// Define variable.
var my_var_name = 3;

// Define constant.
const my_constant = "Marc";

// Numbers
var x = 1;
var y = 3.4;
var z = x + y;

// Strings
var str1 = "Hi";
var str2 = "Marc";
var text = str1 + " " + str2; // Is now: "Hi Marc"

// Printing out things.
console.log("I'm writing to console");
console.log(str1, str2, x, y, "lol"); // Will print out variables too.

// Booleans (True/False values)
var trueVar = true;
var falseVar = false;

// Boolean Math: && and ||
var and_bool = trueVar && falseVar; // and_bool = true if trueVar is true
									// and falseVar is true.
var or_bool = trueVar || falseVar;  // or_bool = true if trueVar is true
									// or falseVar is true. Can be either both 
									// be true or just one.

// Checking Equality: == 
var areTheyEqual = str1 == "Hi"; // True
areTheyEqual = str2 == "Hi"; // False, because str2 == "Marc"

// Use parenthesis for grouping expressions:
areTheyEqual = (str1 + " " + str2) == "Eh"; 		// False.
areTheyEqual = (str1 + " " + str2) == "Hi Marc"; 	// True.


// Classic if-statements:
if (trueVar) {
	console.log("This is true!!");
	// You can obviously write more here.
} else {
	console.log("Not true :( ");
}

// Classic for-loops:
x = "x";
for (var i = 0; i < 100; i++) {
	x = x + "x";
}
console.log(x) // x will now be "xxxxxxxx..."


///// Define Functions: (Couple Ways) ////////
// 1. Classic
// Note: Define as many parameters as you need or none
function trueFunction(parameter1, parameter2) {
	// Do some work.
	// Return value or not. Optional to return a value.
	return true;
}

// 2. Put it in a variable.
var myFunction = function(parameter1) {
	// Same as above, except it's in a variable so you can pass it
	// around. Cool!
	console.log("Function as variable was called!");
}
/////////////////////////////////////////////


///// Calling Functions
// Call it, don't save results.
trueFunction();	

// Call it, save return value.			
var myBoolean = trueFunction();

// Remember that variable function we defined?
// Here's how you call it: (No surprise)
var nullResult = myFunction();
// The interesting thing is that myFunction() returns 
// nothing. It just does console.log()... So what's in
// nullResult? It's a special value called undefined :O
// Makes sense, cause you didn't return anything, so it's undefined.
nullResult == undefined; // TRUE

// ^^ Don't use undefined, it's weird.
// Use null if you want to return a value which means empty, or nothing..
var empty = null; 
if (empty == null) {
	console.log("Empty is null, folks!");
}


///////////////  Objects! ///////////////
// Objects are just a collection of 
// key-value pairs. 
var myInfo = {
	firstName: "scott",			// You can put strings.
	lastName: "mendoza",		
	phoneNumber: 7148888888,	// Numbers.
	isCool: true,				// Booleans.
								// Even functions!
	func1: function() {
		console.log("hola, this is func1");
	}, // Don't forget these commas between fields.

	func2: function() {	
		// You can even access variables inside the object.
		// Just use 'this'!
		this.func1(); // Prints out hola.		
		return this.firstName + " " + this.lastName;
	} 
}
// You can access it's info, like:
myInfo.firstName == "scott" // true.
myInfo["firstName"] == "scott" // true. Same thing, just different syntax.
myInfo.func1() // Prints out hola, returns undefined.
myInfo.func2() // returns "scott mendoza"


// A lot of things in Javascript are objects!
// Arrays!
var myArray = ["hey", "there", myInfo.firstName];
myArray[0] // "hey"
myArray[2] // "scott"

// Since arrays are objects, they useful methods (functions)
// and properties!
myArray.length; 				// Tells us the length of array: 3
myArray.push("another string"); // Adds another element to the array.

// Strings are also objects! Surprise (jk)
str1.length // well str1 = 'Hi', so 2.
str1[0] 	// "H"
str1[1]		// "i"
str1[100]	// undefined, because out of bounds
str1[str1.length - 1] // "i"

//////////////////////////////

///////////////  Callbacks ///////////////
// Javascript is famous for its use of callbacks.
// Callbacks are functions that get called at a later time
// like when a user clicks on a button, or a timer goes off.

// Suppose we have a butto in our HTML file like this:
// <button id='button1' type="button">Click click</button>

// We can get that button like this:
var myButton = document.getElementById("button1");

// Then we can execute code every time the button gets clicked:
// 		The first parameter is the event we want to listen to (click)
// 		The second parameter is our callback-function.
myButton.addEventListener("click", function() {
	// This function gets called every time you click on the button.
	myButton.innerText = "Changed by click!"; 
	// This will change the text of the button on click.
});

// The app.js file has a callback for every route, it's just code
// you want to execute whenever a specific event happens.
// In the server's case, you use callbacks to always respond
// to web-requests.

// Callbacks are everywhere, they can be very powerful. 