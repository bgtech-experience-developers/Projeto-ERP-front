import styled, { css } from "styled-components";
import { theme } from "../../theme/theme";

const navBurger = css`
  position: relative;
  position: fixed;
  width: 6rem;
  height: 100vh;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 10px;

  svg {
    width: 5rem;
    height: 5rem;
    color: ${theme.colors.lightGray};
    transition-duration: 0.2s;
    cursor: pointer;
  }

  svg:nth-child(1) {
    position: absolute;
    fill: ${theme.colors.lightGray};
    opacity: 1;
  }

  svg:nth-child(2) {
    position: absolute;
    z-index: 100;
    opacity: 0;
  }

  &:hover {
    svg:nth-child(1) {
      opacity: 0;
    }

    svg:nth-child(2) {
      opacity: 1;
    }
  }

  &.active {
    display: flex;
  }

  &.hover {
    width: 27rem;
    svg:nth-child(1) {
      opacity: 0;
    }

    svg:nth-child(2) {
      opacity: 1;
    }
  }

  @media (max-width: ${theme.media.md}) {
    display: flex;
    svg:nth-child(2) {
      transform: rotate(180deg);
    }

    &.hover-closed {
      svg:nth-child(1) {
        opacity: 1;
      }

      svg:nth-child(2) {
        transform: rotate(180deg);
        opacity: 0;
      }
    }
  }
`;

export const _Burger = styled.div`
  ${({ $variant }) => {
    switch ($variant) {
      case "nav-burger":
        return navBurger;
      default:
        return null;
    }
  }}
`;
