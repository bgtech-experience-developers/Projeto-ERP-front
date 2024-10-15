import { StyledDiv, StyledH1, StyledH3 } from "./style.jsx";

export const Card = ({ children, title, width, height, desc = false, variant }) => {
  return (
    <>
      <StyledDiv $variant={variant} width={width} height={height}>
        <StyledH1>{title}</StyledH1>
        {desc ? <StyledH3>{desc}</StyledH3> : null}
        {children}
      </StyledDiv>
    </>
  );
};
