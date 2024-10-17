import { StyledInput, StyledSelect } from "./style.jsx";

export const Input = ({ variant = "default", height, type = "text", options, ...props }) => {
  return (
    <>
      {type === "select" ? (
        <StyledSelect $variant={variant} height={height} {...props}>
          {options && options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
      ) : (
        <StyledInput $variant={variant} height={height} type={type} {...props} />
      )}
    </>
  );
};
