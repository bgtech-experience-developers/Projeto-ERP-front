


import { AuthContext } from "./contexts/AuthContext";
import React from "react";
import { PrivateRoutes } from "./routes/private.routes";
import { PublicRoutes } from "./routes/public.routes";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "./theme/theme";


function App() {
  const { isAuth } = React.useContext(AuthContext)
  return (
    <>
<<<<<<< HEAD

        <ThemeProvider theme={theme}>
            {isAuth ? <PrivateRoutes/> : <PublicRoutes/>}
        </ThemeProvider>

=======
      <ThemeProvider theme={theme}>
        <SidebarProvider>
          <AppRoutes />
        </SidebarProvider>
      </ThemeProvider>
>>>>>>> a19dcdd3a6bb57f85bb0f000c5e4b4b61af440ff
    </>
  );
}

export default App;

