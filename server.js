
const express = require("express");
const app = express();

// "/": home route
app.get("/", function(req, res) {
  res.send("<h1>Hello World!!</h1>");
});

app.get("/contact", function (req, res){
  res.send("Contact me at: tgms021@gmail.com")
});

app.get("/about", function (req, res) {
  res.send("What are you doing here")
});

// 3000 port number
app.listen(3000, function() {
  console.log("server 3000 has been started")
});
