import { AxiosError } from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../lib/axios";

export interface AuthContextProps {
  login: (email: string, password: string) => void;
  logout: () => void;
  auth: boolean;
  isLoading: boolean;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const token = window.localStorage.getItem("oficina-token");
    if (token !== null) {
      verifyToken(token);
    }
    return;
  }, []);
  const [auth, setAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  async function login(email: string, password: string) {
    try {
      setIsLoading(true);
      const login = await api.post("/auth/login", {
        email,
        password,
      });
      window.localStorage.setItem("oficina-token", login.data.data.token);
      window.localStorage.setItem("oficina-id", login.data.data.id);

      return setTimeout(() => {
        setAuth(true);
        setIsLoading(false), 5000;
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        return alert(error.message);
      }
    }
  }

  async function verifyToken(token: string) {
    try {
      const verify = await api.post("/auth/verify", {
        token,
      });
      console.log(verify);
      if (verify.data.data) {
        setAuth(true);
        return alert("Login autorizado");
      }
      window.localStorage.removeItem("oficina-token");
      window.localStorage.removeItem("oficina-id");
      setAuth(false);
    } catch (error) {
      if (error instanceof AxiosError) {
        window.localStorage.removeItem("oficina-token");
        window.localStorage.removeItem("oficina-id");
        return alert(error.message);
      }
    }
  }

  function logout() {
    window.localStorage.removeItem("oficina-token");
    setAuth(false);
    return;
  }

  return (
    <AuthContext.Provider value={{ login, logout, auth, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
