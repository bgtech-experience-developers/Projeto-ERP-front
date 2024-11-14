import React from "react";
import * as S from "./style";
import { Title } from "../../Texts/Title";

export const Form = ({ variant = "primary", children, title }) => {
  return (
    <S._Form $variant={variant}>
      <Title variant="small" bold="600">
        {title}
      </Title>
      {children}
    </S._Form>
  );
};
