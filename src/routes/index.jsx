import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Forms } from "../components/Forms";
import { RegisterClient } from "../screens/RegisterClient";
import { RegisterSupplier } from "../screens/RegisterSupplier";
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/form" element={<Forms />} />
      <Route path="/register-client" element={<RegisterClient />} />
      <Route path="/register-supplier" element={<RegisterSupplier />} />

      </Routes>
    </BrowserRouter>
  );
};
