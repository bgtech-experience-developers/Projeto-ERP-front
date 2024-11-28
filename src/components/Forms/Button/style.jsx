import styled, { css } from "styled-components";
import { theme } from "../../../theme/theme";

const primary = css`
  border: none;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  border-radius: 4px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};
`;

const disabled = css`
  border: none;
  width: 100%;
  height: 100%;
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
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;
