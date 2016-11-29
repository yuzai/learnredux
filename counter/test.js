//to use redux,there are three foundations
//1. action
//2. reducer
//3. store

//reducer
//it takes two parameter
//1. current state
//2. action
//3. return a new state

function counter(state, action) {
  if (typeof state == 'undefined')
    return 0
  switch (action.type) {
    case 'INCREMENT':
      return state + action.value
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

//redux store
//actually it takes 3 parameter,but one is enough
//1. a reducer
//2. default state
//3. for redux-dev-tools

var store = Redux.createStore(counter,5);


var valueE1 = document.getElementById('value');

//store.getState function,get current state's value
// in this example ,state is a value.but normally is an object
function render() {
  valueE1.innerHTML = store.getState();
}

render()

//store.subscribe() add a listener to state,every time state change, execute the
//render() function
let unsubscribe =  store.subscribe(render);

//add click listener to buttons
//store.dispatch() function take an action object
//the  action object that normally has 2 type of properties
//1. type: a string to show the information about this action,only has one
//2. value: the data that need to transfer to reducer to change the state,
//can have many and can be any type
document.getElementById('increment')
  .addEventListener('click', function() {
    store.dispatch({
      type: 'INCREMENT',
      value:5
    });
  })
document.getElementById('decrement')
  .addEventListener('click', function() {
    store.dispatch({
      type: 'DECREMENT'
    })
  })
document.getElementById('incrementIfOdd')
  .addEventListener('click', function() {
    if (store.getState() % 2 !== 0) {
      store.dispatch({
        type: 'INCREMENT',
        value:2
      })
    }
  })

document.getElementById('incrementAsync')
  .addEventListener('click', function() {
    setTimeout(function() {
      store.dispatch({
        type: 'INCREMENT',
        value:3
      })
    }, 1000)
  })

//unsubscribe cancel the listen about state
// after 5 seconds ,when click the button ,state adds either,but will not execute render()
//so the number won's change after this function,but state still change
//you can write store.getState() in console to see the value of state
setTimeout(unsubscribe,5000);
