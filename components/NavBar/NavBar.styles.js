import Image from "next/image"
import styled from 'styled-components';

export const StyledNavBar = styled.nav`
    background-color: black;
    padding: 20px;
    color:white;
    justify-content: space-between;
    display:flex;
    flex-direction: row;
`;

export const Links = styled.div`
    display: flex;
    flex:1;
    a{
        margin: 0 10px;
    }
`;

export const Cart = styled.div`
    flex:1;
    text-align:right;
`;