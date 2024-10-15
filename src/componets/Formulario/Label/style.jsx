import styled from "styled-components";
import { theme } from "../../../theme/theme";

export const StyledLabel = styled.label`
    width: 3rem;
    height: 1.8rem;
    top: 14.7rem;
    left: 8.5rem;
    font-weight: 700;
    font-size: 1.4rem;
    height: 1.8rem;
    letter-spacing: 1.2%;
    color: ${({theme})=> theme.cores.black};
`