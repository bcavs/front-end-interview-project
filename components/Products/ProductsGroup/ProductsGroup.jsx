import { Group, GroupName, ProductGrid } from './ProductsGroup.styles';

import ProductCard from './ProductCard/ProductCard';

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


export default ProductsGroup;
