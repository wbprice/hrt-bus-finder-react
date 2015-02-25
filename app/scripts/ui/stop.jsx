'use strict';

var React = require('React');
var Transport = require('./transport.jsx');

var Stop = React.createClass({
  getInitialState: function() {
    console.log('Got initial state');
    return {
      "stopName": "Monticello & 18th",
      "stopNumber": "0190",
      "arrivingBuses": [
        {
          "key": "1",
          "destination": "Wood & Church",
          "route": "1",
          "timeToArrival": "17"
        },
        {
          "key": "2",
          "destination": "Wood & Church",
          "route": "1",
          "timeToArrival": "32"
        },
        {
          "key": "3",
          "destination": "Wood & Church",
          "route": "1",
          "timeToArrival": "50"
        },
      ]
    }
  },
  render: function() {
    var arrivingBuses = this.state.arrivingBuses;
    return (
      /*jshint ignore:start */
      <section className="stop col-sm-12 col-md-4">

        <section className="stopInfo">
          <h2>{this.state.stopName}</h2>
        </section>

        <table className="table">
          <tr className="key row">
              <td className="col-sm-3">Route</td>
              <td className="col-sm-6">Destination</td>
              <td className="col-sm-3">Minutes to Arrival</td>
          </tr>
        </table>

        <table className="table transports">
          {arrivingBuses.map(function(bus) {
            return <Transport key={bus.key} data={bus}/>
          })}
        </table>

     </section>
     /*jshint ignore:end */
    );
  }
});

module.exports = Stop;
