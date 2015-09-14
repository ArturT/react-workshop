/*
    Exercise 3
*/

var Timer = React.createClass({
  getInitialState: function() {
    return { passedSeconds: 0 };
  },
  increasePassedSeconds: function() {
    this.setState({
      passedSeconds: this.state.passedSeconds + 1
    });
  },
  componentDidMount: function() {
    this.interval = setInterval(this.increasePassedSeconds, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (<div>
            I was started {this.state.passedSeconds} seconds ago
            </div>)
  }
});

var timer = React.createElement(Timer)

React.render(timer, document.getElementById('timer'))

setTimeout(function() {
  React.unmountComponentAtNode(document.getElementById('timer'))
}, 4000);
