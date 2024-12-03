// import styled from "styled-components";
// import { theme } from "../../theme/theme";

// export const Resizer = styled.div``;
// export const Order = styled.div``;

// export const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   background-color: ${theme.colors.white};
//   min-height: 30rem;
// `;

// export const TableWrapper = styled.div`
//   overflow-x: auto;
//   -webkit-overflow-scrolling: touch;
//   width: 100%;
//   border: 1px solid ${theme.colors.lightGray2};
// `;

// export const Table = styled.table`
//   border-collapse: collapse;
//   width: ${({ $width }) => $width};
//   min-width: 100%;
// `;

// export const Thead = styled.thead``;
// export const Tbody = styled.tbody``;

// export const Tr = styled.tr`
//   &:hover td {
//     background-color: ${theme.colors.lightGray4};
//   }
// `;

// export const ThContent = styled.div``;

// export const Th = styled.th`
//   width: ${({ $width }) => $width};
//   padding: 5px;

//   position: relative;
//   border-bottom: 1px solid ${theme.colors.lightGray2};

//   ${ThContent} {
//     font-size: 1.6rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     width: 100%;
//     height: 100%;
//   }

//   ${Resizer} {
//     width: 5px;
//     height: 100%;
//     position: absolute;
//     right: 0;
//     top: 0;
//     z-index: 1;
//     cursor: ew-resize;
//     user-select: none;
//     touch-action: none;
//     opacity: 0;
//     border-radius: 6px;

//     &:hover {
//       background-color: ${theme.colors.lightGray2};
//       opacity: 1;
//     }
//     &.isResizing {
//       background-color: ${theme.colors.primary};
//       opacity: 1;
//     }
//   }

//   ${Order} {
//     position: relative;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     /* background-color: red; */
//     width: 30px;
//     height: 30px;
//     svg {
//       position: absolute;
//       cursor: pointer;
//       font-size: 2rem;
//       color: ${theme.colors.lightGray2};
//       opacity: 0;
//       transition-duration: 0.3s;
//     }

//     .default {
//       opacity: 1;
//       transition-duration: 0.3s;
//     }
//     .asc {
//       transition-duration: 0.3s;
//       opacity: 1;
//       color: ${theme.colors.primary};
//     }
//     .desc {
//       transition-duration: 0.3s;
//       opacity: 1;
//       color: ${theme.colors.primary};
//     }
//   }
// `;
// export const Td = styled.td`
//   font-size: 1.6rem;
//   border-bottom: 1px solid ${theme.colors.lightGray2};
//   width: ${({ $width }) => $width};

//   padding: 10px;
//   text-align: center;
// `;

// export const THeader = styled.header``;

// export const IconContainer = styled.div`
//   display: flex;
//   gap: 10px;
//   height: 100%;
//   justify-content: center;
//   align-items: center;

//   .icon {
//     font-size: 2rem;
//     cursor: pointer;
//     color: #969696;
//     &:hover {
//       color: #000000;
//     }
//   }
// `;
