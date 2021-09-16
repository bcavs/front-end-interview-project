import { queries } from "../../styles/breakpoints"
import styled from 'styled-components';

export const StyledHero = styled.div`
    display: flex;  
    justify-content: center;
    align-items: center;
    flex-flow:column;
    
    @media(${queries.min_break_sm}){
        flex-flow:row;   
        margin: 50px 0;
    }
`;
export const Content = styled.div`
    padding: 20px;
    flex:1;
    p{
        line-height: 24px;
    }
`;
export const ImageContainer = styled.div`
    flex:1;
    width: 100%;
    img{
        width:100%;
        height:auto;
    }
`;