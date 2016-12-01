import React from 'react'

class Todos extends React.Component {
  handleClick(index){
    console.log(index)
    this.props.toggle_todo(index)
  }
  render() {
    const newlist=this.props.todolist.filter(t=>{
      if(this.props.show==='ACTIVE')
        return t.completed === false
      else if(this.props.show==='COMPLETED')
        return t.completed === true
      else return true
    })
    return (
      <ul >
      {newlist.map((t,index)=>
        (<li key={index} onClick={this.handleClick.bind(this,t.id)}
        style={{
           textDecoration: newlist[index].completed ? 'line-through' : 'none'
         }}>{t.text}</li>) )}
      </ul>
    )
  }
}
export default Todos
