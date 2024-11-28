import { useNavigate } from "react-router-dom";
import { Logo } from "../LogoSidebar";
import ImgLogo from "../../assets/logo.svg";
import { Navbar } from "../Navbar";
import DobleArrow from "../../../public/RoundDobleArrow";
import {
  ArrowContainer,
  StyledResponsiveSidebar,
  StyledSidebar,
  StyledSidebarContainer,
} from "./style";
import React from "react";
import { Burger } from "../Burger";
import { SidebarContext } from "../../contexts/SidebarContext";
import { theme } from "../../theme/theme";

// Não está perfeito porém foi o que saiu, boa sorte
export const Sidebar = () => {
  const navigate = useNavigate();
  const { isActive, setIsActive, isHover, setIsHover } =
    React.useContext(SidebarContext);

  const logout = () => {
    navigate("/");
  };

  function openSidebar(e) {
    if (window.innerWidth <= parseInt(theme.media.md)) {
      setIsHover(!isHover);
    } else {
      setIsActive(false);
      setIsHover(false);
    }
  }

  //Aqui os valores estão "invertidos", a sidebar está aparecendo quando o estado isActive for false

  return (
    <>
      <Burger
        variant="nav-burger"
        onClick={openSidebar}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      />
      <StyledSidebarContainer className={`${isActive && "closed"}`}>
        <StyledSidebar
          className={`${isHover && "open-hover"}  ${isActive && "transform"}`}
          onMouseEnter={isActive ? () => setIsHover(true) : () => {}}
          onMouseLeave={() => setIsHover(false)}
        >
          <Logo img={ImgLogo} alt="Imagem logo da empresa AFK" />
          <Navbar />
        </StyledSidebar>
        <ArrowContainer>
          <DobleArrow onClick={() => setIsActive(true)} />
        </ArrowContainer>
      </StyledSidebarContainer>

      {/* Sidebar responsiva */}
      <StyledResponsiveSidebar
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={isHover && "open-hover"}
      >
        <Logo img={ImgLogo} alt="Imagem logo da empresa AFK" />
        <Navbar />
      </StyledResponsiveSidebar>
    </>
  );
};
