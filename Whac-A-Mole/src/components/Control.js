import React from 'react'

let s;
export default class Control extends React.Component{
  handleStart(){
    s=setInterval(this.props.start,1000)
  }
  handlePause(){
    clearInterval(s);
    this.props.end();
  }
  render(){
    return (
      <div>
      <button onClick={()=>this.handleStart()}>start</button>
      <br/>
      <br/>
      <button onClick={()=>this.handlePause()}>pause</button>
      <p>击中次数:{this.props.number}</p>
      </div>
    )
  }
}
