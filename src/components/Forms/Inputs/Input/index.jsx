import React from "react";
// Importa todos os arquivos de style.jsx com um alias "S"
import * as S from "./style";
import { Text } from "../../../Texts/Text";

export const Input = ({
  variant = "primary",
  placeholder,
  children,
  onChange,
  height,
  value,
  width,
  type = "text",
  id,
  ...props
}) => {
  return (
    <S.InputContainer $width={width}>
      <Text bold="600">
        <label htmlFor={id}>{children}</label>
      </Text>
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
    </S.InputContainer>
  );
};
