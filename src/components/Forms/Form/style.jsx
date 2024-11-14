import styled, { css } from "styled-components";
import { theme } from "../../../theme/theme";

const primary = css`
  border: 1pt solid red;
  width: 87.8rem;

  padding: 5px 49px;
  background-color: ${theme.colors.lightgray4};
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const _Form = styled.form`
  ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return primary;
    }
  }}
`;
