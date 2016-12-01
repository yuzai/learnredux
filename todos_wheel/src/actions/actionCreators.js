// increment

export function add_todo(text,index){
  return {
    type:'ADD_TODO',
    index,
    text
  }
}

//add comments
export function toggle_todo(index){
  return{
    type:'TOGGLE_TODO',
    index
  }
}

export function set_display(text){
  return{
    type:'SET_DISPLAY',
    text
  }
}
