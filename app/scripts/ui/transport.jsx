'use strict';

var React = require('React');

var Transport = React.createClass({
  render: function() {
    var data = this.props.data;
    return (
      /*jshint ignore:start */
      <tr className="transport row">
        <td className="route col-sm-3">{data.route}</td>
        <td className="destination col-sm-6">{data.destination}</td>
        <td className="timeToArrival col-sm-3">{data.timeToArrival}</td>
      </tr>
      /*jshint ignore:end */
    );
  }
});

module.exports = Transport;
