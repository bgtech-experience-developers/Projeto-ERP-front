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
    justifyContent: "center",
    width: "100%",
    marginBottom: "10px",
    gap: "1rem",
  },
  buttonDuplo: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginBottom: "10rem",
    gap: "1rem",
  },
};

export const StyledFormField = styled.div`
  display: ${(props) => variants[props.$variant]?.display};
  flex-direction: ${(props) => variants[props.$variant]?.flexDirection};
  justify-content: ${(props) => variants[props.$variant]?.justifyContent};
  width: ${(props) => variants[props.$variant]?.width};
  margin-bottom: ${(props) => variants[props.$variant]?.marginBottom};
  gap: ${(props) => variants[props.$variant]?.gap};
`;
