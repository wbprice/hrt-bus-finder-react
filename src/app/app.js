/** @jsx React.DOM */

'use strict';

var React = require('react'),
    ExampleApp;

var Stop = require('./components/stop.jsx');

ExampleApp = React.createClass({
    render: function() {
        return (
        	/*jshint ignore:start */
            <Stop />
          /*jshint ignore:end */
        );
    }
});

React.render(
    /*jshint ignore:start */
    <ExampleApp />,
    /*jshint ignore:end */
    document.getElementById('app')
);
