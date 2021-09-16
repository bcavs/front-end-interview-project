import { Group, GroupName, ProductGrid } from './ProductsGroup.styles';

import AccordionSummary from '@material-ui/core/AccordionSummary';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ProductCard from './ProductCard/ProductCard';
import { useState } from "react"

const ProductsGroup = ({group}) => {
  const [isExpanded, setIsExpanded] = useState(true)
  return(
    <Group expanded={isExpanded} onChange={() => setIsExpanded(!isExpanded)}>
      <AccordionSummary expandIcon={<KeyboardArrowDownIcon />}>
        <GroupName>{group.name}</GroupName>
      </AccordionSummary>
      <ProductGrid>
        {group.products && group.products.map((product, i) => (
          <ProductCard product={product} key={`${product}-${i}`}/>
        ))}
      </ProductGrid>
    </Group>
  )
};


export default ProductsGroup;
