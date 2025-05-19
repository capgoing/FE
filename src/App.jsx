import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./styles/common/globalStyles";
import router from "./routes/router";
import { useEditMode } from "./contexts/editModeContext";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/common/theme";
import { TTSProvider } from "./contexts/TTSContext";

function App() {
  const { isEditMode, setIsEditMode } = useEditMode();
  const theme = isEditMode ? darkTheme : lightTheme;

  useEffect(() => {
    const checkAndUpdateEditMode = () => {
      const path = window.location.pathname;
      const isGraphPage = path.startsWith("/graph");
      if (!isGraphPage) {
        localStorage.setItem("editMode", "false");
        setIsEditMode(false);
      }
    };

    checkAndUpdateEditMode();

    const patchHistory = (method) => {
      const original = history[method];
      return function (...args) {
        const result = original.apply(this, args);
        window.dispatchEvent(new Event("locationchange"));
        return result;
      };
    };
    history.pushState = patchHistory("pushState");
    history.replaceState = patchHistory("replaceState");

    window.addEventListener("popstate", checkAndUpdateEditMode);
    window.addEventListener("locationchange", checkAndUpdateEditMode);

    return () => {
      window.removeEventListener("popstate", checkAndUpdateEditMode);
      window.removeEventListener("locationchange", checkAndUpdateEditMode);
    };
  }, [setIsEditMode]);

  return (
    <TTSProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </TTSProvider>
  );
}

export default App;
