'use strict';

var mongoose = require('mongoose'),
    Sensor = mongoose.model('Sensor');

exports.list_all_sensors = function (req, res) {
    Sensor.find({}, function (err, sensor) {
        if (err)
            res.send(err);
        res.json(sensor);
    });
};

exports.create_sensor = function (req, res) {
    var new_sensor = new Sensor(req.body);
    new_sensor.save(function (err, sensor) {
        if (err)
            res.status(422).send(err);
        else {
            res.set({ 'Location': '/sensors/' + sensor._id });
            res.status(201).json(sensor);
        }
    });
};

exports.get_sensor = function (req, res) {
    Sensor.findById(req.params.sensorId, function (err, sensor) {
        if (err)
            res.send(err);
        res.json(sensor);
    });
};