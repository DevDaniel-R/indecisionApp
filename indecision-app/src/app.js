class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions =this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }
  handleDeleteOptions(){
    this.setState(() => {
      return {
        options: []
    }
    });
  }
handlePick() {
  const randomNum = Math.floor(Math.random() * this.state.options.length);
  const option = this.state.options[randomNum];
  alert(option)
}

handleAddOption(option) {
if(!option) {
  return 'Enter valid value to add item';
} else if (this.state.options.indexOf(option) > -1) {
  return 'this option already exist'
}

  this.setState((prevState) => {
    return {
      options: prevState.options.concat(option)
    };
  });
}

  render(){
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';

return (
  <div>
    <Header title={title} subtitle={subtitle} />
    <Action hasOptions={this.state.options.length > 0}
    handlePick={this.handlePick}
    />
    <Options options={this.state.options}
    handleDeleteOptions={this.handleDeleteOptions}/>
    <AddOption 
    handleAddOption={this.handleAddOption}
    />
  </div>
);
}
}


class Header extends React.Component {
render() {
  return(
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component{
  render(){
    return(
      <div>
      <button onClick={this.props.handlePick}
      disabled={!this.props.hasOptions}>
      What should i do?</button>
      </div>
    );
  }
}

class Options extends React.Component{
  render() {
    return(
      <div>
      <button onClick={this.props.handleDeleteOptions}>remove all</button>
      {
        this.props.options.map((option) => <Option key={option} optionText={option}/>)
      }
      </div>
    );
  }
}

class Option extends React.Component{
  render() {
    return(
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component{
  constructor(props){
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        error: undefined
      };
    }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error= this.props.handleAddOption(option);

    this.setState(() => {
      return{
        error
      };
    });

  }
  render() {
    return(
      <div>
      {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option"/>
        <button>Add Option</button>
      </form>
      </div>
    );
  }
}

const User = () => {
  
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
















//idk what this is??????
// //JSX - JavaScript XML
// const app ={
// title: 'Indecision App',
// subTitle: 'put your life in the hands of a computer',
// options: []
// };

// const onFormSubmit = (e) => {
//   e.preventDefault();
  
//   const option = e.target.elements.option.value;

//   if (option) {
//     app.options.push(option);
//     e.target.elements.option.value = '';
//     renderFormApp();
//   }
// };

// const onRemoveAll = () => {
//   app.options = [];
//   renderFormApp();
// }
// const onMakeDecision = () => {
//   const randomNum = Math.floor(Math.random() * app.options.length);
//   const option = app.options[randomNum];
//   alert(option);
// }

// const appRoot = document.getElementById('app');

// const renderFormApp = () => {

// const template = (
//   <div>
//     <h1>{app.title}</h1>
//     {app.subTitle && <p> {app.subTitle} </p>}
//     <p>{app.options.length >= 0 ? 'here are your options' : 'no options'}</p>
//     <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
//     <button onClick ={onRemoveAll}>remove all</button>
//       <ol>
//         {
//           app.options.map((option) => <li key={option}>{option}</li>)
//           }
//       </ol>
//       <form onSubmit={onFormSubmit}>
//       <input type="text" name="option"></input>
//       <button>Add Option</button>
//       </form>
//   </div>
// );
// ReactDOM.render(template, appRoot);
// };
// renderFormApp();