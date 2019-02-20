var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    WeatherLog = require('./api/models/weatherLogModel'),
    Sensor = require('./api/models/sensorModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
var dev_db_url = 'mongodb://localhost/WeatherLogDB';
var db_url = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(db_url, { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var weatherLogRoutes = require('./api/routes/weatherLogRoutes');
weatherLogRoutes(app);

var sensorRoutes = require('./api/routes/sensorRoutes');
sensorRoutes(app);

app.listen(port);

console.log('WeatherLogService API server started on: ' + port);