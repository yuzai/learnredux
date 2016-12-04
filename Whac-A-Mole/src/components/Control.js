import React from 'react'

let s;
let t;
export default class Control extends React.Component{
  constructor(){
    super();
    this.state = {
      second: 0,
      minute:0,
      hour:0
    }
  }
  checktime(){
    this.setState({
      second:(this.state.second+1===60)?0:this.state.second+1,
      minute:(this.state.second+1===60)?(this.state.minute+1===60)?0:this.state.minute+1:this.state.minute,
      hour:(this.state.minute+1===60)?(this.hour+1===24)?0:this.state.hour+1:this.state.hour
    }
    )
  }
  generate_mice(){
    let rand = Math.floor(Math.random()*1000)+1000;
    this.props.start();
    console.log(rand);
    s=setTimeout(()=>this.generate_mice(),rand);
  }
  handleStart(){
    t=setInterval(this.checktime.bind(this),1000);
    // s=setInterval(this.props.start,1000);
    this.generate_mice();
    this.refs.start.disabled='disabled'
    this.refs.pause.disabled=''
  }
  handlePause(){
    clearTimeout(s);
    clearInterval(t);
    this.props.end();
    this.refs.start.disabled=''
    this.refs.pause.disabled='disabled'
  }
  render(){
    const percentage = (this.props.number/(this.props.miss+this.props.number)).toFixed(3).toString();
    return (
      <div>
      <table className='table table-hover'>
        <thead>
          <tr>
            <td><button ref='start' className='btn btn-success' onClick={()=>this.handleStart()}>start</button></td>
            <td><button ref='pause' className='btn btn-info' onClick={()=>this.handlePause()}>pause</button></td>
          </tr>
        </thead>
        <tbody>
          <tr ><td>击中次数</td><td>{this.props.number}</td></tr>
          <tr><td>误击次数</td><td>{this.props.miss}</td></tr>
          <tr><td>总打击次数</td><td>{this.props.miss+this.props.number}</td></tr>
          <tr><td>命中率</td><td>{(this.props.miss+this.props.number===0)?null:percentage.slice(2,4)+'.'+percentage.slice(4,5)+'%'}</td></tr>
          <tr><td>用时</td><td>{(this.state.hour===0?'':this.state.hour+':')+(this.state.minute===0?'':this.state.minute+':')+this.state.second}</td></tr>
        </tbody>
      </table>
      </div>
    )
  }
}
