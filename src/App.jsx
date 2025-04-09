import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./styles/common/globalStyles";
import router from "./routes/router";
import { useEditMode } from "./contexts/editModeContext";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/common/theme";

function App() {
  const  { isEditMode } = useEditMode();
  const theme = isEditMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;