define(function (require, exports, module) {
  var ApplicationConstants = require('../Constants/Application.js');
  var actions = require('../Actions.js');

  function doctorStore(state = [{}], action) {
    switch (action.type) {
      case ApplicationConstants.LoadDoctors:
        actions.GetDoctors(function (data) {
          action.dispatch({ type: ApplicationConstants.DoctorsLoaded, Doctors: data.data });
        });
        return state;

      case ApplicationConstants.AddDoctorAction:

        actions.addDoctor(action.Doctor, null);
        return state;

      case ApplicationConstants.DoctorsLoaded:
        return Object.assign([], state, action.Doctors);
      case ApplicationConstants.DoctorDeleted:
        //actions.DeleteDoctor(action.doctorID)
        return Object.assign([], state, state.filter(function (doctor) {
          return doctor._id !== action.doctorID;
        }));
      default:
        return state;
    }
  }

  module.exports = doctorStore;
});