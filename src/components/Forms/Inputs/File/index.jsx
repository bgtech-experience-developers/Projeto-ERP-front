import React from 'react';
import BiSmile from '../../../../../public/BiSmile';
import * as S from './style';
import { Text } from '../../../Texts/Text';
import { theme } from '../../../../theme/theme';

export const File = ({
  variant = 'primary',
  text,
  smileSize = 52,
  onChange,
  image,
  error,
  value,
  id,
}) => {
  return (
    <S.FileContainer
      error={error}
      image={!image ? '' : URL.createObjectURL(image)}
      $variant={variant}
    >
      {!error ? (
        <S.CenterBlock image={image}>
          <BiSmile size={smileSize} />
          <Text bold="600" color={theme.colors.lightGray}>
            {text}
          </Text>
        </S.CenterBlock>
      ) : (
        <>
          <BiSmile size={smileSize} />
          <Text bold="600" color={theme.colors.delete}>
            Erro
          </Text>
        </>
      )}
      <S._File
        value={value ?? ''}
        accept="image/*"
        id={id}
        onChange={onChange}
      />

      <input
        value={value ?? ''}
        onChange={onChange}
        accept="image/*"
        type="file"
        style={{ display: 'none' }}
      />

      <S.Overlay image={image}>
        <BiSmile size={smileSize} />
        <Text bold="600" color={theme.colors.lightGray}>
          Trocar foto
        </Text>
      </S.Overlay>
    </S.FileContainer>
  );
};