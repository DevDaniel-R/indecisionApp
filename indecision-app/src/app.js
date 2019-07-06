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

const user = {
  name: 'Daniel Rodriguez',
  Age: 25,
  location: 'Texas'
};


function getLocation(location){
  if (location){
    return <p>Location: {location}</p>;
  }
}

const templateTwo = (
  <div>
  <h1>{user.name ? user.name : 'Anonymous'}</h1>
  {(user.Age && user.Age >= 18) && 
  <p>Age:{user.Age}</p>}

  {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template,appRoot);