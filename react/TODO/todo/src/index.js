import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { Route } from 'react-router-dom';
import Data from './components/Data/Data';
import Switch from 'react-bootstrap/esm/Switch';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route component={App} exact path = "/"></Route>
        <Route component={Data} path = "/data/:id"></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('react-app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
