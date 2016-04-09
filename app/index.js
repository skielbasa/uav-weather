var React = require( 'react' );
var ReactDOM = require( 'react-dom' );
var routes = require( './config/routes' );
var Provider = require( 'react-redux' ).Provider;
var store = require( './store' );

var ReactRouter = require( 'react-router' );

var Router = ReactRouter.Router;

ReactDOM.render(
    // The top-level Provider is what allows us to `connect` components to the store
    // using ReactRedux.connect (see components Home)
    <Provider store={ store }>
        <Router routes={ routes }/>
    </Provider>,
    document.getElementById( 'app' )
);
