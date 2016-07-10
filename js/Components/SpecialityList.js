define(function (require, exports, module) {
  var React = require('react')
  var ReactDom = require('reactDom')
  var store = require('../Stores/Doctors.js')
  var DoctorRow = require('../Components/DoctorRow.js')
  var ApplicationConstants = require('../Constants/Application.js')
  var actions = require('../Actions.js')
  var ReactRedux = require('reactRedux')

  var SpecialityList = React.createClass({
    componentDidMount: function () {
      this.props.dispatch({type: ApplicationConstants.LoadSpecialities, dispatch: this.props.dispatch})
    },
    render () {
      var Specialities = []

      this.props.Specialities.forEach(function (speciality) {
        Specialities.push(<DoctorRow Speciality={speciality} ></DoctorRow>)
      }, this)
      return (
        <div className='table-responsive'> <table className='table table-striped'>
          <thead>
            <tr>
              <th> Name </th>
              <th> </th>

            </tr>
          </thead>
          <tbody>
            {Specialities}
          </tbody>
        </table> </div>)
    }
  })
  var mapStateToProps = function (state) {
    // This component will have access to `appstate.heroes` through `this.props.heroes`
    return {Specialities: state.Specialites}
  }
  var mapDispatchToProps = function (dispatch) {
    return {
      dispatch
    }
  }
  module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(SpecialityList)
}

)
