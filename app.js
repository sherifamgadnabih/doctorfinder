var express = require('express')
var app = express()
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
app.use('/static', express.static('Views'))
app.use('/node_modules', express.static('node_modules'))
app.use('/lib', express.static('lib'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(function (req, res, next) {
 // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost')

    // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

    // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})
mongoose.connect('mongodb://localhost/Doctors')
var Doctor = require('./Models/Doctor.js')

app.get('/', function (request, response) {
  response.write('Hello World')
  response.end()
})

app.post('/AddDoctor', function (request, response) {
  console.log(request.body)
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
