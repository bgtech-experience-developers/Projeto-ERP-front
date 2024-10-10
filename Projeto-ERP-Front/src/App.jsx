import { CardLogin } from "./componets/Cards/CardLogin";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

function App() {
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <CardLogin />
      </ThemeProvider>
    
    </>
  )
}

export default App
