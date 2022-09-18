import { createContext } from "react";
import { AuthContextState } from "./auth-context.types";

export const AuthContext = createContext<AuthContextState>(
  {} as AuthContextState
);
