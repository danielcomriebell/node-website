var router = require("./router.js");

// Create a web server
var http = require('http');
http.createServer(function(req,res){
  // router.home(req, res);
  router.user(req,res);
}).listen(3000, '127.0.0.1');
console.log("Server running at http://127.0.0.1:3000/");



  //if url == "/...."
    //get the json from Treehouse
      //on "end"
          //show the profile
      //on "error"
        //show the error


//4. Function that handles the reading of files and merge in values
//read from file and get a string
  //merge values in a string
