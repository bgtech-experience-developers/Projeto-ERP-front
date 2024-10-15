import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Forms } from "../components/Forms";
import { Accordion } from "../components/Accordion"; 

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/form" element={<Forms />} />
        <Route path="/aside" element={<Accordion />} />
      </Routes>
    </BrowserRouter>
  );
};
