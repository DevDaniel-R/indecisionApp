console.log('App.js is running');

//JSX - JavaScript XML
const app ={
title: 'Indecision App',
subTitle: 'my little pony 2',
options: ['one', 'Two']
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subTitle && <p> {app.subTitle} </p>}
    <p>{app.options.length >= 0 ? 'here are your options' : 'no options'}</p>
      <ol>
        <li>item one</li>
        <li>item one</li>
        <li>item three</li>
      </ol>
  </div>
);

let count = 0;
const addOne = () => {
  count ++;
  renderCounterApp();
};
const minusOne = () => {
  count --;
  console.log('minusOne')
  renderCounterApp();
};
const reset = () => {
  count = 0;
  console.log('reset')
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

const appRoot = document.getElementById('app');


const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );


ReactDOM.render(templateTwo,appRoot);
  };
  renderCounterApp();
