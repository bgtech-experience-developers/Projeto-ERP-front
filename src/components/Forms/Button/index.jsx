import { StyledButton } from "./style";

export const Button = ({
  width,
  children,
  variant,
  hover = true,
  ...props
}) => {
  return (
    <StyledButton width={width} $variant={variant} {...props} $hover={hover}>
      {children}
    </StyledButton>
  );
};
