var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    WeatherLog = require('./api/models/weatherLogModel'),
    Sensor = require('./api/models/sensorModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/WeatherLogDB', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var weatherLogRoutes = require('./api/routes/weatherLogRoutes');
weatherLogRoutes(app);

var sensorRoutes = require('./api/routes/sensorRoutes');
sensorRoutes(app);

app.listen(port);

console.log('WeatherLogService API server started on: ' + port);