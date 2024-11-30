import React from "react";
// Importa todos os arquivos de style.jsx com um alias "S"
import * as S from "./style";
import { Text } from "../../../Texts/Text";

export const Input = ({
  variant = "primary",
  style,
  name,
  placeholder,
  children,
  onChange,
  height,
  value,
  width,
  type = "text",
  id,
  options = [],
  ...props
}) => {
  return (
    <S.InputContainer $width={width}>
      <Text bold="600">
        <label style={style} htmlFor={id}>
          {children}
        </label>
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
          name={name}
          {...props}
        />
      )}
    </S.InputContainer>
  );
};
