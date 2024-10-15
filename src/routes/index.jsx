import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Forms } from "../components/Forms";
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/form" element={<Forms />} />
      </Routes>
    </BrowserRouter>
  );
};
