define(function (require) {
  var React = require('react')
  var ReactDom = require('reactDom')
  var CreateDoctor = require('../lib/Components/CreateDoctor.js')
  var DoctorList = require('../lib/Components/DoctorList.js')
  var Router = require('reactRouter').Router
  var Route = require('reactRouter').Route
  var hashHistory = require('reactRouter').hashHistory
  var Provider = require('reactRedux').Provider
  var store = require('../lib/Stores/Doctors.js')
  var MainComponent = React.createClass({

    render () {
      return (

        <Provider store={store}>
          <Router>
            <Route name='default' history={hashHistory} path='/' component={DoctorList}/>
            <Route path='/Create' component={CreateDoctor}/>
          </Router>
        </Provider>

      )
    }
  })

  ReactDom.render(<MainComponent/>, document.getElementById('main'))
}

)

