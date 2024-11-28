import React from "react";

export const SidebarContext = React.createContext();

export const SidebarProvider = ({ children }) => {
  const [isActive, setIsActive] = React.useState(false);
  const [isHover, setIsHover] = React.useState(false);

  return (
    <SidebarContext.Provider
      value={{ isActive, setIsActive, isHover, setIsHover }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

// Sim eu criei um contexto para o sidebar
