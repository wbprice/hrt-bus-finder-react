/** @jsx React.DOM */

var React = require('react'),
    Stop = require('./ui/stop.jsx'),
    Transport = require('./ui/transport.jsx'),
    mountNode = document.getElementById("app");

React.renderComponent(<Stop />, mountNode);
