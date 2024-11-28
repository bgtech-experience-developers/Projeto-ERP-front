import styled from "styled-components";
import { theme } from "../../theme/theme";

// Elementos padrão do componente
export const ArrowContainer = styled.div``;

export const StyledSidebarContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 33.2rem;
  transition: all 0.3s ease;
  grid-area: sidebar;

  ${ArrowContainer} {
    height: 100%;
    width: 35px;
    svg:nth-child(1) {
      cursor: pointer;
      width: 100%;
      height: 35px;
      color: ${theme.colors.lightGray};
      transform: rotate(180deg);
      opacity: 0;
      transition: 0.3s ease;
    }
  }

  &:hover {
    ${ArrowContainer} {
      svg:nth-child(1) {
        opacity: 1;
      }
    }
  }

  &.closed {
    width: 0;
    transform: translateX(-100%);

    ${ArrowContainer} {
      display: none;
    }
  }

  @media (max-width: ${theme.media.md}) {
    display: none;
    ${ArrowContainer} {
      svg:nth-child(1) {
        opacity: 1;
      }
    }
  }
`;

export const StyledSidebar = styled.div`
  width: 30rem;
  height: 100%;
  align-self: center;
  background-color: #eff3e3;
  overflow-y: auto;
  overflow-x: hidden;
  align-self: center;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  /* Scrollbar */
  scrollbar-width: thin;

  scrollbar-color: ${theme.colors.primary} #eff3e3;

  &::-webkit-scrollbar {
    width: 12px;
    clip-path: inset(0 round 14px);
  }

  &::-webkit-scrollbar-track {
    background: #eff3e3;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.primary};
    border-radius: 20px;
    border: 3px solid #eff3e3;
  }

  &.transform {
    position: fixed;
    left: -500px;
    height: 60%;
    z-index: 9999;
    transition-duration: 0.5s;
    border-radius: 12px;
  }

  &.open-hover {
    left: 0;
  }

  @media (max-width: ${theme.media.md}) {
    display: none;
  }
`;

export const StyledResponsiveSidebar = styled(StyledSidebar)`
  display: block;
  border-radius: 12px;
  @media (max-width: ${theme.media.md}) {
    position: fixed;
    height: 60%;
    z-index: 9999;
    left: -500px;
    transition-duration: 0.5s;

    &.open-hover {
      left: 0;
    }
  }
`;

export const InnerContent = styled.div``;

export const Content = styled.main`
  overflow-y: auto;
  grid-area: content;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  padding: 2rem 0;

  ${InnerContent} {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    width: 100%;
  }

  // Tive que fazer isso por que esse caralho de tabela estava por cima do meu lindo sidebar, que se foda essa tabela, que se fodam bibliotecas de css que deixam tudo pronto, Obrigado :D.
  &.open-hover {
    position: relative;
    z-index: -1;
  }
  // Perdão se isso quebrou algo de alguém

  @media (max-width: ${theme.media.md}) {
    width: 100vw;
  }
`;

export const Layout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: ${({ $isSidebarClosed }) =>
    $isSidebarClosed ? "0 1fr" : "33.2rem 1fr"};
  grid-template-areas: "sidebar content";
  transition: grid-template-columns 0.3s ease;

  @media (max-width: ${theme.media.md}) {
    grid-template-columns: 1fr;
    grid-template-areas: "content";
  }
`;
