import ProductsGroup from './ProductsGroup';
import PropTypes from 'prop-types';
import React from 'react';
import { Test } from './Products.styles';

const Products = (props) => {
  console.log("Groups: ", props.products.groups)
  return(
    <section>
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
