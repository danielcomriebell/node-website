//Problem: We need a simple way to look at a user's badge count and JavaScript points from a web browser.
//Solution: Use Node.js to perform the profile look ups and serve our template via HTTP

//1. Create a web server
var http = require('http');
http.createServer(function(req,res){
  homeRoute(req, res);

}).listen(3000, '127.0.0.1');
console.log("Server running at http://127.0.0.1:3000/")


//2. Handle the HTTP route GET / and POST / i.e Home
function homeRoute(req, res){
  //if the url is equal to "/" && GET
    //show search
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //set interval tells the program to do something every couple of milliseconds.
      res.write("Header\n");
      res.write("Search\n");
      res.end("Footer\n");

    // res.end('Hello World\n');
  //if the url is equal to "/" && POST
    //redirect to the /:username
}

//3. Handle the HTTP route GET /:username i.e. /chalkers
  //if url == "/...."
    //get the json from Treehouse
      //on "end"
          //show the profile
      //on "error"
        //show the error


//4. Function that handles the reading of files and merge in values
//read from file and get a string
  //merge values in a string
