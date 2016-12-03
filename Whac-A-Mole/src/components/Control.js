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
    const percentage = (this.props.number/(this.props.miss+this.props.number)).toFixed(3).toString();
    return (
      <div>
      <button className='btn btn-success' onClick={()=>this.handleStart()}>start</button>
      <br/>
      <br/>
      <button className='btn btn-primary' onClick={()=>this.handlePause()}>pause</button>
      <br /><br />
      <p>击中次数:{this.props.number}</p>
      <p>误击次数:{this.props.miss}</p>
      <p>总打击次数:{this.props.miss+this.props.number}</p>
      <p>命中率:{(this.props.miss+this.props.number===0)?null:percentage.slice(2,4)+'.'+percentage.slice(4,5)+'%'}</p>
      </div>
    )
  }
}
