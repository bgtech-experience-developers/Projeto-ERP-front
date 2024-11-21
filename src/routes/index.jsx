import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegisterClients } from "../screens/RegisterClients";
import { RegisterSupplierPF, RegisterSupplierPJ } from "../screens/RegisterSuppliers";
// import { Accordion } from "../components/Accordion";
// import { RegisterClient } from "../screens/RegisterClient";
// import { RegisterSupplier } from "../screens/RegisterSupplier";
// import { RegisterEmployee } from "../screens/RegisterEmployee";
// import { RegisterSucess } from "../screens/RegisterSucess";

import { ViewTableClients } from "../screens/ViewClient";
import { ViewTableEmployee } from "../screens/ViewEmployee";
import { ViewTableSupplier } from "../screens/ViewSupplier";
import UserLogin from "../screens/Login";

export const AppRoutes = () => {
  return (
    /* o objeto future foi adicionado pois a dependência do router foi atualizada.
       Adicionar esse objeto com essas propriedades remove os avisos no console.
    */
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Routes>
        {/* <Route path="/aside" element={<Accordion />} /> */}
        {/* <Route path="/register-client" element={<RegisterClient />} /> */}
        {/* <Route path="/register-supplier" element={<RegisterSupplier />} /> */}
        {/* <Route path="/register-employee" element={<RegisterEmployee />} /> */}
        {/* <Route path="/register-sucess" element={<RegisterSucess />} /> */}
        {/* <Route path="/view-clients" element={<ViewTableClients />} /> */}

        <Route path="/view-employee" element={<ViewTableEmployee />} />

        <Route path="/view-supplier" element={<ViewTableSupplier />} />
        <Route path="/login" element={<UserLogin/>}/>
        <Route path="/view-supplier" element={<ViewTableSupplier />} /> 

        <Route path="/cadastrar/cliente" element={<RegisterClients />} /> 
        <Route path="/cadastrar/fornecedor/pf" element={<RegisterSupplierPF />} /> 
        <Route path="/cadastrar/fornecedor/pj" element={<RegisterSupplierPJ />} /> 
      </Routes>
    </BrowserRouter>
  );
};
