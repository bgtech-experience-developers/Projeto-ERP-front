import { StyledInput } from "./style.jsx";

export const Input = ({ variant = "default", heigth, ...props }) => {
  return <StyledInput $variant={variant} {...props} heigth={heigth} />;
};
