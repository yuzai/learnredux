import React from 'react';

class Counter extends React.Component{

  incrementIfOdd(){
    if(this.props.value % 2 !== 0)
      this.props.onincrement();

  }
  incrementAsync(){
    setTimeout(this.props.onincrement(),1000);
  }
  render(){
    <p>
      clicked: {value} times
      <button onClick = {this.props.onincrement}> + </button>
      <button onClick = {this.props.ondecrement}> - </button>
      <button onClick = {this.incrementIfOdd}> incrementIfOdd </button>
      <button onClick = {this.incrementAsync}> incrementAsync </button>
    </p>
  }

}
export default Counter;
