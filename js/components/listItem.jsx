var React=require('react');
var ReactDOM=require('react-dom');
var Backbone = require('backbone');
var BackboneParse = require('../../backbone-parse.js');
var Item = require('./item.jsx');




var ListItem = React.createClass({
	
   	render:function() {
		var props=this.props.item;
		console.log(props);

		return(<ul key={this.props.objectId} className="listContainer">
				{this.props.item.map(function(item){
					return(<Item item={item.list} objectId={item.objectId} addInput={this._addInput}/>)
				})}	
				</ul>

			)
		}		
});

module.exports = ListItem;