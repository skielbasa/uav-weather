var Redux = require( 'redux' );

// var statusReducer = require( './reducers/data-requests' );
// var forecastReducer = require( './reducers/forecast' );
// var kIndexReducer = require( './reducers/kindex' );
// var conditionsReducer = require( './reducers/conditions' );

var initialState = require( './InitialState' );

var rootReducer = Redux.combineReducers( {

	// status: statusReducer,   // this means statusReducer will operate on appState.status
	// forecast: forecastReducer, // forecastReducer will operate on appState.forecast,
	// kindex: kIndexReducer, // kIndexReducer will operate on appState.kindex,
	// condtions: conditionsReducer // conditionsReducer will operate on appState.conditions,

} );

module.exports = Redux.createStore( rootReducer, initialState() );
