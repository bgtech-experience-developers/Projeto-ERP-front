import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Forms } from "../components/Forms";
import { Accordion } from "../components/Accordion"; 
import { RegisterClient } from "../screens/RegisterClient";
import { RegisterSupplier } from "../screens/RegisterSupplier";
import { RegisterEmployee } from "../screens/RegisterEmployee";
import { RegisterSucess } from "../screens/RegisterSucess";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/aside" element={<Accordion />} />
      <Route path="/form" element={<Forms />} />
      <Route path="/register-client" element={<RegisterClient />} />
      <Route path="/register-supplier" element={<RegisterSupplier />} />
      <Route path="/register-employee" element={<RegisterEmployee />} />
      <Route path="/register-sucess" element={<RegisterSucess />} />
      </Routes>
    </BrowserRouter>
  );
};
