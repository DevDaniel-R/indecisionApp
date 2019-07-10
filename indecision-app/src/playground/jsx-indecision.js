class IndecisionApp extends React.Component {
render() {
  const title = 'Indecision';
  const subtitle = 'Put your life at the hands of a computer';
  return (
    <div>
      <Header title={title} subtitle={subtitle} />
      <Action />
      <Options />
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
        <button>What should i do?</button>
        </div>
      );
    }
  }

  class Options extends React.Component{
    render() {
      return(
        <div>
          <Option />
        </div>
      );
    }
  }

  class Option extends React.Component{
    render() {
      return(
        <div>
        <h1>hello i am a option</h1>
        </div>

      );
    }
  }

  //Option -> Option component here

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