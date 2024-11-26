import { useNavigate } from "react-router-dom";
import { Logo } from "../LogoSidebar";
import ImgLogo from "../../assets/logo.svg";
import { Navbar } from "../Navbar";
import DobleArrow from "../../../public/RoundDobleArrow";
import { StyledSidebar } from "./style";
import React from "react";

export const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = React.useState(false);

  const logout = () => {
    navigate("/");
  };

  function showSidebar() {
    setIsActive(!isActive);
  }

  return (
    <>
      <StyledSidebar className={isActive && "ativo"}>
        <Logo img={ImgLogo} alt="Imagem logo da empresa AFK" />
        <DobleArrow onClick={showSidebar} />
        <Navbar />
      </StyledSidebar>
    </>
  );
};
