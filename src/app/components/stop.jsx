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
          <h3>{this.state.stopNumber}</h3>
        </section>

        <section className="key row">
          <ul>
            <li className="col-sm-3">Route</li>
            <li className="col-sm-6">Destination</li>
            <li className="col-sm-3">Minutes to Arrival</li>
          </ul>
        </section>

        <ul className="transports">
          {arrivingBuses.map(function(bus) {
            return <Transport key={bus.key} data={bus}/>
          })}
        </ul>

     </section>
     /*jshint ignore:end */
    );
  }
});

module.exports = Stop;
