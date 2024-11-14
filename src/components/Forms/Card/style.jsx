import styled, { css } from "styled-components";

const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const _Card = styled.section`
  ${({ $variant }) => {
    switch ($variant) {
      case "form-container":
        return container;
    }
  }}
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;
