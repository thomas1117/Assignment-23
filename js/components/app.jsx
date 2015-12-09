var React=require('react');
var ReactDOM=require('react-dom')
var Input = require('./input.jsx');
var ListItem = require('./listItem.jsx');
var Buttons = require('./buttons.jsx');
var listCollection = require('../Model+Collections/models.js');




var App = React.createClass({
	getInitialState: function () {
		
		return {
			item: this.props.item
			
		}
	},
	_addInput: function(collection) {
		this.setState({
			item: collection
		})

	},
	render: function() {
		return(
			<div>
				<Input item={this.state.item} addInput={this._addInput}/>
				<ListItem item={this.state.item} addInput={this._addInput}/>
				
			</div>
		)
	}
});




module.exports=App;

