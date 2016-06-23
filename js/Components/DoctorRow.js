define(function (require, exports, module) {
  var React = require('react')

  var DoctorRow = React.createClass({
    propTypes: {
      Doctor: React.PropTypes.object.isRequired
    },
    render () {
      return (
            <li> {this.props.Doctor.name} </li>
        )
    }
  }

  )

  module.exports = DoctorRow
})
