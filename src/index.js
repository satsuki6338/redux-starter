
import store from './store';
import * as Action from './actions';
import * as immutable from 'immutable';

const initial = [];

// const immuInitial = immutable.fromJS(initial);
// const immuState1 = immuInitial.push({
//     id: 0,
//     data:[]
// })
// const immuState2 = immuState1.map(device => {
//     device.data.push(12);
// })
// console.log('init', immuInitial.toArray());
// console.log('state 1', immuState1.toArray());
// console.log('state 2', immuState2.toArray());

store.dispatch({
    type: Action.ADD_MOVTAG
})
store.dispatch({
    type: Action.ADD_DATA,
    payload: 33
})
store.dispatch({
    type: Action.ADD_DATA,
    payload: 89
})
console.log('store state', store.getState());