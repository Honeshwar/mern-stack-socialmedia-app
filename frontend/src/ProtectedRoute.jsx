import { useNavigate } from "react-router-dom";
import { useUserContextValue } from "./context/userContext";

export default function ProtectedRoute({
  children,
  isProtectionRequired = true,
}) {
  const navigate = useNavigate();
  const { isAuthenticated } = useUserContextValue();

  if (isProtectionRequired && !isAuthenticated) {
    //user access home page but use is not loginin/have no session
    return navigate("/signin");
  } else if (!isProtectionRequired && isAuthenticated) {
    //user access login page but use is loginin already
    return navigate("/");
  }
  return children;
}
