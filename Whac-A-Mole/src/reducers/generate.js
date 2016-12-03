export default function generate(state=0,action){
  switch(action.type){
  case 'GENE':
    console.log('reducer:generate,action:GENE')
    const s=Math.floor(Math.random()*25)
    console.log(s)
    return s;
  default:return state
  }
}
