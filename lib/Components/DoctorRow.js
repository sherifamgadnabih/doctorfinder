define(function (require, exports, module) {
  var React = require('react');
  var store = require('../Stores/Doctors.js');
  var ApplicationConstants = require('../Constants/Application.js');
  var DoctorRow = React.createClass({
    displayName: 'DoctorRow',

    propTypes: {
      Doctor: React.PropTypes.object.isRequired
    },
    DeleteDoctor: function (doctorName) {
      store.dispatch({ type: ApplicationConstants.DoctorDeleted, DoctorName: doctorName });
    },
    render() {
      console.log(this.props.Doctor.name);
      return React.createElement(
        'tr',
        null,
        React.createElement(
          'td',
          null,
          ' ',
          this.props.Doctor.name,
          ' '
        ),
        React.createElement(
          'td',
          null,
          ' ',
          this.props.Doctor.phone,
          ' '
        ),
        React.createElement(
          'td',
          null,
          ' ',
          this.props.Doctor.address,
          ' '
        ),
        React.createElement(
          'td',
          null,
          ' ',
          React.createElement(
            'a',
            { href: '#', onClick: this.DeleteDoctor.bind(this, this.props.Doctor.name) },
            ' Delete '
          ),
          ' '
        )
      );
    }
  });

  module.exports = DoctorRow;
});