console.log('App.js is running');

//JSX - JavaScript XML
const app ={
title: 'Indecision App',
subTitle: 'put your life in the hands of a computer',
options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderFormApp();
  }
};

const onRemoveAll = () => {
  app.options = [];
  renderFormApp();
}
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}

const appRoot = document.getElementById('app');

const renderFormApp = () => {

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subTitle && <p> {app.subTitle} </p>}
    <p>{app.options.length >= 0 ? 'here are your options' : 'no options'}</p>
    <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
    <button onClick ={onRemoveAll}>remove all</button>
      <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)
          }
      </ol>
      <form onSubmit={onFormSubmit}>
      <input type="text" name="option"></input>
      <button>Add Option</button>
      </form>
  </div>
);
ReactDOM.render(template, appRoot);
};
renderFormApp();