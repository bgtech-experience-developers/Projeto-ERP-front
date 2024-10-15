import styled from "styled-components";



export const AccordionContainer = styled.div`
  width: 100%;
  max-width: 18rem;
  background-color: #2C3E50;
  padding: 1.8rem;
  height: 100dvh;
  overflow-y: scroll;

`;

export const AccordionItem = styled.div`
  border-bottom: 1px solid #ddd;
`;

export const AccordionTitle = styled.div`
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? "#475D71" : "#2C3E50")};
  padding: 15px;
  h3 {
    margin: 0;
    font-size: 18px;
    color: ${({ isActive }) => (isActive ? "#fff" : "#FFF")};
  }
`;

export const AccordionContent = styled.div`
  color: #BBC8D6;
  max-height: ${({ isActive }) => (isActive ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  /* padding: ${({ isActive }) => (isActive ? "15px" : "0")}; */
  padding-left: 1.5rem;
  p {
    margin: 0;
    padding: 10px 0;
  }
`;