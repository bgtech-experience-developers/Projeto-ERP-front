import React from 'react';
import * as S from './style';
import { Title } from '../../Texts/Title';

export const Form = ({
  variant = 'primary',
  children,
  title,
  width,
  onSubmit,
}) => {
  return (
    <S._Form onSubmit={onSubmit} $variant={variant} $width={width}>
      <Title variant="small" bold="600">
        {title}
      </Title>
      {children}
    </S._Form>
  );
};
