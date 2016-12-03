import React from 'react'

export default class Cell extends React.Component{
  handleClick(){
   if(this.props.location === this.props.i)
      this.props.hit();
  }
  render(){
  if(this.props.location!==this.props.i)
  return (
    <div className='cell' onClick={this.handleClick.bind(this)}>
    </div>
  )
  else {
    return (
      <div className='mice' onClick={this.handleClick.bind(this)}>
      </div>
    )
  }
  }
}
