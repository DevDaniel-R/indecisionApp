'use strict';

console.log('App.js is running');

//JSX - JavaScript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Daniel Rodriguez'
  ),
  React.createElement(
    'p',
    null,
    'this is some info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'item one'
    ),
    React.createElement(
      'li',
      null,
      'item one'
    )
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
