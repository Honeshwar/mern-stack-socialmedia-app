import { useState, useEffect, createContext, useContext } from "react";

//create context
const context = createContext();

// custom Provider component create
export default function UserContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userInLocalStorage = JSON.parse(localStorage.getItem("user"));
    if (userInLocalStorage) {
      setUser(userInLocalStorage);
      setIsAuthenticated(true);
    }
  }, []);
  useEffect(() => {
    console.log("isAuthenticated", isAuthenticated);
    console.log("user", user);
    if (isAuthenticated) {
      localStorage.setItem("user", JSON.stringify(user));
    } else if (user && !isAuthenticated) {
      localStorage.removeItem("user");
    }
  }, [isAuthenticated, user]);

  return (
    <context.Provider
      value={{ isAuthenticated, user, setUser, setIsAuthenticated }}
    >
      {children}
    </context.Provider>
  );
}

//get context
export const useUserContextValue = () => {
  return useContext(context);
};
