define(function (require, exports, module) {
  var React = require('react')
  var store = require('../Stores/Doctors.js')
  var ApplicationConstants = require('../Constants/Application.js')
  var SpecialityRow = React.createClass({
    propTypes: {
      Speciality: React.PropTypes.object.isRequired
    },
    DeleteSpeciality: function (specialityName) {
      store.dispatch({type: ApplicationConstants.SpecialityDeleted, SpecialityName: specialityName})
    },
    render () {
      console.log(this.props.Doctor.name)
      return (
            <tr>
            <td> {this.props.Speciality.name} </td>
            <td> <a href='#' onClick={this.DeleteSpeciality.bind(this, this.props.Speciality.name)} > Delete </a> </td>
             </tr>
        )
    }
  }

  )

  module.exports = SpecialityRow
})
