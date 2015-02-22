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
          "destination": "WOOD & CHURCH",
          "route": "1",
          "timeToArrival": "17"
        },
      ]
    }
  },
  // componentDidMount: function() {
  //   console.log('Component mounted');
  //   return {data: []}
  // },
  render: function() {
    return (
      /*jshint ignore:start */
      <section className="stop">

        <section className="stopName">
          <h2>{this.state.stopName}</h2>
          <h3>{this.state.stopNumber}</h3>
        </section>

        <section className="key">
          <ul>
            <li>Route</li>
            <li>Destination</li>
            <li>Minutes to Arrival</li>
          </ul>
        </section>

        <Transport />

     </section>
     /*jshint ignore:end */
    );
  }
});

module.exports = Stop;
