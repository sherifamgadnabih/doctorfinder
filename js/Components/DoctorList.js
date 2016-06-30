define(function (require,exports,module) {
  var React = require('react')
  var ReactDom = require('reactDom')
  var store = require('../Stores/Doctors.js')
  var DoctorRow = require('../Components/DoctorRow.js')
  var actions = require('../Actions.js')

  var DoctorList = React.createClass({

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
     <div className="table-responsive"> <table  className="table table-striped">
     <thead>
     <tr>
      <th> Name </th>
       <th> Phone </th>
       <th> Address </th>
     </tr>
     </thead>
     <tbody>
      {Doctors}
      </tbody>
      </table> </div>)
    }
  })
module.exports=DoctorList
}

)

