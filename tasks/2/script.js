/*
    Exercise 2
*/
var Hello = React.createClass({
  render: function() {
    return (<div>
            Hello {this.props.name ? this.props.name : 'World'}!
            </div>);
  }
});

var hello = React.createElement(Hello, { name: 'Artur' })
var helloDefault = React.createElement(Hello)

React.render(hello, document.getElementById('name'));
React.render(helloDefault, document.getElementById('default-name'));


var Helloes = React.createClass({
  render: function() {
    var names = this.props.names.map(function(name) {
      React.createElement(Hello, { name: name })
    })

    return (
      <div>
      {names}
      </div>
    );
  }
})

var helloes = React.createElement(Helloes, { names: ['Adam', 'Ewa'] })

React.render(helloes, document.getElementById('names'))
