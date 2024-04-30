import { useContext } from "react";
import { AuthContext, AuthContextProps } from "../context/auth";

export default function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);

  return context;
}
