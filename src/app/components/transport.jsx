'use strict';

var React = require('React');

var Transport = React.createClass({
  getInitialState: function() {
    return {
      "destination": "WOOD & CHURCH",
      "route": "1",
      "timeToArrival": "17"
    };
  },
  render: function() {
    return (
      /*jshint ignore:start */
      <section className="vehicle">
        <ul>
          <li className="route">{this.state.route}</li>
          <li className="destination">{this.state.destination}</li>
          <li className="timeToArrival">{this.state.timeToArrival}</li>
        </ul>
      </section>
      /*jshint ignore:end */
    );
  }
});

module.exports = Transport;
