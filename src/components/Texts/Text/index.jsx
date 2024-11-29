import React from "react";
import * as S from "./style";
export const Text = ({
  bold,
  children,
  variant = "medium",
  color,
  style,
  align,
}) => {
  return (
    <S._Text
      $variant={variant}
      $bold={bold}
      $color={color}
      style={style}
      $textAlign={align}
    >
      {children}
    </S._Text>
  );
};
