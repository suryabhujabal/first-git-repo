var React= require('react');
var ListItem= require('./ListItem.jsx');

var ingredients=[{"id":1,"text":"Car"},{"id":2,"text":"Bike"},{"id":1,"text":"Scooter"},{"id":4,"text":"Moped"}];

var List= React.createClass({
  render : function(){
    var ListItems= ingredients.map(function(item){
      return <ListItem key={item.id} ingredient={item.text} />;
    });
  return <ul> {ListItems} </ul>;
}
});

module.exports=List;
