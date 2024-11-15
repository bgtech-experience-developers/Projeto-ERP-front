import React from "react";
import { Title } from "../../Texts/Title/index";

import * as S from "./style";

export const Card = ({
  variant = "form-container",
  width,
  height,
  children,
  title,
}) => {
  return (
    <S._Card $variant={variant} $width={width} $height={height}>
      <Title variant="x-small" bold="600">
        {title}
      </Title>
      {children}
    </S._Card>
  );
};
