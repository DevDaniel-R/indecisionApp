const obj = {
  name: 'vikram',
  getName() {
      return this.name;
  }
};

const getName = obj.getName;
console.log(getName());

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
    handlePick() {
      alert('handlePick');
    }

    render(){
      return(
        <div>
        <button onClick={this.handlePick}>What should i do?</button>
        </div>
      );
    }
  }

  class Options extends React.Component{
    handleRemove(){
      alert('handler remove');
    }
    render() {
      return(
        <div>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
        <button onClick={this.handleRemove}>remove all</button>
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
    handleAddOption(e) {
      e.preventDefault();

      const option = e.target.elements.option.value.trim();

      if(option) {
        alert(option);
      }
    }
    render() {
      return(
        <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
        </div>
      );
    }
  }

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));