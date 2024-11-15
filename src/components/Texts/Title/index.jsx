import React from "react";
import * as S from "./style";

export const Title = ({ bold, children, variant = "medium", color, style }) => {
  return (
    <S._Title $variant={variant} $bold={bold} $color={color} style={style}>
      {children}
    </S._Title>
  );
};
