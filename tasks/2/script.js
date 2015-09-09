/*
    Exercise 2
*/
var helloWorld = React.createClass({
  render: function() {
    return (<div>
            Hellow {this.props.name}!
            </div>);
  }
});

var helloWorldElement = React.createElement(helloWorld, { name: 'Artur' })

React.render(helloWorldElement, document.getElementById('main'));
