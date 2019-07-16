import React from 'react';

import { ListPlaceholder, ItemPlaceholder } from './styles';

function Placeholder() {
  const content = [];
  let i = 0;

  for (i = 0; i < 6; i += 1) {
    content.push(
      <ItemPlaceholder key={i}>
        <div />
      </ItemPlaceholder>
    );
  }

  return <ListPlaceholder>{content}</ListPlaceholder>;
}

export default Placeholder;
