const React = require('react');
const ReactDOM = require('react-dom');

const HelloWorld = React.createClass({
  render: function() {
    return (
      <div>
        <p>Hello World</p>
      </div>
    )
  },
});

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);
