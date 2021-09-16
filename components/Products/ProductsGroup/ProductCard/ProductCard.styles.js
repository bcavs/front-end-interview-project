import styled, { css } from 'styled-components';

export const StyledProductCard = styled.div`
    position: relative;
    width:100%;
    margin-bottom: 1rem;
`;

export const ImageContainer = styled.div`
    display: flex;
    position:relative;
    width:100%;
    height:auto;
`;

export const ProductImage = styled.img`
  width:100%;
`;

export const ProductTitle = styled.p`
  margin-top:8px;
  line-height: 20px;
`;

export const PriceContainer = styled.div`
    display:flex;
    /* justify-content: center; */
    align-items: center;
`;

export const ProductPrice = styled.p`
    margin-top: 4px;
    color: var(--color-grey);
    position:relative;
    ${props => props.discounted && css`
        //If the price is discounted...
        color:hsl(0, 96%, 73%);
        :after {
            //Use pseudo :after because line-through is slightly off center
            border-top: 1.5px solid hsl(0, 96%, 73%);;
            position: absolute;
            content: "";
            right: 0;
            top:52%;
            left: 0;
        }
    `}
`;

export const DiscountedPrice = styled(ProductPrice)`
    color:hsl(118, 63%, 35%);
    margin-left:5px;
`;