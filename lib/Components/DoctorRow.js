define(function (require, exports, module) {
  var React = require('react');
  var ApplicationConstants = require('../Constants/Application.js');
  var ReactRedux = require('reactRedux');
  var DoctorRow = React.createClass({
    displayName: 'DoctorRow',

    propTypes: {
      Doctor: React.PropTypes.object.isRequired
    },
    DeleteDoctor: function () {
      this.props.dispatch({ type: ApplicationConstants.DoctorDeleted, Index: this.props.Index, doctorID: this.props.Doctor._id });
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
          ' ',
          React.createElement(
            'a',
            { href: '#', onClick: this.DeleteDoctor },
            ' Delete '
          ),
          ' '
        )
      );
    }
  });
  var mapDispatchToProps = function (dispatch) {
    return {
      dispatch
    };
  };

  module.exports = ReactRedux.connect(mapDispatchToProps)(DoctorRow);
});