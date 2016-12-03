export default function rootReducer(state={},action){
  switch(action.type){
  case 'GENE':
    console.log('action:GENE')
    const s=Math.floor(Math.random()*25)
    console.log(s)
    return {
      location:s,
      pause:true,
      score:state.score,
      miss:state.miss,
      first:true
    };
  case 'HIT':
    console.log('action:HIT')
    return {
      location:state.location,
      pause:state.pause,
      score:state.pause&&state.first?state.score+1:state.score,
      miss:state.pause&&(!state.first)?state.miss+1:state.miss,
      first:false
    }
    case 'MISS':
    console.log('action:MISS')
    return {
      location:state.location,
      pause:state.pause,
      score:state.score,
      miss:state.pause?state.miss+1:state.miss,
      first:state.first
    }
    case 'PAUSE':
    console.log('action:PAUSE')
      return {
        location:state.location,
        pause:false,
        score:state.score,
        miss:state.miss,
        first:state.first
      }
  default:return state
  }
}
