import { StyledNavbar } from "./style";
import { NavItem } from "./NavItem";
import { OptionContainer, SubOptionContainer, Options, SubOptions, OptionText } from "./NavItem/style";
import { useState } from "react";
import Dashboard from "../../assets/dashboard.svg"
import Register from "../../assets/register.svg"
import Service from "../../assets/services.svg"
import Client from "../../assets/client.svg"
import Cart from "../../assets/cart.svg"
import DropDown from "../../assets/arrow.svg"

const navItems = [
    {
        id: "Dashboard",
        img: Dashboard,
        span: "Dashboard",
        options: [],
    },
    {
        id: "Cadastro",
        img: Register,
        span: "Cadastro",
        arrowImg: DropDown,
        options: [
            {
                id: "Cliente",
                img: Client,
                label: "Cliente"
            },
            {
                id: "Fornecedor",
                img: Service,
                label: "Fornecedor",
                subOptions: [
                    {
                        id: "Pessoa Física",
                        img: Client,
                        label: "Pessoa Física"
                    },
                    {
                        id: "Pessoa Jurídica",
                        img: Client,
                        label: "Pessoa Jurídica"
                    },
                ]
            },
            {
                id: "Produtos",
                img: Cart,
                label: "Produtos",
            },
        ],
    },
    {
        id: "Serviço",
        img: Service,
        span: "Serviço",
        arrowImg: DropDown,
        options: [
            {
                id: "Venda",
                img: Cart,
                label: "Venda",
            },
            {
                id: "Alocação",
                img: Cart,
                label: "Alocação"
            },
        ],
    },
];

export const Navbar = () => {

    const [navState, setNavState] = useState({
        ativo: '', // Controla o item principal ativo
        optionAtivo: '', // Controla a sub-opção ativa
    });

    const openItem = (item) => {
        setNavState((prev) => ({
            ativo: prev.ativo === item ? '' : item,
            optionAtivo: '', // Vai resetar sub-opções ao abrir outro item
        }));
    };

    const openOption = (option) => {
        setNavState((prev) => ({
            ...prev,
            optionAtivo: prev.optionAtivo === option ? '' : option,
        }));
    };

    return (
          <StyledNavbar>
            {navItems.map((item) => (
                <OptionContainer key={item.id}>
                    {/* NavItem são os itens principais do sidebar */}
                    <NavItem
                        img={item.img}
                        span={item.span}
                        ativo={navState.ativo === item.id}
                        onClick={() => openItem(item.id)}
                        arrowImg={item.arrowImg}
                    />

                    {/* Vai renderizar caso o item pricipal tenha opções */}
                    {navState.ativo === item.id && item.options.length > 0 && (
                        <Options>
                            {item.options.map((option) => (
                                <OptionContainer key={option.id}>
                                    <OptionText
                                        onClick={() => openOption(option.id)}
                                        ativo={navState.optionAtivo === option.id}
                                    >
                                        <img src={option.img} alt={`Ícone representando a aba ${option.label}`} />
                                        {option.label}
                                    </OptionText>

                                    {/* Vai renderizar caso as opções possuam sub-opções */}
                                    {navState.optionAtivo === option.id && option.subOptions && (
                                        <SubOptions>
                                            {option.subOptions.map((subOption) => (
                                                <OptionText key={subOption.id}>
                                                    <img src={subOption.img} alt={`Ícone representando a aba ${subOption.label}`} />
                                                    {subOption.label}
                                                </OptionText>
                                            ))}
                                        </SubOptions>
                                    )}
                                </OptionContainer>
                            ))}
                        </Options>
                    )}
                </OptionContainer>
            ))}
        </StyledNavbar>
    )
};
