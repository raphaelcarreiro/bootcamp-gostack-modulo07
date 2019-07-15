import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import App from './App';

const AppRoutes = () => (
  <Router>
    <App>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </App>
  </Router>
);

ReactDOM.render(<AppRoutes />, document.getElementById('root'));
