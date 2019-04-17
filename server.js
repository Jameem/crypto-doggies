var express = require("express");
var http = require("http");
var fs = require("fs");

const PORT = process.env.PORT || 3000;

app = express();

app.use(express.static(__dirname + "/src"));

app.get("/", function(req, res) {
  res.sendfile("index.html");
});

app.listen(PORT);

// fs.readFile("./src/index.html", function(err, html) {
//   if (err) throw err;
//
//   http
//     .createServer(function(request, response) {
//       response.writeHeader(200, { "Content-Type": "text/html" });
//       response.write(html);
//       response.end();
//     })
//     .listen(PORT);
// });
