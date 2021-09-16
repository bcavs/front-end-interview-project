import { Group, GroupName, ProductGrid } from './ProductsGroup.styles';

import ProductCard from './ProductCard/ProductCard';
import PropTypes from 'prop-types';
import React from 'react';

const ProductsGroup = ({group}) => {
  return(
    <Group>
      <GroupName>{group.name}</GroupName>
      <ProductGrid>
        {group.products && group.products.map((product, i) => (
          <ProductCard product={product} key={`${product}-${i}`}/>
        ))}
      </ProductGrid>
    </Group>
  )
};

ProductsGroup.propTypes = {
  // bla: PropTypes.string,
};

ProductsGroup.defaultProps = {
  // bla: 'test',
};

export default ProductsGroup;
