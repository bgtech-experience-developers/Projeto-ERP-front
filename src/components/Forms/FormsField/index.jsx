import * as S from "./style";

export const FormsField = ({ children, variant = "double", width, height }) => {
  return (
    <S._FormsField $variant={variant} $width={width} $height={height}>
      {children}
    </S._FormsField>
  );
};
