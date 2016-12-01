import React from 'react'

class Footer extends React.Component{
  handleChange(){
    console.log(this)
  }
  render(){
    return (
      <form>
      show
      {" "}
      <a href='#' onClick={this.props.set_display.bind(null,'ALL')}>all</a>
      {" "}
      <a href='#' onClick={this.props.set_display.bind(null,'ACTIVE')}>Active</a>
      {" "}
      <a href='#' onClick={this.props.set_display.bind(null,'COMPLETED')}>completed</a>
      </form>
    )
  }
}
export default Footer
