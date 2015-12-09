var React=require('react');
var ReactDOM =require('react-dom');
var App =require('./app.jsx');
var Backbone=require('backbone');
var BackboneParse = require('../../backbone-parse.js');
var ListItem = require('./listItem.jsx');
var listCollection = require('../Model+Collections/models.js');
var List = Backbone.Model.extend({
			initialize: function() {
				console.log("a new model was created");
			},
			_parse_class_name: 'List'
		});

var Input = React.createClass({
	getInitialState: function(e) {
		return {value: ""}
	},
	_onChange: function(e) {
		this.setState({
			value: e.target.value
		})
	},
	_submit: function(e) {
		e.preventDefault();
		var props = this.props;
		listed = new List();
		var collection = new listCollection(this.props.item)
		listed.set({
			'list': this.state.value
		})
		
		listed.save(null, {
	 		success: function(item) {
	 			collection.add(item);
	 			$("#inputItem").val('')
				props.addInput(collection.toJSON());
				console.log(collection.toJSON());
				
	 		}
	 	});
	 	
	},
	render: function(){
		return(	<div>
				<h1>Todos</h1>
				<form onSubmit={this._submit}>
				<input id="inputItem" onChange={this._onChange} autoComplete='off' value={this.state.value} placeholder="What needs to be done?"/>
				</form>
			</div>
		)
	}
});

module.exports=Input;