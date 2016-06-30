define(function (require) {
  var React = require('react');
  var ReactDom = require('reactDom');
  var store = require('../lib/Stores/Doctors.js');
  var DoctorRow = require('../lib/Components/DoctorRow.js');
  var DoctorList = require('../lib/Components/DoctorList.js');
  var actions = require('../lib/Actions.js');
  var Router = require('reactRouter').Router;
  var Route = require('reactRouter').Route;
  var MainComponent = React.createClass({
    displayName: 'MainComponent',


    render() {
      return React.createElement(
        Router,
        null,
        React.createElement(Route, { path: '/', component: DoctorList })
      );
    }
  });

  ReactDom.render(React.createElement(MainComponent, null), document.getElementById('main'));
});