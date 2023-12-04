//create context
const context = createContext();

// custom Provider component create
export function AuthProvider({ children }) {
  const [signIn, setSignIn] = useState(false);
  const [register, setRegister] = useState(false);
  useEffect(() => {}, []);
  return <context.Provider value={0}>{children}</context.Provider>;
}
