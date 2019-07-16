import React, { useEffect, useState, Fragment } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import { ProductList } from './styles';
import Placeholder from './Placeholder';

function Home(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .get('/products')
      .then(response => {
        if (response.status === 200) {
          const data = response.data.map(product => {
            return { ...product, formattedPrice: formatPrice(product.price) };
          });

          setProducts(data);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function handleProduct(product) {
    const { dispatch } = props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  }

  return (
    <Fragment>
      {loading ? (
        <Placeholder />
      ) : (
        <ProductList>
          {products.map(product => (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <strong>{product.title}</strong>
              <span>{product.formattedPrice}</span>
              <button type="button" onClick={() => handleProduct(product)}>
                <div>
                  <MdAddShoppingCart size={16} color="#fff" />
                </div>
                <span>Adicionar ao carrinho</span>
              </button>
            </li>
          ))}
        </ProductList>
      )}
    </Fragment>
  );
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Home);
