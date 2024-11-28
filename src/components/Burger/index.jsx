import React from "react";
import BurgerSidebar from "../../../public/BurgerSidebar";
import * as S from "./style";
import DoubleArrow from "../../../public/RoundDobleArrow";
import { SidebarContext } from "../../contexts/SidebarContext";

export const Burger = ({
  variant = "nav-burger",
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  const { isActive, isHover } = React.useContext(SidebarContext);

  return (
    <S._Burger
      $variant={variant}
      className={`${isActive && "active "} ${
        isHover ? "hover " : "hover-closed"
      } `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <BurgerSidebar onClick={onClick} />
      <DoubleArrow onClick={onClick} />
    </S._Burger>
  );
};
