var React=require('react');
var ReactDOM=require('react-dom');
var Backbone = require('backbone');
var BackboneParse = require('../../backbone-parse.js');

//Backbone fetch
var List = Backbone.Model.extend({
			initialize: function() {
				console.log("a new model was created");
			},
			_parse_class_name: 'List'
		});
		var listCollection = Backbone.Collection.extend({
			model: List,
			_parse_class_name: 'List'
		});

		var lists = new listCollection();

		lists.fetch({
			success: function(resp) {
				data=(resp.toJSON());
				console.log(data);
				ReactDOM.render(<Sub data={data}/>,document.getElementById('sub'))
			}
		})

//input todo
var ToDo = React.createClass({
	_submit: function(e) {
		e.preventDefault();
		var input = $("#input").val();
		var listNew = new listCollection();
		listNew.set({
			'list':$("#input").val()
		})
		listNew.save(null,{
			success: function(resp) {
				console.log(resp);
			},
			error: function(err) {
				console.log(err);
			}
		})
	},
	render: function(){
		return(<div>
			<h1>Todos</h1>
			<form onSubmit={this._submit}>
			<input id="input" placeholder="What needs to be done?"/>
			
			</form>
			</div>)
	}
});

//list todo
var Sub = React.createClass({
	render:function() {
		var listData=this.props.data.map(function(obj){
			return(<p className="task">{obj.list}</p>)
		})
		return(<div>{listData}</div>)
	}
})

ReactDOM.render(<ToDo/>,document.getElementById('toDoList'))

