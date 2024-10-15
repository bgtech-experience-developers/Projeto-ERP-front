import styled from "styled-components";

const variants = {
  input: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginBottom: "10px",
  },
  inputDuplo: {
    display: "flex",
    width: "100%",
    marginBottom: "10px",
    gap: "1rem",
  }
};

export const StyledFormField = styled.div`
  display: ${(props) => variants[props.$variant]?.display};
  flex-direction: ${(props) => variants[props.$variant]?.flexDirection};
  width: ${(props) => variants[props.$variant]?.width};
  margin-bottom: ${(props) => variants[props.$variant]?.marginBottom};
  gap: ${(props) => variants[props.$variant]?.gap};
`;
