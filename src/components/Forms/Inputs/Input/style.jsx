import styled, { css } from "styled-components";
import { theme } from "../../../../theme/theme";

// variantes
const primary = css`
  padding-left: 20px;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 1px solid ${theme.colors.lightgray3};
  font-size: 20px;

    // Estilo de foco
    &:focus {
    border-color: ${theme.colors.lightGray};
    outline: none;
  }
`;

// Principais
export const _Input = styled.input`
  ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return primary;
      default:
        return null;
    }
  }}
  height: ${({ $height }) => $height};
`;

// Estilo para o Select
export const Select = styled.select`
  ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return primary;
      default:
        return null;
    }
  }}
  height: ${({ $height }) => $height};
`;

export const InputContainer = styled.div`
  width: 100%;
  label {
    width: inherit;
    height: inherit;
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    text-align: inherit;
  }
  width: ${({ $width }) => $width};
`;
