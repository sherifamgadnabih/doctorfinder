define(function (require) {
  var React = require('react')
  var ReactDom = require('reactDom')
  var store = require('../lib/Stores/Doctors.js')
  var DoctorRow = require('../lib/Components/DoctorRow.js')
  var DoctorList = require('../lib/Components/DoctorList.js')
  var actions = require('../lib/Actions.js')
  var Router=require('reactRouter').Router
  var Route=require('reactRouter').Route
  var MainComponent = React.createClass({

    render () {
    return (  <Router>
     <Route path="/" component={DoctorList}/>
     </Router>
    )
    }
  })

  ReactDom.render(<MainComponent/>, document.getElementById('main'))
}

)

