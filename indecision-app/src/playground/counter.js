class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);    
    this.state = {
      count: 0
    };
  }
  handleAddOne(){
    this.setState((prevState) => {
      return{
        count: prevState.count + 1
      }
    })
  }
  handleMinusOne(){
    this.setState((minState) => {
      return{
        count: minState.count -1
      }
    }
    )
  }
  handleReset(){
    this.setState(() => {
      return {
        count : 0
      };
    })
  }

  render() {
    return(
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

//create three methods: handleAddOne handleMinusOne handleReset
//use console.log to print method name
//wire up onClick and bind in the constructor

ReactDOM.render(<Counter />, document.getElementById('app'));
// let count = 0;
// const addOne = () => {
//   count ++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count --;
//   console.log('minusOne')
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   console.log('reset')
//   renderCounterApp();
// };

// //challenge
// //make button '-1' - setup minus one function and register - log "minusOne"
// //make reset button "reset" - setup reset fuction - log "reset"

// // let counter = 0

// // const minus = () => {
// //   console.log('minusOne')
// // }
// // const reset = () => {
// //   console.log("reset")
// // }
// // const templateThree = (
// // <div>
// // <h1>Take Away</h1>
// // <button onClick={minus} >-1</button>
// // <h2>New</h2>
// // <button onClick={reset}>reset</button>
// // </div>
// // );

// const appRoot = document.getElementById('app');


// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );

const numbers = [55, 101, 1000];
numbers.map((number) => {
  return <p key={number}>Number: {number}</p>
})



// ReactDOM.render(templateTwo,appRoot);
//   };
//   renderCounterApp();
