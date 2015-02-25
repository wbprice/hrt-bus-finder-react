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
          "destination": "Wood & Church, a stupid long destination name",
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
      <section className="stop pure-u-1">

        <section className="stopInfo">
          <h2>{this.state.stopName} <br/><small>(Stop {this.state.stopNumber})</small></h2>
        </section>

        <table className="pure-table">
          <thead className="">
            <tr className="key ">
                <th className="route">Route</th>
                <th className="destination">Destination</th>
                <th className="timeToArrival">Minutes to Arrival</th>
            </tr>
          </thead>

          <tbody>
            {arrivingBuses.map(function(bus) {
              return <Transport key={bus.key} data={bus}/>
            })}
          </tbody>

        </table>

     </section>
     /*jshint ignore:end */
    );
  }
});

module.exports = Stop;
