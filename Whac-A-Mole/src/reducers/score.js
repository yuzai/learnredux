export default function score(state=0,action){
  switch(action.type){
  case 'HIT':
    console.log('reducer:score,action:HIT')
    return state+1;
  default:return state
  }
}
