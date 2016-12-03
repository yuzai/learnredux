import React from 'react'

export default class Cell extends React.Component{
  handleClick(){
    console.log(this.refs.cell.className)
   if(this.props.location === this.props.i)
   {
      this.refs.cell.className='cell'
      this.props.hit();
   }
   else {
     this.props.miss();
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
