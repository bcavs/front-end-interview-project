import Image from "next/image"
import { queries } from "../../styles/breakpoints";
import styled from 'styled-components';

export const StyledNavBar = styled.nav`
    background-color: var(--color-dark);
    padding: 20px;
    color:white;
    justify-content: space-between;
    display:flex;
    flex-direction: row;
    align-items: center;
`;

export const Links = styled.div`
    display: none;
    flex:1;
    a{
        margin: 0 10px;
        color: var(--color-link);
        text-decoration: none;
    }

    @media(${queries.min_break_sm}){
        display: flex;
    }
`;

export const MobileMenu = styled.div`
    display:block;
    flex:1;
    @media(${queries.min_break_sm}){
        display: none;
    }
`;

export const Cart = styled.div`
    flex:1;
    justify-content: flex-end;
    display:flex;
    align-items: center;
`;
