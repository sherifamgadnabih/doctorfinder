define(function (require) {
  var React = require('react')
  var redux = require('redux')
  var ReactDom = require('reactDom')
  var CreateDoctor = require('../lib/Components/CreateDoctor.js')
  var DoctorList = require('../lib/Components/DoctorList.js')
  var SpecialityList = require('../lib/Components/SpecialityList.js')
  var Router = require('reactRouter').Router
  var Route = require('reactRouter').Route
  var hashHistory = require('reactRouter').hashHistory
  var Provider = require('reactRedux').Provider
  var reducer = require('../lib/Stores/index.js')
  var MainComponent = React.createClass({

    render () {
      var store = redux.createStore(reducer)
      return (

        <Provider store={store}>
          <Router>
            <Route name='default' history={hashHistory} path='/' component={DoctorList}/>
            <Route name='default' history={hashHistory} path='/Specialities' component={SpecialityList}/>
            <Route path='/Create' component={CreateDoctor}/>
          </Router>
        </Provider>

      )
    }
  })

  ReactDom.render(<MainComponent/>, document.getElementById('main'))
}

)

