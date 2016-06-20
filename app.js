var express = require('express');
var http = require('http');
var _ = require('lodash');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Doctors');
var Doctor = require('./Models/Doctor.js')

app.get('/', function (request, response) {

    response.write('Hello World');
    response.end();
});

app.post('/AddDoctor', function (request, response) {

    var newdoctor = Doctor(request.body);
    newdoctor.save(function (err) {
        if (err)
            response.write('failed to add doctor');
        else
            response.write('Doctor Added');

        response.end();

    })


});

app.listen(8080, function () {
    console.log('server is runnig');
})
