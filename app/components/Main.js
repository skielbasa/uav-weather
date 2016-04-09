var React = require( 'react' );
var sassSrc = require( '../scss/main.scss' );
//var ReactAddonsCSSTransitionGroup = require( 'react-addons-css-transition-group' );

var Main = React.createClass( {
	render: function() {

		return (
			<div className='main-container'>
				{ this.props.children }
			</div>
		);

	}
} );

module.exports = Main;
