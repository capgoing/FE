import { createContext, useContext, useState, useEffect } from "react";

const EditModeContext = createContext();

export const EditModeProvider = ({ children }) => {
  const [isEditMode, setIsEditMode] = useState(() => {
    const stored = localStorage.getItem("editMode");
    return stored === null ? true : stored === "true";
  });

  useEffect(() => {
    localStorage.setItem("editMode", String(isEditMode));
  }, [isEditMode]);

  return (
    <EditModeContext.Provider value={{ isEditMode, setIsEditMode }}>
      {children}
    </EditModeContext.Provider>
  );
};

export const useEditMode = () => useContext(EditModeContext);
