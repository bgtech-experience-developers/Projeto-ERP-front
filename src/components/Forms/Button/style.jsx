import styled, { css } from "styled-components";
import { theme } from "../../../theme/theme";

const primary = css`
  border: none;
  width: 71.6rem;
  height: 4.3rem;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  border-radius: 4px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};
`;

const disabled = css`
  border: none;
  width: 71.6rem;
  height: 4.3rem;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.secondary};
`;

export const _Button = styled.button`
  ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return primary;
      case "disabled":
        return disabled;
      default:
        return null;
    }
  }}
`;
