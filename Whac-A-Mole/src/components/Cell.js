import React from 'react'

export default class Cell extends React.Component{
  handleClick(){
   if(this.props.location === this.props.i)
   {
      this.refs.cell.className='hit'
      this.props.hit();
      setTimeout(()=>this.refs.cell.className='cell',500)
   }
   else {
     this.refs.cell.className='miss'
     this.props.miss();
     setTimeout(()=>this.refs.cell.className='cell',500)
   }
  }
  render(){
  if(this.props.location!==this.props.i)
  return (
    <div className='cell' ref='cell' onClick={this.handleClick.bind(this)}>
    </div>
  )
  else {
    return (
      <div className='mice' ref='cell' onClick={this.handleClick.bind(this)}>
      </div>
    )
  }
  }
}
