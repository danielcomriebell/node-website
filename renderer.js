//import the filesystem function
var fs = require("fs");


//Programmatically Replacing the placeholders with content
function mergeValues(values, content){
  //Cycle over the keys

  for (var key in values){
    //Replace all {{key}} with the value from the values object
    content = content.replace("{{" + key + "}}", values[key]);
  }

  //return merged content
  return content;
}


//4. Function that handles the reading of files and merge in values
//read from file and get a string
  //merge values in a string
function view (templateName, values, response){
  //read from the template files
  var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf-8"});
      //insert values into the content

      fileContents = mergeValues(values, fileContents);

      //write out to the response
      response.write(fileContents);
  };

module.exports.view = view;
