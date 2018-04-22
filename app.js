// Marc Mendoza - app.js
// This file holds the logic for our web server.
//
// ExpressJS is a library that lets us make web apps quickly.
// 	  # https://expressjs.com/en/4x/api.html
//    This link is the documentation for ExpressJS, but it might be a little
//	  complicated to read for you right now.
const express = require('express');  

// This creates our web app.
const app = express();

// This is the method that gets called when you go to our
// server's home page. (aka: http://localhost:3000/)
app.get('/', function(req, res) {
	res.send('Hey Marc');
});

// This method gets called when you visit http://localhost:3000/secret
// This called a route (aka the different paths of website.)
// Like facebook.com/marc.mendoza is a path.
app.get('/secret', function(req, res){
	res.send('How\'d you get here?');
});

// app.get() takes two parameters: 
//	1. the route ('/chat' or '/home')
//	2. the function to call when someone visits this route.
//		This function itself has two parameters as you can see.
//			a. requestObject - that's what 'req' is above.
//				It has data about the web-request that a user
//				is making. If you have people signed in to your
//				site, you can use the requestObject to see who's
//				logged in, etc.
//			b. responseObject - that's what 'res' is above.
//				This is where you write your response to your user.
//				You can write mesages like "res.send('lmao')" but
//				you can also send HTML pages (which you will totally do).
//	
app.get('/route', function(requestObject, responseObject) {
	responseObject.send('Send whatever you want');
});

// This starts up our server on port 3000. This where `localhost:3000`
// comes from.
// Feel free to change it to another number, but doesn't change
// anything. Just pick anything higher than 3000. (Other numbers
// might be reserved for the operating system.
app.listen(3000, function() {
	console.log('Server started running on port 3000!');
});

