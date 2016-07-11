define(function (require, exports, module) {
  var React = require('react')
  var ApplicationConstants = require('../Constants/Application.js')
  var ReactRedux = require('reactRedux')
  var DoctorRow = React.createClass({
    propTypes: {
      Doctor: React.PropTypes.object.isRequired
    },
    DeleteDoctor: function () {
      this.props.dispatch({type: ApplicationConstants.DoctorDeleted, Index: this.props.Index, doctorID: this.props.Doctor._id})
    },
    render () {
      return (
            <tr>
            <td> {this.props.Doctor.name} </td>
            <td> {this.props.Doctor.phone} </td>
            <td> {this.props.Doctor.address} </td>
            <td> <a href='#' onClick={this.DeleteDoctor} > Delete </a> </td>
             </tr>
        )
    }
  }

  )
  var mapDispatchToProps = function (dispatch) {
    return {
      dispatch
    }
  }
  
  module.exports = ReactRedux.connect(mapDispatchToProps)(DoctorRow)
})
