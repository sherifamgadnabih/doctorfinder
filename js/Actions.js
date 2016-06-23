define(function (require, exports, module) {
  var $ = require('jquery')
  var store = require('../lib/Stores/Doctors.js')
  var ApplicationConstants = require('../lib/Constants/Application.js')
  var actions = {

    GetDoctors: function () {
      $.ajax('http://localhost:8080/Doctors/', {
        type: 'GET',
        dataType: 'json',
        success: function (data) {
          console.log(data)
          store.dispatch({ type: ApplicationConstants.DoctorsLoaded, Doctors: data.data })
        }
      })
    }
  }
  module.exports = actions
})
