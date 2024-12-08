import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import UserLogin from "../screens/Login";
import { Sidebar } from "../components/Sidebar";
import { Content, InnerContent, Layout } from "../components/Sidebar/style";
import { SidebarContext } from "../contexts/SidebarContext";
import { ViewTableClients } from "../screens/ViewClient";
import { RegisterClients } from "../screens/RegisterClients";
import {
  ViewTableSupplierPF,
  ViewTableSupplierPJ,
} from '../screens/ViewSupplier';
import { DashboardClients } from '../screens/DashboardClients';

import {
  RegisterSupplierPF,
  RegisterSupplierPJ,
} from "../screens/RegisterSuppliers/index";
import { UpdateClients } from "../screens/UpdateClients";

export const AppRoutes = () => {
  const { isActive, isHover } = React.useContext(SidebarContext);
  return (
    /* o objeto future foi adicionado pois a dependência do router foi atualizada.
       Adicionar esse objeto com essas propriedades remove os avisos no console.
    */
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Routes>
        <Route path="/" element={<UserLogin />} />

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
                      path="home"
                      element={
                        <h1 style={{ fontSize: "2rem" }}>
                          {" "}
                          Aqui é o Dashboard!
                        </h1>
                      }
                    />
                    <Route
                      path="cadastrar/cliente"
                      element={<ViewTableClients />}
                    />
                    <Route
                      path="cadastrar/cliente/novo"
                      element={<RegisterClients />}
                    />                  
    
                    <Route 
                        path="cadastrar/cliente/dashboard" 
                        element={<DashboardClients />} 
                        
                      
                    />

                    <Route
                      path="cadastrar/fornecedor/pessoa/juridica"
                      element={<ViewTableSupplierPJ />}
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
                      element={<ViewTableSupplierPF />}
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
                    <Route path="*" element={<Navigate to="/home" />} />
                    <Route
                      path="cadastrar/fornecedor/pf"
                      element={<RegisterSupplierPF />}
                    />
                  </Routes>
                </InnerContent>
              </Content>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
