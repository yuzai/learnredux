import React from 'react';


class Addtodo extends React.Component{
  handleSubmit(e){
    e.preventDefault()
    const value = this.refs.todo.value
    if(value)
    {
      console.log(value)
      this.props.add_todo(value)
    }
    this.refs.todo.value='';
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
         <input ref='todo' type='text' />
         <input type='submit' value='addtodo'/>
      </form>
    )
  }
}
export default Addtodo
