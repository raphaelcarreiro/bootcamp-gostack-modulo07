import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Router } from 'react-router-dom';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import App from './App';
import history from './services/history';

const AppRoutes = () => (
  <Router history={history}>
    <App>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </App>
  </Router>
);

ReactDOM.render(<AppRoutes />, document.getElementById('root'));
