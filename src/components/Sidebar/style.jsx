import styled from "styled-components";
import { theme } from "../../theme/theme";

export const StyledSidebar = styled.div`
  width: 30rem;
  height: 100vh;
  background-color: #eff3e3;
  border: 1pt solid red;
  position: relative;
  svg:nth-child(2) {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 0;
    right: -40px;
    color: ${theme.colors.darkgray3};
    border: 1pt solid green;
    cursor: pointer;
    transform: rotate(180deg);
  }
`;
export const Layout = styled.div`
  display: flex;
  height: 100vh;
`;

export const Content = styled.main`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
`;
