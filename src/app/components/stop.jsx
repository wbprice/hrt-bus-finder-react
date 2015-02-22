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
  // componentDidMount: function() {
  //   console.log('Component mounted');
  //   return {data: []}
  // },
  render: function() {
    var arrivingBuses = this.state.arrivingBuses;
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

        <ul>
          {arrivingBuses.map(function(bus) {
            // return <li key={bus.key}>{bus.destination}</li>;
            return <Transport key={bus.key} data={bus}/>
          })}
        </ul>

     </section>
     /*jshint ignore:end */
    );
  }
});

module.exports = Stop;
