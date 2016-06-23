define(function (require) {
  var React = require('react')
  var ReactDom = require('reactDom')
  var store = require('../lib/Stores/Doctors.js')
  var DoctorRow = require('../lib/Components/DoctorRow.js')
  var actions = require('../lib/Actions.js')

  var MainComponent = React.createClass({

    getInitialState: function () {
      store.subscribe(() => { this.setState(store.getState()) })
      return store.getState()
    },
    componentDidMount: function () {
      actions.GetDoctors()
    },

    render () {
      var Doctors = []
      this.state.Doctors.forEach(function (doctor) {
        console.log(doctor)
        Doctors.push(<DoctorRow Doctor={doctor} ></DoctorRow>)
      }, this)
      return (
     <div> <ul> {Doctors}</ul> </div>)
    }
  })

  ReactDom.render(<MainComponent/>, document.getElementById('doctorsdiv'))
}

)

