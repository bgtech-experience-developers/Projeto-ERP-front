import styled from "styled-components";

export const IconContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  .icon {
    font-size: 2rem;
    cursor: pointer;
    color: #969696;
    &:hover {
      color: #000000;
    }
  }
`;
