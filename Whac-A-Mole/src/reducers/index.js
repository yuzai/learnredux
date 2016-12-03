export default function rootReducer(state={},action){
  switch(action.type){
  case 'GENE':
    console.log('action:GENE')
    const s=Math.floor(Math.random()*25)
    console.log(s)
    return {
      location:s,
      pause:true,
      score:state.score
    };
  case 'HIT':
    console.log('action:HIT')
    return {
      location:state.location,
      pause:state.pause,
      score:state.pause?state.score+1:state.score
    }
    case 'PAUSE':
    console.log('action:PAUSE')
      return {
        location:state.location,
        pause:false,
        score:state.score++
      }
  default:return state
  }
}
