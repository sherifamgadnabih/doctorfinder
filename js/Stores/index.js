define(function (require, exports, module) {
  var Redux = require('redux')
  var Doctors = require('../Stores/Doctors.js')
  var Specialites = require('../Stores/Speciality.js')

  module.exports = Redux.combineReducers({
    Doctors,
    Specialites
  })
})

