/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var APP = React.createClass({
  render: function () {
    return (
      <div style={{height:"100%"}}>
        <RouteHandler/>
      </div>
    );
  }
});

exports.APP = APP;
