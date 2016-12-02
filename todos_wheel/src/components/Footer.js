import React from 'react'
import { Link } from 'react-router'

class Footer extends React.Component{
  handleChange(){
    console.log(this)
  }
  render(){
    return (
      <form>
      show
      {" "}
      <Link href='#' to={'/'} onClick={this.props.set_display.bind(null,'ALL')}>all</Link>
      {" "}
      <Link href='#' to={'active'} onClick={this.props.set_display.bind(null,'ACTIVE')}>Active</Link>
      {" "}
      <Link href='#' to={'completed'} onClick={this.props.set_display.bind(null,'COMPLETED')}>completed</Link>
      </form>
    )
  }
}
export default Footer
