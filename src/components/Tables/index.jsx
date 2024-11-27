import styled from "styled-components";
import { theme } from "../../theme/theme";

export const StyledTableContainer = styled.div`
  width: 100%;
  padding: 2rem;
  background-color: #f7f7f7;
  margin: auto;
  padding-top: 5rem;
  
`;

export const StyledTitleTable = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: bold;
  & a {
    color: ${theme.colors.darkblue};
    font-size: 1.2rem;
    font-weight: 500;

    &:hover {
      color: ${theme.colors.lightGray};
    }
  }

`
