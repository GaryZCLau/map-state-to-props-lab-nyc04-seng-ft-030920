import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import manageUsers from './reducers/manageUsers'


// add imports and code
let storeObj = createStore(manageUsers)

ReactDOM.render(
  // add imports and code
  <Provider store={storeObj}>
    <App />
  </Provider>
  // add imports and code
  ,
  document.getElementById('root')
);
