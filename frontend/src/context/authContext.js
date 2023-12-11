import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import request_API from "../api/customFetchAPI";
//create context
const context = createContext();

// custom Provider component create
export default function AuthProvider({ children }) {
  const [error, setError] = useState("");
  const [signIn, setSignIn] = useState(false);
  const [register, setRegister] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (signIn) {
      const findUser = async () => {
        const data = await request_API.auth.signin(signIn);
        console.log("signin data: ", data);
        if (!data.success) {
          setError(data.error);
          return;
        }
        setTimeout(() => {
          navigate("/");
        }, 2000);
      };
      findUser();
    } else if (register) {
      console.log(register);
      const registerUser = async () => {
        const Data = await request_API.auth.register(register);
        console.log("new user created", Data);
        if (Data.success) return navigate("/signin");
        setError(Data.error);
      };
      registerUser();
    }
  }, [signIn, register, navigate]);
  return (
    <context.Provider value={{ error, setSignIn, setRegister }}>
      {children}
    </context.Provider>
  );
}

//get context
export const useContextValue = () => {
  return useContext(context);
};
