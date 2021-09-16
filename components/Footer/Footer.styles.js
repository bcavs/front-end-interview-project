import Image from "next/image";
import styled from 'styled-components';

export const StyledFooter = styled.footer`
    background-color: var(--color-dark);
    color:white;
    display:flex;
    flex-flow: column;
    justify-content:center;
    align-items:center;
    padding: 40px 0;
    margin-top: 40px;
`;
export const IconContainer = styled.div`
  display: flex;
  width:100%;
  max-width: 250px;
  margin: 0 auto;
  align-items: center;
  justify-content:space-evenly;
`;


export const LegalContainer = styled.div`
  display: flex;
  flex-flow:row;
  width:100%;
  max-width: 250px;
  justify-content:space-evenly;
  align-items:center;
  margin-top: 30px;
`;