let visibility = false;

const toggleVisibility= () => {
visibility = !visibility;
render();
};

const render = () => {
  const jax = (
    <div>
    <h1>Visibility Toggle</h1>
    <button onClick={toggleVisibility}>
    {visibility ? 'Hide details' : 'show details'}
    </button>
    {visibility && (
      <div>
        <p>hey these aew some details you can now see</p>
      </div>
    )}
    </div>

  );

  ReactDOM.render(jsx, document.getElementById('app'));
}

render();