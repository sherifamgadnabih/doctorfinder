define(function (require, exports, module) {
  var React = require('react')
  var store = require('../Stores/Doctors.js')
  var ApplicationConstants = require('../Constants/Application.js')
  var DoctorRow = React.createClass({
    propTypes: {
      Doctor: React.PropTypes.object.isRequired
    },
    DeleteDoctor: function (doctorName) {
      store.dispatch({type: ApplicationConstants.DoctorDeleted, DoctorName: doctorName})
    },
    render () {
      console.log(this.props.Doctor.name)
      return (
            <tr>
            <td> {this.props.Doctor.name} </td>
            <td> {this.props.Doctor.phone} </td>
            <td> {this.props.Doctor.address} </td>
            <td> <a href='#' onClick={this.DeleteDoctor.bind(this, this.props.Doctor.name)} > Delete </a> </td>
             </tr>
        )
    }
  }

  )

  module.exports = DoctorRow
})
