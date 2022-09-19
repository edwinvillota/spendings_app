import { createContext } from "react";
import { AuthContextReturnType } from "./auth-context.types";

export const AuthContext = createContext<AuthContextReturnType>(
  {} as AuthContextReturnType
);
