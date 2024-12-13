// import { ThemeProvider } from "styled-components";
// import { theme } from "./theme/theme";
// import { AppRoutes } from "./routes";
// import { AuthProvider } from "./contexts/AuthContext";
// import { SidebarProvider } from "./contexts/SidebarContext";

// function App() {
//   return (
//     <>
//       <ThemeProvider theme={theme}>

//         <SidebarProvider>
//           <AppRoutes />
//         </SidebarProvider>
//       </ThemeProvider>
//     </>
//   );
// }

// export default App;

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

        <ThemeProvider theme={theme}>
            {isAuth ? <PrivateRoutes/> : <PublicRoutes/>}
        </ThemeProvider>

    </>
  );
}

export default App;

