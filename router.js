var Profile = require("./profile.js");
var renderer = require("./renderer.js");

var commonHeaders = {'Content-Type': 'text/html'};

// Handle the HTTP route GET / and POST / i.e Home
function home(req, res){
    res.writeHead(200, commonHeaders);
      renderer.view("header", {}, res);
      renderer.view("search", {}, res);
      renderer.view("footer", {}, res);
}

//Handle the HTTP route GET /:username i.e. /chalkers
function user(req, res){
  var username = req.url.replace("/", "");
  if (username.length > 0){
    res.writeHead(200, commonHeaders);
    renderer.view("header", {}, res);

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
      renderer.view("profile", values, res);
      renderer.view("footer", {}, res);
    });

    //error
    studentProfile.on("error", function(e){
      //show the error
      renderer.view("error", {errorMessage: e.message}, res);
      renderer.view("search", {}, res);
      renderer.view("footer", {}, res);
    });
  }
}

module.exports.home = home;
module.exports.user = user;
