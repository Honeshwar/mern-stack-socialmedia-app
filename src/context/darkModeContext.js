import { createContext, useContext, useEffect, useState } from "react";

// to create context
const context = createContext();

// provide context, custom comp created

export const DarkModeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") || false,
  );
  useEffect(() => {
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const toogleIsDarkMode = () => {
    setIsDarkMode((pS) => !pS);
  };
  return (
    <context.Provider value={{ isDarkMode, toogleIsDarkMode }}>
      {children}
    </context.Provider>
  );
};

// consume context, cusyom hook
export const useContextValue = () => {
  const value = useContext(context);
  return value;
};
