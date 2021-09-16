import ProductsGroup from './ProductsGroup';
import React from 'react';

const Products = (props) => {
  return(
    <section className="container">
      {props.products.groups && props.products.groups.map((group, i) => (
        <ProductsGroup group={group} key={`${group}-${i}`}/>
      ))}
    </section>
  )
};

Products.propTypes = {
  // bla: PropTypes.string,
};

Products.defaultProps = {
  // bla: 'test',
};

export default Products;
