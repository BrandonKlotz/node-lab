var http = require("http");
var animals = require('./data.js');



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

http.createServer(function(request, response) {
  var i = getRandomInt(0, animals.length);
  response.writeHead(200, { "Content-type": "text/plain" });
  response.write(animals[i]);
  console.log(animals[i]);
  response.end();
}).listen(8000);
