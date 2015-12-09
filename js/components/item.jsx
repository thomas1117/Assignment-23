var React=require('react');
var listCollection = require('../Model+Collections/models');


var Item= React.createClass({
	_delete: function() {
		console.log(this.props);
		var collection = new listCollection(this.props);
		console.log(collection);
		var item = collection.get(this.props.objectId);
		var props=this.props;
		
		item.destroy({
			success: function() {
				props.addInput(collection);
			}
		})
	},
	render: function() {
		
		
		return(
		<li className="task">
		<input type="checkbox" id={this.props.objectId}/>
		<label htmlFor={this.props.objectId}>{this.props.item}</label>
		<button className="delete" onClick={this._delete}>Delete</button>
		</li>
		)
	}

});


module.exports = Item;