import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { RegisterClients } from '../screens/RegisterClients';
import {
  RegisterSupplierPF,
  RegisterSupplierPJ,
} from '../screens/RegisterSuppliers';
import { Accordion } from '../components/Accordion';
import UserLogin from '../screens/Login';
import { Sidebar } from '../components/Sidebar';
import { ViewTableClients } from '../screens/ViewClient';
import { ViewTableSupplier } from '../screens/ViewSupplier';
import { Content, Layout } from '../components/Sidebar/style';

import { Teste } from '../components/Forms/example/Teste';

export const AppRoutes = () => {
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
            <Layout>
              <Sidebar />
              <Content>
                <Routes>
                  {/* Falta criar o component de dashboard, deixei o h1 só para testar */}
                  <Route
                    path="home"
                    element={
                      <h1 style={{ fontSize: '2rem' }}> Aqui é o Dashboard!</h1>
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
                    path="cadastrar/fornecedor/pessoa/fisica"
                    element={<ViewTableSupplier />}
                  />
                  <Route
                    path="cadastrar/fornecedor/pessoa/juridica"
                    element={<ViewTableSupplier />}
                  />
                  <Route
                    path="cadastrar/produtos"
                    element={
                      <h1 style={{ fontSize: '2rem' }}>
                        {' '}
                        Aqui é a aba de cadastro de produtos!
                      </h1>
                    }
                  />
                  <Route
                    path="servico/venda"
                    element={
                      <h1 style={{ fontSize: '2rem' }}>
                        {' '}
                        Aqui é a aba de venda de produtos!
                      </h1>
                    }
                  />
                  <Route
                    path="servico/alocacao"
                    element={
                      <h1 style={{ fontSize: '2rem' }}>
                        {' '}
                        Aqui é a aba de alocação de produtos!
                      </h1>
                    }
                  />
                  <Route path="*" element={<Navigate to="/home" />} />
                </Routes>
              </Content>
            </Layout>
          }
        />

        <Route path="/cadastrar/clientes" element={<RegisterClients />} />
        <Route
          path="/cadastrar/fornecedor/pf"
          element={<RegisterSupplierPF />}
        />
        <Route
          path="/cadastrar/fornecedor/pj"
          element={<RegisterSupplierPJ />}
        />

        <Route path="/teste" element={<Teste />} />
      </Routes>
    </BrowserRouter>
  );
};
