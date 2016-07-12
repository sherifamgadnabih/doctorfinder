define(function (require) {
  var React = require('react');
  var redux = require('redux');
  var ReactDom = require('reactDom');
  var CreateDoctor = require('../lib/Components/CreateDoctor.js');
  var DoctorList = require('../lib/Components/DoctorList.js');
  var SpecialityList = require('../lib/Components/SpecialityList.js');
  var Router = require('reactRouter').Router;
  var Route = require('reactRouter').Route;
  var hashHistory = require('reactRouter').hashHistory;
  var Provider = require('reactRedux').Provider;
  var reducer = require('../lib/Stores/index.js');
  var Spinner = require('reactSpinkit');
  var $ = require('jquery');
  $(document).ajaxStart(function () {
    $('#loadingDiv').show();
    $('#content').hide();
  });
  $(document).ajaxStop(function () {
    setTimeout(function () {
      $('#loadingDiv').hide();
      $('#content').show();
    }, 3000);
  });
  var MainComponent = React.createClass({
    displayName: 'MainComponent',


    render() {
      document.getElementsByTagName('body');
      var store = redux.createStore(reducer);
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { id: 'loadingDiv', style: { width: '100%', height: '100%', zIndex: 1000, display: 'none' } },
          React.createElement(
            Spinner,
            { style: { width: '100%', height: '100%', zIndex: 1000 }, spinnerName: 'circle' },
            ' '
          )
        ),
        React.createElement(
          'div',
          { id: 'content', style: { display: 'none' } },
          React.createElement(
            Provider,
            { store: store },
            React.createElement(
              Router,
              null,
              React.createElement(Route, { name: 'default', history: hashHistory, path: '/', component: DoctorList }),
              React.createElement(Route, { name: 'default', history: hashHistory, path: '/Specialities', component: SpecialityList }),
              React.createElement(Route, { path: '/Create', component: CreateDoctor })
            )
          )
        )
      );
    }
  });

  ReactDom.render(React.createElement(MainComponent, null), document.getElementById('main'));
});