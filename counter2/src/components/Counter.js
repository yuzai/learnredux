import React from 'react';

class Counter extends React.Component{
//此处直接定义
incrementIfOdd(){
  console.log(this);//此处this的值与调用的上下文有关
if(this.props.value % 2 !== 0)
 this.props.onIncrement();
} //会访问不到this.props
  // incrementIfOdd=()=>{
  //   console.log(this);//Counter，此处this的值始终是Counter
  //   if(this.props.value % 2 !== 0)
  //     this.props.onIncrement();
  // }
  incrementAsync=()=>{
    setTimeout(this.props.onIncrement,1000);
  }
  render(){
    return (<p>
      clicked: {this.props.value} times
      <button onClick={this.props.onIncrement}> + </button>
      <button onClick={this.props.onDecrement}> - </button>
      <button onClick={this.incrementIfOdd.bind(this)}> incrementIfOdd </button>
      <button onClick={this.incrementAsync.bind(this)}> incrementAsync </button>
    </p>
  )
  }

}
export default Counter;
