define(function (require, exports, module) {
  var React = require('react');

  var DoctorRow = React.createClass({
    displayName: 'DoctorRow',

    propTypes: {
      Doctor: React.PropTypes.object.isRequired
    },
    render() {
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
          '  '
        )
      );
    }
  });

  module.exports = DoctorRow;
});