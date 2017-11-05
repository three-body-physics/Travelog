// var express = require("express");
// var app = express();
//
// var path = require("path");
// var bodyParser = require("body-parser");
//
//
// app.use(bodyParser.urlencoded({
//   extended: false
// }));
//
// app.use(bodyParser.json())
//
//
// // app.set("views", path.join(__dirname, "backend", "views"))
//
//
// app.use(express.static(__dirname + '/dist'));
//
// var routes = require("./backend/routes/router");
// app.use("/", routes);
//
// var server = require('http').Server(app).listen(3000, "localhost");

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const router = express.Router();
var path = require("path");

app.use(express.static("./dist"));
app.set('view engine', 'ejs');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

// app.engine(".html", require("ejs").renderFile);

app.set("views", path.join(__dirname, "dist"))

router.get('/*', (req, res, next) => {
  res.render("index"); 
});

app.use('/', allowCrossDomain, router);

app.listen(port);
