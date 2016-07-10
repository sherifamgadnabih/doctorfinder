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
    },
    onClick: function () {
      // actions.addDoctor({name: this.name, phone: this.phone, address: this.address}, function () {
      //   console.log('added')
      //   hashHistory.push('/')
      // })
      this.props.dispatch({type: ApplicationConstants.AddDoctorAction, Doctor: {name: this.name, phone: this.phone, address: this.address}})
      hashHistory.push('/')
    },

    render () {
      var style = {

        marginTop: 60
      }

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

  module.exports = ReactRedux.connect(mapDispatchToProps)(CreateDoctor)
})

