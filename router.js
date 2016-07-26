var Profile = require("./profile.js");

// Handle the HTTP route GET / and POST / i.e Home
function home(req, res){
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

//Handle the HTTP route GET /:username i.e. /chalkers
function user(req, res){
  var username = req.url.replace("/", "");
  if (username.length > 0){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Header\n");

    //get json from treehouse
    var studentProfile = new Profile(username);
    //on end, we want to show the profile
    studentProfile.on("end", function(profileJSON){
      //show profile

      //Store the values which we need
      var values = {
        avatarUrl: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badgeCount: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      }

      //Simple response
      res.write(values.username + " has " + values.badgeCount + " badges" + "\n");
      // res.end('Footer\n');
      res.end('Footer\n');
    });

    //error
    studentProfile.on("error", function(e){
      //show the error
      res.write(e.message + "\n");
      res.end('Footer\n');
    });
  }
}

module.exports.home = home;
module.exports.user = user;
