import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import commentReducer from './CommentReducer';
import {Provider} from  'react-redux'
const store = createStore(commentReducer); //สร้างคลังข้อมูล
require('react-web-vector-icons/fonts');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import {createStore} from 'redux'

// const reducer = (state,action)=>{
//   switch (action.type){
//     case "ADD":
//       state  += action.payload;
//       break;

//     case "SUBTRACT":
//       state  -= action.payload;
//       break;
//     default:
//   }

//   return state;
// }
// const store = createStore(reducer,1500)

// store.subscribe(()=>{
//   console.log("Update Store", store.getState());
// })

// store.dispatch({
//   type: "ADD",
//   payload:500
// })

// store.dispatch({
//   type:"SUBTRACT",
//   payload:1000
// })