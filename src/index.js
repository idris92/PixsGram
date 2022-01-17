import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Testing from './Testing';
import { createStore } from 'redux';
import reducers from './reducers';
import Notes from './Notes';
import { Provider } from 'react-redux';



//action

//reducers


//store
 const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//dispatch
// store.dispatch(Increment);
// store.dispatch(Decrement);

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Provider store={store}>
    <Testing/>
    </Provider> */}
    <Notes/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA