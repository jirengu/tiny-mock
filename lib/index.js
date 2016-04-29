var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.set('views', path.join(__dirname, '../public'));
app.set('view engine', 'ejs');
app.listen(8080);

module.exports = app;