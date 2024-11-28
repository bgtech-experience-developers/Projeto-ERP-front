import { useNavigate } from "react-router-dom";
import { Logo } from "../LogoSidebar";
import ImgLogo from "../../assets/logo.svg";
import { Navbar } from "../Navbar";
import DobleArrow from "../../../public/RoundDobleArrow";
import { ArrowContainer, StyledSidebar, StyledSidebarContainer } from "./style";
import React from "react";
import { Burger } from "../Burger";
import { SidebarContext } from "../../contexts/SidebarContext";

export const Sidebar = () => {
  const navigate = useNavigate();
  const { isActive, setIsActive, isHover, setIsHover } =
    React.useContext(SidebarContext);

  const logout = () => {
    navigate("/");
  };

  return (
    <>
      <Burger
        onClick={() => {
          setIsActive(false);
          setIsHover(false);
        }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      />

      <StyledSidebarContainer className={`${isActive && "closed"} `}>
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
    </>
  );
};
