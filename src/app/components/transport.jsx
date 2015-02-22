'use strict';

var React = require('React');

var Transport = React.createClass({
  // getInitialState: function() {
  //   return {
  //     "destination": "WOOD & CHURCH",
  //     "route": "1",
  //     "timeToArrival": "17"
  //   };
  // },
  render: function() {
    debugger;
    var data = this.props.data;
    return (
      /*jshint ignore:start */
      <li className="vehicle">
        <ul>
          <li className="route">{data.route}</li>
          <li className="destination">{data.destination}</li>
          <li className="timeToArrival">{data.timeToArrival}</li>
        </ul>
      </li>
      /*jshint ignore:end */
    );
  }
});

module.exports = Transport;
