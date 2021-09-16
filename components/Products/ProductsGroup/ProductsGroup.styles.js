import styled, { css } from 'styled-components';

import Accordion from '@material-ui/core/Accordion';
import { queries } from "../../../styles/breakpoints";

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
  margin: 0;
`;

export const Group = styled(Accordion)`
    margin-bottom: 4rem;

    ${props => !props.expanded && css`
        margin-bottom: 0;
    `}

    // MUI Accordion Overrides
    box-shadow: none !important;
    .MuiAccordionSummary-root{
        padding: 0;
        :before{
            display:none !important;
        }
    }
    .MuiSvgIcon-root{
        width: 40px;
        height:40px;
    }
    .MuiIconButton-root{
        color:var(--color-dark);
    }
    :before{
        display:none;
    }
`;