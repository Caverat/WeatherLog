var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    WeatherLog = require('./api/models/weatherLogModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/WeatherLogDB');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/weatherLogRoutes');
routes(app);

app.listen(port);

console.log('WeatherLogService API server started on: ' + port);