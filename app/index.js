const USER_DATA = {
  name: 'Fuad Saud',
  username: 'fuadsaud',
  image: 'https://avatars1.githubusercontent.com/u/1993787?v=3&s=460'
}

const React = require('react');
const ReactDOM = require('react-dom');
const routes = require('./config/routes');


ReactDOM.render(
  routes,
  document.getElementById('app')
);
