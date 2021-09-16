import ProductCard from './ProductCard/ProductCard';
import { ProductGrid } from './ProductsGroup.styles';
import PropTypes from 'prop-types';
import React from 'react';

const ProductsGroup = ({group}) => {
  // console.log("Products: ", group)
  return(
    <section>
      <h2>{group.name}</h2>
      <ProductGrid>
        {group.products && group.products.map((product, i) => (
          <ProductCard product={product} key={`${product}-${i}`}/>
        ))}
      </ProductGrid>
    </section>
  )
};

ProductsGroup.propTypes = {
  // bla: PropTypes.string,
};

ProductsGroup.defaultProps = {
  // bla: 'test',
};

export default ProductsGroup;
