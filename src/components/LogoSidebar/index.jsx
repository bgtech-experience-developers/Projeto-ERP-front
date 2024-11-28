import { StyledIconLogo, StyledLogo } from "./style";
import { useNavigate } from "react-router-dom";

export const Logo = ({ img }) => {
  const navigate = useNavigate();

  const logoReload = () => {
    navigate("/home");
    window.location.reload();
  };

  return (
    <>
      <StyledLogo>
        <StyledIconLogo onClick={logoReload} src={img} />
      </StyledLogo>
    </>
  );
};
