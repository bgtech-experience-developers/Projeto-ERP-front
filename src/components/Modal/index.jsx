import React from "react";
import * as S from "./style";

import { Text } from "../Texts/Text";
// Externos
import { MdOutlineFilterList, MdOutlineFilterListOff } from "react-icons/md";

const filterModalItens = [
  {
    id: 1,
    icon: <MdOutlineFilterListOff />,
    text: "Limpar Filtros",
    value: "clear",
    query: "",
  },
  {
    id: 2,
    icon: <MdOutlineFilterList />,
    text: "Filtrar por ativos",
    value: "active",
    query: "true",
  },
  {
    id: 3,
    icon: <MdOutlineFilterList />,
    text: "Filtrar por Inativos",
    value: "inactive",
    query: "false",
  },
];

export const Modal = ({
  variant = "filter-modal",
  setFetchStatus,
  setSelectedItem,
  selectedItem,
}) => {
  const [isActive, setIsActive] = React.useState(false);
  const modal = React.useRef(null);

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (modal.current && !modal.current.contains(event.target)) {
        setIsActive(!isActive);
      }
    }

    if (isActive) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isActive]);

  const handleItemClick = (item) => {
    setSelectedItem(item.value);
    setFetchStatus(item.query);
    setIsActive(false);
  };

  if (variant === "filter-modal")
    return (
      <S._Modal $variant={variant} ref={modal}>
        <MdOutlineFilterList onClick={() => setIsActive(!isActive)} />

        <S.ModalArea className={isActive ? "active" : ""}>
          {filterModalItens.map((item) => (
            <S.ModalItens
              key={item.id}
              onClick={() => handleItemClick(item)}
              disabled={selectedItem === item.value}
              className={selectedItem === item.value ? "disabled" : ""}
            >
              {item.icon}
              <Text bold={"600"} variant="small">
                {" "}
                {item.text}
              </Text>
            </S.ModalItens>
          ))}
        </S.ModalArea>
      </S._Modal>
    );
};
