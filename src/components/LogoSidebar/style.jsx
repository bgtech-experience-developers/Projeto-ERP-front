
import styled from "styled-components";
import { theme } from "../../theme/theme"; 

export const StyledLogo = styled.div`
    width: 100%;
    height: 10rem;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.lightgray3};
    display: flex;
    justify-content: center;
    padding-top: 1rem;
    margin: auto;
    cursor: pointer;
`

export const StyledIconLogo = styled.img`
    width: 10rem;
    height: 8rem;
    margin: auto;
`
