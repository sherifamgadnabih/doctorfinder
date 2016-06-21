var mongoose = require('mongoose')

var DoctorSchema = mongoose.Schema({
  name: String,
  phone: String,
  address: String

})

module.exports = mongoose.model('Doctor', DoctorSchema)
