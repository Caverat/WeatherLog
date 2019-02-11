'use strict';
module.exports = function(app){
    var weatherLog = require('../controllers/weatherLogController');

    app.route('/weatherLogs')
        .get(weatherLog.list_all_weather_logs)
        .post(weatherLog.create_weather_log);

    app.route('/weatherLogs/:weatherLogId')
        .get(weatherLog.get_weather_log);
};