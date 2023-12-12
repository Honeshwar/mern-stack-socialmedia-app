import { createContext, useContext, useEffect, useState } from "react";

// to create context
const context = createContext();

// provide context, custom comp created

export const DarkModeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(-1);
  // only once when mounted, first time load page
  useEffect(() => {
    const darkMode = JSON.parse(localStorage.getItem("darkMode"));
    if (isDarkMode === -1 && darkMode !== null) {
      //first load
      console.log("darkMode c1", darkMode);
      setIsDarkMode(JSON.parse(darkMode));
    }
    // /toggle dark mode
    else if (isDarkMode !== -1 && isDarkMode !== darkMode) {
      // app different local differ, local change
      console.log("darkMode c2", isDarkMode);
      localStorage.setItem("darkMode", isDarkMode);
    }
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
export const useDarkModeContextValue = () => {
  const value = useContext(context);
  return value;
};
