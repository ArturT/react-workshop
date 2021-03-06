/*
    Exercise 4
*/

var libraries = [
    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
    { name: 'AngularJS', url: 'https://angularjs.org/'},
    { name: 'jQuery', url: 'http://jquery.com/'},
    { name: 'Prototype', url: 'http://www.prototypejs.org/'},
    { name: 'React', url: 'http://facebook.github.io/react/'},
    { name: 'Ember', url: 'http://emberjs.com/'},
    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    { name: 'Dojo', url: 'http://dojotoolkit.org/'},
    { name: 'Mootools', url: 'http://mootools.net/'},
    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
    { name: 'Lodash', url: 'http://lodash.com/'},
    { name: 'Moment', url: 'http://momentjs.com/'},
    { name: 'Express', url: 'http://expressjs.com/'},
    { name: 'Koa', url: 'http://koajs.com/'},
];

var SearchItem = React.createClass({
  render: function() {
    return (<li>
            <a href={this.props.item.url}>{this.props.item.name}</a>
           </li>)
  }
});

var Search = React.createClass({
  getInitialState: function() {
    return { text: '' }
  },
  onChange: function(e) {
    this.setState({ text: e.target.value })
  },
  render: function() {
    return (<div>
            <input type="text" onChange={this.onChange} value={this.state.text} />
            <ul>
            {this.props.items.filter(function(item) {
              var pattern = new RegExp(this.state.text, 'i');
              return item.name.match(pattern);
            }, this).map(function(item) {
              return <SearchItem item={item}></SearchItem>
            })}
            </ul>
           </div>)
  }
});

var search = React.createElement(Search, { items: libraries })

React.render(search, document.getElementById('search'))
