import styled from "styled-components";
import { theme } from "../../../theme/theme";

export const StyledParagrafo = styled.p`
    width: 32rem;
    height: 2.1rem;
    gap: 0.3rem;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2rem;
    padding: 1.5rem 0;
    color: ${({theme}) => theme.cores.branco};

    & a {
        color: ${({theme}) => theme.cores.preto};
        font-size: 1.6rem;
        font-weight: 600;
        text-decoration: none;
    }

    & a:hover {
        text-decoration: underline;
    } 
`
