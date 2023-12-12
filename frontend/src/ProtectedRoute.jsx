import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContextValue } from "./context/authContext";

export default function ProtectedRoute({
  children,
  isProtectionRequired = true,
}) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthContextValue();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    if (isProtectionRequired && !isAuthenticated) {
      //user access home page but use is not loginin/have no session
      navigate("/signin");
    } else if (!isProtectionRequired && isAuthenticated) {
      //user access login page but use is loginin already
      navigate("/");
    }
    setLoading(false);
    //cleanup func reaturn
  }, [isProtectionRequired, isAuthenticated, navigate]);

  // loading benefit that after mouted and also after all checks i return or render children or App., see loading text not children
  return <>{loading ? "Loading..." : children}</>;
}
