import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthContext } from "../contexts/AuthContext";

// import UserLogin from "../screens/Login";

// Estruturas
import { Sidebar } from "../components/Sidebar";
import { Content, InnerContent, Layout } from "../components/Sidebar/style";
import { SidebarContext } from "../contexts/SidebarContext";

// Dashboards
import { ClientDashboard } from "../screens/Dashboards/client";
import { Dashboard } from "../screens/Dashboard";
// Updates
import { UpdateClients } from "../screens/UpdateClients";

// Registers
import {
    RegisterSupplierPF,
    RegisterSupplierPJ,
} from "../screens/Registers/suppliers";
import { RegisterClients } from "../screens/Registers/clients";

// Tables
import { ClientTable } from "../screens/Tables/clients";
import { PfSupplierTable, PjSupplierTable } from "../screens/Tables/supplier";

// Outros
// import { AuthProvider } from "../contexts/AuthContext";
import { CreateSucess, UpdateSucess } from "../screens/RegisterSucess";

export const PrivateRoutes = () => {
    const { isAuth } = React.useContext(AuthContext);

     const { isActive, isHover } = React.useContext(SidebarContext);

    return ( 
        <Routes>
            {isAuth ? (
                <>
                    <Route
                        path="/*"
                        element={

                            <Layout $isSidebarClosed={isActive}>
                                <Sidebar />

                                <Content className={`${isHover && "open-hover"}`}>
                                    <InnerContent>
                                        <Routes>
                                            {/* Falta criar o component de dashboard, deixei o h1 só para testar */}
                                            <Route
                                          path="/dashboard"
                                          element={<Dashboard/>}
                                        />
                                            <Route
                                                path="home"
                                                element={<h1 style={{ fontSize: "2rem" }}>Home</h1>}
                                            />
                                            <Route
                                                path="cadastrar/cliente"
                                                element={<ClientTable />}
                                            />
                                            <Route
                                                path="cadastrar/cliente/novo"
                                                element={<RegisterClients />}
                                            />

                                            {/* teste dashboard atualizado ranyer */}
                                            <Route
                                                path="cadastrar/cliente/visualizar"
                                                element={<ClientDashboard />}
                                            />
                                            <Route
                                                path="cadastrar/cliente/editar"
                                                element={<UpdateClients />}
                                            />
                                            <Route
                                                path="cadastrar/cliente/novo/sucesso"
                                                element={<CreateSucess />}
                                            />
                                            <Route
                                                path="cadastrar/cliente/editar/sucesso"
                                                element={<UpdateSucess />}
                                            />

                                            <Route
                                                path="cadastrar/fornecedor/pessoa/juridica"
                                                element={<PjSupplierTable />}
                                            />
                                            <Route
                                                path="cadastrar/fornecedor/pessoa/juridica/novo"
                                                element={<RegisterSupplierPJ />}
                                            />
                                            <Route
                                                path="cadastrar/fornecedor/pessoa/juridica/visualizar"
                                                element={
                                                    <h1 style={{ fontSize: "2rem" }}>
                                                        Aqui é o dashboard do fornecedor!
                                                    </h1>
                                                }
                                            />
                                            <Route
                                                path="cadastrar/fornecedor/pessoa/juridica/editar"
                                                element={<RegisterSupplierPJ />}
                                            />

                                            <Route
                                                path="cadastrar/fornecedor/pessoa/fisica"
                                                element={<PfSupplierTable />}
                                            />
                                            <Route
                                                path="cadastrar/fornecedor/pessoa/fisica/novo"
                                                element={<RegisterSupplierPF />}
                                            />
                                            <Route
                                                path="cadastrar/fornecedor/pessoa/fisica/visualizar"
                                                element={
                                                    <h1 style={{ fontSize: "2rem" }}>
                                                        Aqui é o dashboard do fornecedor!
                                                    </h1>
                                                }
                                            />
                                            <Route
                                                path="cadastrar/fornecedor/pessoa/fisica/editar"
                                                element={<RegisterSupplierPF />}
                                            />

                                            <Route
                                                path="cadastrar/produtos"
                                                element={
                                                    <h1 style={{ fontSize: "2rem" }}>
                                                        {" "}
                                                        Aqui é a aba de cadastro de produtos!
                                                    </h1>
                                                }
                                            />
                                            <Route
                                                path="servico/venda"
                                                element={
                                                    <h1 style={{ fontSize: "2rem" }}>
                                                        {" "}
                                                        Aqui é a aba de venda de produtos!
                                                    </h1>
                                                }
                                            />
                                            <Route
                                                path="servico/alocacao"
                                                element={
                                                    <h1 style={{ fontSize: "2rem" }}>
                                                        {" "}
                                                        Aqui é a aba de alocação de produtos!
                                                    </h1>
                                                }
                                            />
                                        </Routes>
                                    </InnerContent>
                                </Content>
                            </Layout>
                        }
                    />
                        <Route path="/" element={<Navigate to="/home" />} />
                </>
            ) : (
                <Navigate to="/login" />
            )
            }
        </Routes>

    )
}
