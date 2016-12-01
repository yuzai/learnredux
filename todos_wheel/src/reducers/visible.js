

function visible(state=[],action){
  switch(action.type){
  case 'SET_DISPLAY':
    console.log('set_display',action.text)
    if(action.text)
      return action.text;
    return state;
  default:return state;
  }
}

export default visible
