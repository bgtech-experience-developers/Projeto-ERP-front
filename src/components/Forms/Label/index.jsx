import { StyledLabel } from "./style.jsx";

export const Label = ({ children, ...props }) => {
  return <StyledLabel {...props}>{children}</StyledLabel>;
};
