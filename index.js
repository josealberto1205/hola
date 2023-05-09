//creating http const for building our server
const http = require ('http');
let calc = require('./sub');
let calc1 = require('./mal');
let calc2 = require('./may');

//using http to create server with 2 argument - req and res 
http.createServer((req, res) => {

    //writing the content type to be displayed

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("sub: " + calc.sub ());
    res.write("         ");
    res.write("mal: " + calc1.mal ());
    res.write("may: " + calc2.may ());


    //content to be displayed on your backend server

    res.end('Hello, World! This is my first server');

}).listen(8099); //Listening on port 8080

//Running and testing the server

console.log('Server running at http://localhost:8099/');
