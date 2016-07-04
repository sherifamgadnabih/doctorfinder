define(function (require, exports, module) {
  var $ = require('jquery');
  var store = require('../lib/Stores/Doctors.js');
  var ApplicationConstants = require('../lib/Constants/Application.js');
  var actions = {

    GetDoctors: function () {
      $.ajax('http://localhost:8080/Doctors/', {
        type: 'GET',
        dataType: 'json',
        success: function (data) {
          store.dispatch({ type: ApplicationConstants.DoctorsLoaded, Doctors: data.data });
        }
      });
    },
    addDoctor: function (doctor, callback) {
      $.ajax('http://localhost:8080/AddDoctor/', {
        type: 'POST',
        data: doctor,
        success: function (data) {
          if (typeof callback === 'function') {
            callback();
          }
        }
      });
    }

  };
  module.exports = actions;
});