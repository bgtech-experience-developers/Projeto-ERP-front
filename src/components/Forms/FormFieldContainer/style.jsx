import styled from "styled-components";

const variants = {
  input: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginBottom: "10px",
  },
};

export const StyledFormField = styled.div`
  display: ${(props) => variants[props.$variant]?.display};
  flex-direction: ${(props) => variants[props.$variant]?.flexDirection};
  width: ${(props) => variants[props.$variant]?.width};
  margin-bottom: ${(props) => variants[props.$variant]?.marginBottom};
`;
