'use strict';

var React = require('React');

var Transport = React.createClass({
  render: function() {
    var data = this.props.data;
    return (
      /*jshint ignore:start */
      <li className="transport">
        <ul className="row">
          <li className="route col-sm-3">{data.route}</li>
          <li className="destination col-sm-6">{data.destination}</li>
          <li className="timeToArrival col-sm-3">{data.timeToArrival}</li>
        </ul>
      </li>
      /*jshint ignore:end */
    );
  }
});

module.exports = Transport;
