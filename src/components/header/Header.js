import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.svg';

function Header(props) {
  const { cartSize } = props;
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="RocketShoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}

Header.defaultProps = {
  cartSize: 0,
};

Header.propTypes = {
  cartSize: PropTypes.number,
};

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
