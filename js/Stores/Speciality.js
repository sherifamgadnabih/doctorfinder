 define(function (require, exports, module) {
   var ApplicationConstants = require('../Constants/Application.js')

   function SpecialityStore (state = [], action) {
     switch (action.type) {

       case ApplicationConstants.AddSpecialityAction:
         return Object.assign({}, state, state.concat([
           action.Speciality
         ])
         )
       case ApplicationConstants.SpecialitiesLoaded:
         return Object.assign({}, state, action.Specialities)
       case ApplicationConstants.SpecialityDeleted:
         return Object.assign({}, state, state.filter(function (speciality) {
           speciality.name !== action.SpecialityName
         }))
       default:
         return state
     }
   }

   module.exports = SpecialityStore
 })
