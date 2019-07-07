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

var count = 0;
var addOne = function addOne() {
  count++;
  renderCounterApp();
};
var minusOne = function minusOne() {
  count--;
  console.log('minusOne');
  renderCounterApp();
};
var reset = function reset() {
  count = 0;
  console.log('reset');
  renderCounterApp();
};

//challenge
//make button '-1' - setup minus one function and register - log "minusOne"
//make reset button "reset" - setup reset fuction - log "reset"

// let counter = 0

// const minus = () => {
//   console.log('minusOne')
// }
// const reset = () => {
//   console.log("reset")
// }
// const templateThree = (
// <div>
// <h1>Take Away</h1>
// <button onClick={minus} >-1</button>
// <h2>New</h2>
// <button onClick={reset}>reset</button>
// </div>
// );

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'reset'
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();
