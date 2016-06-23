define(function (require, exports, module) {
  var React = require('react');

  var DoctorRow = React.createClass({
    displayName: 'DoctorRow',

    propTypes: {
      Doctor: React.PropTypes.object.isRequired
    },
    render() {
      return React.createElement(
        'li',
        null,
        ' ',
        this.props.Doctor.name,
        ' '
      );
    }
  });

  module.exports = DoctorRow;
});