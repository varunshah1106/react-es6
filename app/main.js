var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

APP = require('./components/app').APP;

var Logout = require('./components/logout');
var Login = require('./components/login');


var routes = (
  <Route handler={APP}>
  	<Route name="" handler={Login}/>
    <Route name="login" path="/login" handler={Login}/>
    <Route name="logout" path="/logout" handler={Logout}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('example'));
});
