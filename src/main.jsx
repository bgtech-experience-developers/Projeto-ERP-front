import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { SidebarProvider } from "./contexts/SidebarContext";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter  future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <AuthProvider>
    <SidebarProvider>


           <App />
           
    </SidebarProvider>
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
