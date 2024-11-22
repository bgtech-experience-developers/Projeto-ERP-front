import { StyledNavbar } from "./style";
import { NavItem } from "./NavItem";
import { Options, SubOptions, OptionText } from "./NavItem/style";
import { useState } from "react";
import Dashboard from "../../assets/dashboard.svg"
import Register from "../../assets/register.svg"
import Service from "../../assets/services.svg"
import Client from "../../assets/client.svg"
import Cart from "../../assets/cart.svg"
import DropDown from "../../assets/arrow.svg"

export const Navbar = () => {
    const [ativo, setAtivo] = useState(''); //Controlador de qual NavItem tá aberto
    const [optionAtivo, setOptionAtivo] = useState(''); //Controlador de qual Option tá aberto

    const openItem = (item) => {
        //Vai alternar entre abrir e fechar o item
        setAtivo((prevAtivo) => (prevAtivo === item ? '' : item));
        setOptionAtivo('');
    };

    const openOption = (option) => {
        setOptionAtivo((prevOptionAtivo) => (prevOptionAtivo === option ? '' : option));
    };

    return (
        <StyledNavbar>
            <NavItem
                img={Dashboard}
                span={"Dashboard"}
                ativo={ativo === 'Dashboard'}
                onClick={() => openItem('Dashboard')}
            />

            <NavItem
                img={Register}
                span={"Cadastro"}
                ativo={ativo === 'Cadastro'}
                onClick={() => openItem('Cadastro')}
                arrowImg={DropDown}
            />
            {ativo === 'Cadastro' && (
                <Options>
                    <OptionText
                        onClick={() => openOption('Cliente')}
                        ativo={optionAtivo === 'Cliente'}>
                        <img src={Client} alt="Ícone representando a aba cliente" />
                        Cliente
                    </OptionText>

                    <OptionText
                        onClick={() => openOption('Fornecedor')}
                        ativo={optionAtivo === 'Fornecedor'}>
                        <img src={Service} alt="Ícone representando a aba cliente" />
                        Fornecedor
                    </OptionText>
                    {optionAtivo === 'Fornecedor' && (
                        <SubOptions>
                            <OptionText>
                                <img src={Client} alt="Ícone representando a aba pessoa física" />
                                Pessoa Física
                            </OptionText>
                            <OptionText>
                                <img src={Client} alt="Ícone representando a aba pessoa jurídica" />
                                Pessoa Jurídica
                            </OptionText>
                        </SubOptions>
                    )}
                    <OptionText
                        onClick={() => openOption('Produtos')}
                        ativo={optionAtivo === 'Produtos'}>
                        <img src={Cart} alt="Ícone representando a aba produtos" />
                        Produtos
                    </OptionText>
                </Options>
            )}

            <NavItem
                img={Service}
                span={"Serviço"}
                ativo={ativo === 'Serviço'}
                onClick={() => openItem('Serviço')}
                arrowImg={DropDown}
            />
            {ativo === 'Serviço' && (
                <Options>
                    <OptionText
                        onClick={() => openOption('Cliente')}
                        ativo={optionAtivo === 'Cliente'}>
                        <img src={Client} alt="Ícone representando a aba cliente" />
                        Cliente
                    </OptionText>
                    <OptionText
                        onClick={() => openOption('Fornecedor')}
                        ativo={optionAtivo === 'Fornecedor'}>
                        <img src={Service} alt="Ícone representando a aba cliente" />
                        Fornecedor
                    </OptionText>
                    {optionAtivo === 'Fornecedor' && (
                        <SubOptions>
                            <OptionText>
                                <img src={Client} alt="Ícone representando a aba cliente" />
                                Pessoa Física
                            </OptionText>
                            <OptionText>
                                <img src={Client} alt="Ícone representando a aba cliente" />
                                Pessoa Jurídica
                            </OptionText>
                        </SubOptions>
                    )}
                    <OptionText
                        onClick={() => openOption('Produtos')}
                        ativo={optionAtivo === 'Produtos'}>
                        <img src={Cart} alt="Ícone representando a aba cliente" />
                        Produtos
                    </OptionText>
                </Options>
            )}
        </StyledNavbar>
    )
};
