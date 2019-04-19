'use strict';

var mongoose = require('mongoose'),
    WeatherLog = mongoose.model('WeatherLog');

exports.list_all_weather_logs = function (req, res) {
    WeatherLog.find({}, function (err, weatherLog) {
        if (err)
            res.send(err);
        res.json(weatherLog);
    });
};

exports.create_weather_log = function (req, res) {
    var new_weather_log = new WeatherLog(req.body);
    new_weather_log.
    new_weather_log.save(function (err, weatherLog) {
        if (err)
            res.status(422).send(err);
        else {
            res.set({ 'Location': '/weatherLogs/' + weatherLog._id });
            res.status(201).json(weatherLog);
        }
    });
};

exports.get_weather_log = function (req, res) {
    WeatherLog.findById(req.params.weatherLogId, function (err, weatherLog) {
        if (err)
            res.send(err);
        res.json(weatherLog);
    });
};