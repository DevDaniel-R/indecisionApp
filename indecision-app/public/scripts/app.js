'use strict';

console.log('App.js is running');

//JSX - JavaScript XML
var app = {
  title: 'Indecision App',
  subTitle: 'my little pony 2',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderFormApp();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  renderFormApp();
};

var appRoot = document.getElementById('app');

var renderFormApp = function renderFormApp() {

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
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'remove all'
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
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};
renderFormApp();
