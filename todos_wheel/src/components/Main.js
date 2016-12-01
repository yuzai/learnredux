import React from 'react';
import Addtodo from './Addtodo'
import Todos from './Todos'
import Footer from './Footer'

class Main extends React.Component{
  render(){
    return (
      <div>
         <Addtodo add_todo={this.props.add_todo}/>
         <Todos show={this.props.visible} todolist={this.props.todos} toggle_todo={this.props.toggle_todo}/>
         <Footer set_display={this.props.set_display}/>
      </div>
    )
  }
}

export default Main
