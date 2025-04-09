import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { EditModeProvider } from "./contexts/editModeContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EditModeProvider>
      <App />
    </EditModeProvider>
  </StrictMode>,
)
