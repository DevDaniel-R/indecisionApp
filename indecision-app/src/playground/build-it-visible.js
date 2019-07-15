class VisibilityToggle extends React.Component {
  constructor(props){
    super(props);
    this.handleToggleVisibility= this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return{
      visibility: !prevState.visibility
    };
    });
  }
  render() {
    return (
          <div>
          <h1>Visibility Toggle</h1>
          <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide details' : 'show details'}
          </button>
          {this.state.visibility && (
            <div>
              <p>hey these are some details you can now see</p>
            </div>
          )}
          </div>    
        );
  }
  
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

//visibilityToggle - render constructor handletogglevisibility
//visibility ->

// let visibility = false;

// const toggleVisibility= () => {
// visibility = !visibility;
// render();
// };

// const render = () => {
//   const jax = (
//     <div>
//     <h1>Visibility Toggle</h1>
//     <button onClick={toggleVisibility}>
//     {visibility ? 'Hide details' : 'show details'}
//     </button>
//     {visibility && (
//       <div>
//         <p>hey these are some details you can now see</p>
//       </div>
//     )}

//     </div>

//   );

//   ReactDOM.render(jsx, document.getElementById('app'));
// }

// render();