var router = require("./router.js");


// Create a web server
var http = require('http');
http.createServer(function(req,res){
  // router.home(req, res);
  router.user(req,res);
}).listen(3000, '127.0.0.1');
console.log("Server running at http://127.0.0.1:3000/");
