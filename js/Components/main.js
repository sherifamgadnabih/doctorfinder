define(function (require) {
  var React = require('react')
  var ReactDom = require('reactDom')
  var store = require('../lib/Stores/Doctors.js')
  var CreateDoctor = require('../lib/Components/CreateDoctor.js')
  var DoctorList = require('../lib/Components/DoctorList.js')
  var actions = require('../lib/Actions.js')
  var Router=require('reactRouter').Router
  var Route=require('reactRouter').Route
  var MainComponent = React.createClass({

    render () {
    return (  <Router>
     <Route path="/" component={DoctorList}/>
     <Route path="/Create" component={CreateDoctor}/>
     </Router>
    )
    }
  })

  ReactDom.render(<MainComponent/>, document.getElementById('main'))
}

)

