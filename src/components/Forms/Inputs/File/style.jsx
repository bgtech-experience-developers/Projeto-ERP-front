import styled, { css } from "styled-components";
import { theme } from "../../../../theme/theme";

const primary = css`
  width: 22.2rem;
  height: 14.1rem;
  border: 4px dashed ${theme.colors.lightGray};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

export const FileContainer = styled.div`
  ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return primary;
      default:
        return null;
    }
  }}
`;
export const _File = styled.input.attrs({
  type: "file",
})`
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: absolute;
`;
