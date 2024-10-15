import styled from "styled-components";

const getInputStyles = (theme, variant) => {
  const variants = {
    default: {
      border: "none",
      backgroundColor: theme.cores.branco,
      borderRadius: `4px`,
      color: theme.cores.preto,
    },
  };

  return variants[variant] || variants.default;
};

export const StyledInput = styled.input`
  width: 100%;
  height: ${(props) => props.height || "3.75rem"};
  border-radius: ${(props) =>
    getInputStyles(props.theme, props.$variante).borderRadius};
  border: ${(props) => getInputStyles(props.theme, props.$variant).border};
  background-color: ${(props) =>
    getInputStyles(props.theme, props.$variant).backgroundColor};
  color: ${(props) => getInputStyles(props.theme, props.$variant).color};
  font-size: 1.5rem;
  padding: 1rem;
`;
