import { useContext } from "react";
import { AuthContext } from "../context/auth-context";

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuthContext must be used inside AuthProvider");
  }

  return context;
};

export default useAuthContext;
