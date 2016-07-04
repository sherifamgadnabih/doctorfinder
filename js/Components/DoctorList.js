define(function (require, exports, module) {
  var React = require('react')
  var ReactDom = require('reactDom')
  var store = require('../Stores/Doctors.js')
  var DoctorRow = require('../Components/DoctorRow.js')
  var actions = require('../Actions.js')
  var ReactRedux = require('reactRedux')
  var DoctorList = React.createClass({

    // getInitialState: function () {
    //   return store.getState()
    // },
    componentDidMount: function () {
     // store.subscribe(() => { this.setState(store.getState()) })
     // actions.GetDoctors()
    },
    componentWillUnmount: function () {

    },
    render () {
      var Doctors = []
    
      this.props.Doctors.forEach(function (doctor) {
        console.log(doctor)
        Doctors.push(<DoctorRow Doctor={doctor} ></DoctorRow>)
      }, this)
      return (
        <div className='table-responsive'> <table className='table table-striped'>
          <thead>
            <tr>
              <th> Name </th>
              <th> Phone </th>
              <th> Address </th>
              <th> </th>

            </tr>
          </thead>
          <tbody>
            {Doctors}
          </tbody>
        </table> </div>)
    }
  })
  var mapStateToProps = function (state) {
    // This component will have access to `appstate.heroes` through `this.props.heroes`
    return {Doctors: state.Doctors}
  }

  module.exports = ReactRedux.connect(mapStateToProps)(DoctorList)
}

)

