var React = require( 'react' );
var ReactRouter = require( 'react-router' );

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require( '../components/main' );
var Welcome = require( '../components/Welcome' );


var routes = (
	<Router history={ hashHistory }>
		<Route path='/' component={ Main }>
			<IndexRoute component={ Welcome } />
		</Route>
	</Router>
);

module.exports = routes;
