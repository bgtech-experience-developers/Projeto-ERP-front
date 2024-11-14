import React from "react";
import * as S from "./style";
export const Text = ({ bold, children, variant = "medium", color, style }) => {
  return (
    <S._Text $variant={variant} $bold={bold} $color={color} style={style}>
      {children}
    </S._Text>
  );
};
