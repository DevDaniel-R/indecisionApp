console.log('App.js is running');

//JSX - JavaScript XML
var template = (
  <div>
    <h1>Daniel Rodriguez</h1>
    <p>this is some info</p>
      <ol>
        <li>item one</li>
        <li>item one</li>
      </ol>
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template,appRoot);