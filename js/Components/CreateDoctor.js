define(function (require, exports, module) {
  var React = require('react')
  var store = require('../Stores/Doctors.js')
  var ApplicationConstants = require('../Constants/Application.js')
  var hashHistory = require('reactRouter').hashHistory
  var ReactRedux = require('reactRedux')
  var CreateDoctor = React.createClass({
    name: '',
    phone: '',
    address: '',
    specialityId: '',
    componentDidMount: function () {
      this.props.dispatch({type: ApplicationConstants.LoadSpecialities, dispatch: this.props.dispatch})
    },
    handleChange: function (event) {
      var controlid = event.target.id
      var value = event.target.value
      if (controlid === 'name') {
        this.name = value
      }
      if (controlid === 'phone') {
        this.phone = value
      }
      if (controlid === 'address') {
        this.address = value
      }
      if (controlid === 'Speciality') {
        this.specialityId = value
      }
    },
    onClick: function () {
      this.props.dispatch({type: ApplicationConstants.AddDoctorAction, Doctor: {name: this.name, phone: this.phone, address: this.address, Speciality: this.specialityId}})
      hashHistory.push('/')
    },

    render () {
      var style = {

        marginTop: 60
      }
      if (this.props.Specialities.length > 0) {
        this.specialityId = this.props.Specialities[0]._id
      }
      var Specialites = []
      this.props.Specialities.forEach(function (speciality) {
        Specialites.push(<option value={speciality._id} > {speciality.name} </option>)
      })
      return (
                <form style={style} role='form'>
                    <div className='form-group'>
                        <label for='name'>Name: </label>
                        <input type='text' onChange={this.handleChange} className='form-control' id='name'/>
                    </div>
                    <div className='form-group'>
                        <label for='phone'>Phone: </label>
                        <input type='text' onChange={this.handleChange} className='form-control' id='phone'/>
                    </div>
                    <div className='form-group'>
                        <label for='address'>Address: </label>
                        <input type='text' onChange={this.handleChange} className='form-control' id='address'/>
                    </div>
                    <div className='form-group'>
                        <label for='Speciality'>Speciality: </label>
                        <select id='Speciality' onChange={this.handleChange} className='form-control'>
                        {Specialites}

                        </select>
                    </div>
                    <button type='button' onClick={this.onClick} className='btn btn-default'>Submit</button>
                </form>
            )
    }

  })
  var mapDispatchToProps = function (dispatch) {
    return {
      dispatch
    }
  }
  var mapStateToProps = function (state) {
    // This component will have access to `appstate.heroes` through `this.props.heroes`
    return {Specialities: state.Specialites}
  }

  module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(CreateDoctor)
})

