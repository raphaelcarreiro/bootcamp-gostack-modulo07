import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from './styles/global';
import Header from './components/header/Header';

function App(props) {
  const { children } = props;
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      {children}
    </Fragment>
  );
}

App.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default App;
