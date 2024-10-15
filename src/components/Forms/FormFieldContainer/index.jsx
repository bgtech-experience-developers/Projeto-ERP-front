import { StyledFormField } from "./style.jsx";

export const FormFieldContainer = ({ children, variant = "input" }) => {
  return <StyledFormField $variant={variant}>{children}</StyledFormField>;
};
