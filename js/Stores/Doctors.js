 define(function (require, exports, module) {
   var redux = require('redux')
   var ApplicationConstants = require('../Constants/Application.js')
   var defaultState = {
     Doctors: [{id: -1, name: 'sherif'}]
   }

   function doctorStore (state = defaultState, action) {
     switch (action.type) {
       case ApplicationConstants.AddDoctorAction:
         return Object.assign({}, state, {
           Doctors: state.Doctors.concat([{
             Doctor: action.Doctor
           }])
         })
       case ApplicationConstants.DoctorsLoaded:
         return Object.assign({}, state, {
           Doctors: action.Doctors})
       default:
         return state
     }
   }

   module.exports = redux.createStore(doctorStore)
 })
