'use strict';

console.log('App.js is running');

//JSX - JavaScript XML
var app = {
  title: 'Indecision App',
  subTitle: 'my little pony 2',
  options: ['one', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subTitle && React.createElement(
    'p',
    null,
    ' ',
    app.subTitle,
    ' '
  ),
  React.createElement(
    'p',
    null,
    app.options.length >= 0 ? 'here are your options' : 'no options'
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
    ),
    React.createElement(
      'li',
      null,
      'item three'
    )
  )
);

var user = {
  name: 'Daniel Rodriguez',
  Age: 25,
  location: 'Texas'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.Age && user.Age >= 18 && React.createElement(
    'p',
    null,
    'Age:',
    user.Age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
