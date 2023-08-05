import React from 'react';
import ReactDOM from 'react-dom';
import { legacy_createStore as createStore } from 'redux' ;
import { Provider } from 'react-redux';
import { rootReducer } from './reducers';

import Title from './components/Title';
import DragonList from './components/DragonList';
import './styles.css';
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//this code means if 'window.__REDUX_DEVTOOLS_EXTENSION__ 'is true,we can use 
//'window.__REDUX_DEVTOOLS_EXTENSION__()' to see the Redux store which displays on the
//google wabsite.

const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <div className="App">
      <Title />
      <DragonList />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>

, rootElement);
