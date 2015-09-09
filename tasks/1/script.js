/*
    Exercise 1
*/
var helloWorld = React.createClass({
  render: function() {
    return (<div>
            Hellow World!
            </div>);
  }
});

var helloWorldElement = React.createElement(helloWorld)

React.render(helloWorldElement, document.getElementById('main'));
