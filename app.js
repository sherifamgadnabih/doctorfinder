var express = require('express')
var app = express()
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
mongoose.connect('mongodb://localhost/Doctors')
var Doctor = require('./Models/Doctor.js')

app.get('/', function (request, response) {
  response.write('Hello World')
  response.end()
})

app.post('/AddDoctor', function (request, response) {
  var newdoctor = Doctor(request.body)
  newdoctor.save(function (err) {
    if (err) {
      response.write('failed to add doctor')
    } else {
      response.write('Doctor Added')
    }

    response.end()
  })
})

app.get('/Doctors', function (request, response) {
  Doctor.find(function (err, doctors) {
    if (err) {
      response.json({info: 'error during find Doctors', error: err})
    };
    response.json({info: 'Doctors found successfully', data: doctors})
  })
})

app.get('/Doctors/:Id', function (request, response) {
  Doctor.findById(request.params.Id, function (err, doctor) {
    if (err) {
      response.json({info: 'error during find doctor', error: err})
    };
    response.json({info: 'doctor found successfully', data: doctor})
  })
})

app.listen(8080, function () {
  console.log('server is runnig')
})
