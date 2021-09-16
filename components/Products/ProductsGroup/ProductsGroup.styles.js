import { queries } from "../../../styles/breakpoints";
import styled from 'styled-components';

export const ProductGrid = styled.div`
    display: grid;
    grid-template-rows: auto;
    gap:1rem;
    grid-template-columns: repeat(2, 1fr);
    
    @media(${queries.min_break_sm}){
        grid-template-columns: repeat(4, 1fr);
    }
`;

export const GroupName = styled.h2`
  font-size: var(--fontSize-section-heading);
`;

export const Group = styled.section`
    margin-bottom: 4rem;
`;