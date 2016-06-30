define(function (require, exports, module) {
    var React = require('react')
    var ReactDom = require('reactDom')
    var actions = require('../Actions.js')
    var CreateDoctor = React.createClass({

        render() {
            var style = {

                marginTop: 60
            };

            return (
                <form style={style} role="form">
                    <div className="form-group">
                        <label for="name">Name: </label>
                        <input type="text" className="form-control" id="name"/>
                    </div>
                    <div className="form-group">
                        <label for="phone">Phone: </label>
                        <input type="text" className="form-control" id="phone"/>
                    </div>
                    <div className="form-group">
                        <label for="address">Address: </label>
                        <input type="text" className="form-control" id="address"/>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            )

        }

    })
    module.exports = CreateDoctor
})

