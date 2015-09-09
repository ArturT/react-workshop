/*
    Exercise 2
*/
var helloWorld = React.createClass({
  render: function() {
    return (<div>
            Hellow {this.props.name ? this.props.name : 'World'}!
            </div>);
  }
});

var helloWorldElement = React.createElement(helloWorld, { name: 'Artur' })
var helloWorldElement2 = React.createElement(helloWorld)

React.render(helloWorldElement, document.getElementById('main'));
React.render(helloWorldElement2, document.getElementById('main2'));
