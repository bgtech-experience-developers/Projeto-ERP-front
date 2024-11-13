import * as S from "./style.jsx";

export const Button = ({ width, children, variant = "disabled", ...props }) => {
  return (
    <S.Button width={width} $variant={variant} {...props}>
      {children}
      Botão
    </S.Button>
  );
};
