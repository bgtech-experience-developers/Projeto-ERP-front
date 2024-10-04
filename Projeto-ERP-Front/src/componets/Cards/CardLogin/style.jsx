import styled from "styled-components";
import { theme } from "../../../theme/theme";

export const StyledLogin = styled.div`
    width: 54.4rem;
    height: 49.8rem;
    border-radius: 2rem;
    background-color: ${({theme}) => theme.cores.accordion};
    padding: 7.8rem 13rem;
    gap: 2.3rem; 
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

`