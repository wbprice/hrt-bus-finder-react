'use strict';

var React = require('React');

var Transport = React.createClass({
  render: function() {
    var data = this.props.data;
    return (
      /*jshint ignore:start */
      <tr className="transport row">
        <td className="route"><div className="badge">{data.route}</div></td>
        <td className="destination">{data.destination}</td>
        <td className="timeToArrival"><div className="badge">{data.timeToArrival}</div></td>
      </tr>
      /*jshint ignore:end */
    );
  }
});

module.exports = Transport;
