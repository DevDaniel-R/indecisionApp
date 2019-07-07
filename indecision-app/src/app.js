console.log('App.js is running');

//JSX - JavaScript XML
const app ={
title: 'Indecision App',
subTitle: 'my little pony 2',
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

const appRoot = document.getElementById('app');

const renderFormApp = () => {

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subTitle && <p> {app.subTitle} </p>}
    <p>{app.options.length >= 0 ? 'here are your options' : 'no options'}</p>
    <p>{app.options.length}</p>
    <button onClick ={onRemoveAll}>remove all</button>
      <ol>
        <li>item one</li>
        <li>item one</li>
        <li>item three</li>
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