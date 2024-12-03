import styled, { css } from "styled-components";
import { theme } from "../../theme/theme";

const LoginHeader = css`
  width: 100%;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
`;

const TableHeader = css`
  display: flex;
  background-color: ${theme.colors.white};
  align-items: center;
  width: 100%;
  height: 6.6rem;
  border-top: 1px solid ${theme.colors.lightGray3};
  border-right: 1px solid ${theme.colors.lightGray3};
  border-left: 1px solid ${theme.colors.lightGray3};
`;

export const _Header = styled.div`
  ${({ $variant }) => {
    switch ($variant) {
      case "login":
        return LoginHeader;
      case "table":
        return TableHeader;
      default:
        return "";
    }
  }}
`;
