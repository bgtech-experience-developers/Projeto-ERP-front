import styled from "styled-components";

const getButtonStyles = (theme, variant) => {
  const variants = {
    default: {
      border: "none",
      backgroundColor: theme.cores.azul,
      borderRadius: `4px`,
      color: theme.cores.primary,
      width: "100%",
      heigth: "4.3rem",
      fontSize: "1.6rem",
      fontWeight: "600",
      hoverColor: theme.cores.marinho,
      hoverSpacing: "1px",
    },
  };

  return variants[variant] || variants.default;
};
export const StyledButton = styled.button`
  border: ${(props) => getButtonStyles(props.theme, props.$variant).border};
  background-color: ${(props) => getButtonStyles(props.theme, props.$variant).backgroundColor};
  border-radius: ${(props) => getButtonStyles(props.theme, props.$variant).borderRadius};
  color: ${(props) => getButtonStyles(props.theme, props.$variant).color};
  height: ${(props) => getButtonStyles(props.theme, props.$variant).heigth};
  font-size: ${(props) => getButtonStyles(props.theme, props.$variant).fontSize};
  font-weight: ${(props) => getButtonStyles(props.theme, props.$variant).fontWeight};
  width: ${(props) => props.width || getButtonStyles(props.theme, props.$variant).width};
  transition-duration: 0.5s;

  &:hover {
    background-color: ${(props) =>
    props.$hover
      ? getButtonStyles(props.theme, props.$variant).hoverColor
      : "inherit"};
    letter-spacing: ${(props) =>
    props.hover
      ? getButtonStyles(props.theme, props.$variant).hoverSpacing
      : "normal"};
  }
`;
