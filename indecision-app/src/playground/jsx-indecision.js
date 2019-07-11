class IndecisionApp extends React.Component {
render() {
  const title = 'Indecision';
  const subtitle = 'Put your life at the hands of a computer';
  const options = ['thing one', 'thing two', 'thing four', 'thing fifty'];

  return (
    <div>
      <Header title={title} subtitle={subtitle} />
      <Action />
      <Options options={options}/>
      <AddOption />
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
        <button onClick=>What should i do?</button>
        </div>
      );
    }
  }

//Render new p tag for each option (set text, set key)

  class Options extends React.Component{
    render() {
      return(
        <div>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
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
    render() {
      return(
        <div>
        <h1>this is a react component</h1>
        </div>
      );
    }
  }

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));