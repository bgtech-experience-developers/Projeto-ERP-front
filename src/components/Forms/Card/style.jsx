import { styled } from "styled-components";

const getDivStyles = (theme, variant) => {
  const variants = {
    default: {
      border: "none",
      backgroundColor: theme.cores.secondary,
      borderRadius: "0 0 0.8rem 0.8rem",
      color: theme.cores.preto,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2.5rem",
      margin: "0 auto",
      minWidth: "5rem",
    },
    cardRegister: {
      border: "none",
      backgroundColor: theme.cores.cardRegister,
      borderRadius: "0 0 0.8rem 0.8rem",
      color: theme.cores.preto,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2.5rem",
      margin: "0 auto",
      minWidth: "5rem",
    },
    titleRegister: {
      border: "none",
      backgroundColor: theme.cores.azul,
      borderRadius: "0.8rem 0.8rem 0 0",
      color: theme.cores.fonte,
      padding: "3rem 3rem 3rem 6rem",
      margin: "5rem auto auto",
      minWidth: "5rem",
    },
    cardSucess: {
      border: "none",
      backgroundColor: theme.cores.cardRegister,
      borderRadius: "0 0 0.8rem 0.8rem",
      color: theme.cores.preto,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "2.5rem",
      margin: "0 auto",
      minWidth: "5rem",
    },
  };

  return variants[variant] || variants.default;
};

export const StyledDiv = styled.div`
  display: ${(props) => getDivStyles(props.theme, props.$variant).display};
  flex-direction: ${(props) =>
    getDivStyles(props.theme, props.$variant).flexDirection};
  align-items: ${(props) =>
    getDivStyles(props.theme, props.$variant).alignItems};
  justify-content: ${(props) =>
    getDivStyles(props.theme, props.$variant).justifyContent};
  padding: ${(props) => getDivStyles(props.theme, props.$variant).padding};
  border-radius: ${(props) => getDivStyles(props.theme, props.$variant).borderRadius};
  margin: ${(props) => getDivStyles(props.theme, props.$variant).margin};
  min-width: ${(props) => getDivStyles(props.theme, props.$variant).minWidth};
  background-color: ${(props) =>
    getDivStyles(props.theme, props.$variant).backgroundColor};
  color: ${(props) => getDivStyles(props.theme, props.$variant).color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const StyledH1 = styled.h1`
  font-size: 2.4rem;
  width: 90%;
  font-weight: 600;
  margin-bottom: 2.5rem;
`;

export const StyledH3 = styled.h3`
  width: 90%;
  display: flex;  
  justify-content: center;
  margin: 2rem;
  font-weight: 600;
  font-size: 1.6rem;
`;
