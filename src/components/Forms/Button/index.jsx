// Importa todos os arquivos de style.jsx com um alias "S"
import * as S from "./style.jsx";

export const Button = ({
  width,
  children,
  variant = "primary",
  disabled = false,
  ...props
}) => {
  return (
    <S._Button width={width} $variant={variant} disabled={disabled} {...props}>
      {children}
    </S._Button>
  );
};
