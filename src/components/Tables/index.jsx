import styled from "styled-components";
import { theme } from "../../theme/theme";

export const MainTableContainer = styled.section`
  width: 90%;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: ${({ $padding }) => $padding};

  #loader {
    align-self: center;
    width: 10rem;
    height: 10rem;
    color: ${theme.colors.primary};
  }
`;

export const TableArea = styled.div`
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
`;

export const TitleTable = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
  font-weight: bold;

  & a {
    color: ${theme.colors.darkblue};
    font-size: 1.2rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      color: ${theme.colors.lightGray};
    }
  }
`;

export const Resizer = styled.div``;
export const Order = styled.div``;

export const Container = styled.div`
  display: flex;

  justify-content: center;
  width: 100%;
  background-color: ${theme.colors.white};
  min-height: 30rem;
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  width: 100%;
`;

export const Table = styled.table`
  border-collapse: collapse;
  white-space: nowrap;

  width: ${({ $width }) => $width};
  min-width: 100%;
`;

export const Thead = styled.thead``;
export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  /* height: 100%; */
  &:hover td {
    background-color: ${theme.colors.lightGray4};
  }
`;

export const ThContent = styled.div``;

export const Th = styled.th`
  width: ${({ $width }) => $width};
  padding: 10px;
  text-align: left;
  position: relative;
  border-bottom: 1px solid ${theme.colors.lightGray2};

  &:hover {
    background-color: ${theme.colors.lightGray4};
  }

  ${ThContent} {
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  ${Resizer} {
    width: 5px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    cursor: ew-resize;
    user-select: none;
    touch-action: none;
    opacity: 0;
    border-radius: 6px;

    &:hover {
      background-color: ${theme.colors.lightGray2};
      opacity: 1;
    }
    &.isResizing {
      background-color: ${theme.colors.primary};
      opacity: 1;
    }
  }

  ${Order} {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: red; */
    width: 30px;
    height: 30px;
    svg {
      position: absolute;
      cursor: pointer;
      font-size: 2rem;
      color: ${theme.colors.lightGray3};
      opacity: 0;
      transition-duration: 0.2s;
    }

    &:hover .default {
      color: ${theme.colors.lightGray2};
      opacity: 1;
    }

    .default {
      opacity: 1;
      transition-duration: 0.2s;
    }
    .asc,
    .desc {
      transition-duration: 0.2s;
      opacity: 1;
      color: ${theme.colors.primary};
    }
  }
`;
export const Td = styled.td`
  font-size: 1.6rem;
  border-bottom: 1px solid ${theme.colors.lightGray2};
  width: ${({ $width }) => $width};

  padding: 10px;
  text-align: ${({ $textAlign }) => $textAlign};

  p {
    text-align: left;
    width: 100%;
    height: 100%;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 10px;
  height: 100%;
  justify-content: flex-start;
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
