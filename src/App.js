import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
import Header from './components/header/Header';
import './config/ReactotronConfig';
import store from './store';

function App(props) {
  const { children } = props;
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <Header />
      {children}
    </Provider>
  );
}

App.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default App;
