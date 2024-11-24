import styled, { css } from "styled-components";

const container = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const containerLogin = css`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding || "9.5rem 8.5rem"};
  background-color: ${(props) =>
    props.backgroundColor || props.theme.colors.tertiary};
  border-radius: 20px;
`;

export const _Card = styled.section`
  ${({ $variant }) => {
    switch ($variant) {
      case "form-container":
        return container;
      case "form-container-login":
        return containerLogin;
    }
  }}
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;
