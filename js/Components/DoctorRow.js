define(function (require, exports, module) {
  var React = require('react')

  var DoctorRow = React.createClass({
    propTypes: {
      Doctor: React.PropTypes.object.isRequired
    },
    render () {
      return (
            <tr>
            <td> {this.props.Doctor.name} </td>
            <td> {this.props.Doctor.phone} </td>
            <td> {this.props.Doctor.address} </td>
             </tr>
        )
    }
  }

  )

  module.exports = DoctorRow
})
