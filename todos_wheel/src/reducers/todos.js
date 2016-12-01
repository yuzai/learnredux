let id=5;
function todos(state=[],action){
  switch(action.type){
    case 'ADD_TODO':
      console.log('add_todo')
      return [
        ...state,
        {
          id:id++,
          completed:false,
          text:action.text
        }
      ]
    case 'TOGGLE_TODO':
      console.log('toggle_todo')
      return [
        ...state.map(
          (t,index) => {
            if(index === action.index)
                t.completed = !t.completed
            return t;
              }
          )
      ]
    default: return state
  }
}
export default todos
