import styled, { css } from "styled-components";

const triple = css`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
`;
const double = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;

export const _FormsField = styled.div`
  ${({ $variant }) => {
    switch ($variant) {
      case "double":
        return double;
      case "triple":
        return triple;
      default:
        return null;
    }
  }}
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;
