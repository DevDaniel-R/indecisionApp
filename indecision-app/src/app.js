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

const appRoot = document.getElementById('app');
