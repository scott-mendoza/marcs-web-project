# Web Server Basics

## Installation
**1. Download the project**
```
    git clone https://github.com/scott-mendoza/marcs-web-project.git
```
**2. Open folder**
```
    cd marcs-web-project
```
**3. Install dependencies**
```
    npm install
```
**4. Run the server.** This will keep the server running in the background. Whenever you edit the `app.js` file, the server will automatically be updated.
```
    nodemon app.js
```
5. Server will now be running at http://localhost:3000

## Files
- **app.js**: This is where the logic for your server will live.

- **package.json**: This is the config file for your server. Not necessary to understand everything, just has the libraries that we're going to use for our server.

- **node_modules/**: This is the folder where the packages/libraries (listed in `package.json`) are installed. This shows up after running `npm install` above.

- **tutorials/Git-Basics.md**: Just a guide on how to use Git for project management.

- **tutorials/Javascript-Basics.js**: Very brief overview of Javascript.

- **resources/index.html**: An HTML skeleton for a website.

- **resources/main.js**: A javascript file that runs on the HTML file above.

- **.gitignore**: Ignore this.
