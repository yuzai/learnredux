### a really sample to use redux in an html

to use redux in an html,there are
1. add a script to redux.js
2. create your own redux before </body> tag

//to create your own redux,there are three foundations
1. action
2. reducer
3. store

the  action object that normally has 2 type of properties
1. type: a string to show the information about this action,only has one
2. value: the data that need to transfer to reducer to change the state,can have many and can be any type

a reducer
it takes two parameter
1. current state
2. action
3. return a new state

redux store
actually it takes 3 parameter,but one is enough
1. a reducer
2. default state
3. for redux-dev-tools

store has three usually used functions
1. store.getState function,get current state's value,in this example ,state is a value.but normally is an object
2. store.dispatch() function take an action object,execute the reducer
3. store.subscribe(a) add a listener to state,every time state change, execute the a function
