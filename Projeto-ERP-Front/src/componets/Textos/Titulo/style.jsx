
import styled from "styled-components";
import { theme } from "../../../theme/theme";

export const StyledTituloLogin = styled.h1`
    width: 30.3rem;
    height: 4.1rem;
    font-weight: 600;
    line-height: 4.1rem;
    letter-spacing: 1.2%;
    font-size: 3.2rem;
    color: ${({theme}) => theme.cores.preto};
`