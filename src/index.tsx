import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import './index.css';
import Test1 from './Test1';
import Test2 from './Test2';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/test1" component={Test1} />
      <Route exact={true} path="/" component={App} />
      <Route component={Test2} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);
// registerServiceWorker();
