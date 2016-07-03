define(function (require) {
  var React = require('react');
  var ReactDom = require('reactDom');
  var CreateDoctor = require('../lib/Components/CreateDoctor.js');
  var DoctorList = require('../lib/Components/DoctorList.js');
  var Router = require('reactRouter').Router;
  var Route = require('reactRouter').Route;
  var hashHistory = require('reactRouter').hashHistory;
  var Provider = require('reactRedux').Provider;
  var store = require('../lib/Stores/Doctors.js');
  var MainComponent = React.createClass({
    displayName: 'MainComponent',


    render() {
      return React.createElement(
        Provider,
        { store: store },
        React.createElement(
          Router,
          null,
          React.createElement(Route, { name: 'default', history: hashHistory, path: '/', component: DoctorList }),
          React.createElement(Route, { path: '/Create', component: CreateDoctor })
        )
      );
    }
  });

  ReactDom.render(React.createElement(MainComponent, null), document.getElementById('main'));
});