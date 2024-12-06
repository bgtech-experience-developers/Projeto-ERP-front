import React from "react";
// Importa todos os arquivos de style.jsx com um alias "S"
import * as S from "./style";
import { Text } from "../../../Texts/Text";

export const Input = ({
  variant = "primary",
  style,
  placeholder,
  children,
  self,
  className,
  onChange,
  height,
  value,
  width,
  type = "text",
  id,
  options = [],
  ...props
}) => {
  if (variant === "expandable-input")
    return (
      <S.ExpandableInputContainer className={className}>
        <S._Input placeholder={placeholder} onChange={onChange} value={value} />

        <S.ControlContainer>
          <S.SearchIconContainer>{children}</S.SearchIconContainer>
        </S.ControlContainer>
      </S.ExpandableInputContainer>
    );
  else
    return (
      <S.InputContainer $width={width} $self={self} className={className}>
        <Text bold="600">
          {children && (
            <label style={style} htmlFor={id}>
              {children}
            </label>
          )}
        </Text>
        {type === "select" ? (
          <S.Select
            $variant={variant}
            id={id}
            value={value}
            onChange={onChange}
            $height={height}
            {...props}
          >
            {options &&
              options.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </option>
              ))}
          </S.Select>
        ) : (
          <S._Input
            type={type}
            $variant={variant}
            onChange={onChange}
            id={id}
            value={value}
            placeholder={placeholder}
            $height={height}
            {...props}
          />
        )}
      </S.InputContainer>
    );
};
