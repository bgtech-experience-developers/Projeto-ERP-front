import styled, { css } from "styled-components";
import { theme } from "../../../theme/theme";

const primary = css`
  width: 100%;
  padding: 5px 49px;
  background-color: ${theme.colors.lightgray4};
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const secondary = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || '2.3rem'};
`

export const _Form = styled.form`
  ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return primary;
        case "secondary":
          return secondary
    }
  }}
  width: ${({ $width }) => $width};
`;
