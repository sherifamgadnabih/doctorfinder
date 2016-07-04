define(function (require, exports, module) {
  var redux = require('redux');
  var ApplicationConstants = require('../Constants/Application.js');
  var defaultState = {
    Doctors: []
  };

  function doctorStore(state = defaultState, action) {
    switch (action.type) {

      case ApplicationConstants.AddDoctorAction:
        console.log(action.Doctor);
        return Object.assign({}, state, {
          Doctors: state.Doctors.concat([action.Doctor])
        });
      case ApplicationConstants.DoctorsLoaded:
        return Object.assign({}, state, {
          Doctors: action.Doctors });
      default:
        return state;
    }
  }

  module.exports = redux.createStore(doctorStore);
});