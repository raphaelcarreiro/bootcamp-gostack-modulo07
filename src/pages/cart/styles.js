import React from 'react';

import { Container, ProductTable, Total } from './styles';

export default function cart() {
  return (
    <Container>
      <ProductTable>
        <div />
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$ 3.000,00</strong>
        </Total>
      </footer>
    </Container>
  );
}
