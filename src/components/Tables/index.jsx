import styled from "styled-components";
import { theme } from "../../theme/theme";

export const StyledTableContainer = styled.div`
  width: 90%;
  padding: 2rem;
  align-self: center;
  background-color: #f7f7f7;
  /* Tava bugando */
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
`;
