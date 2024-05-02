import { AxiosError } from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import api from "../lib/axios";
import { TaskProps } from "./task";
import { toast } from "sonner";

export interface UserProps {
  name: string;
  id: string;
  email: string;
  tasks: TaskProps[];
}

export interface AuthContextProps {
  login: (email: string, password: string) => void;
  logout: () => void;
  auth: boolean;
  user: UserProps | undefined;
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
  const [user, setUser] = useState<UserProps>();
  const [isLoading, setIsLoading] = useState(false);
  async function login(email: string, password: string) {
    try {
      setIsLoading(true);
      const login = await api.post("/auth/login", {
        email,
        password,
      });
      setUser(login.data.data.user);
      window.localStorage.setItem("oficina-token", login.data.data.token);
      window.localStorage.setItem("oficina-id", login.data.data.user.id);
      toast.success(login.data.message);
      return setTimeout(() => {
        setAuth(true);
        setIsLoading(false), 2000;
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        return toast.error(error.message);
      }
    }
  }

  async function verifyToken(token: string) {
    try {
      const verify = await api.post("/auth/verify", {
        token,
      });
      if (verify.data.data) {
        setUser(verify.data.data.user);
        setAuth(true);
        return;
      }
      window.localStorage.removeItem("oficina-token");
      window.localStorage.removeItem("oficina-id");
      setAuth(false);
    } catch (error) {
      if (error instanceof AxiosError) {
        window.localStorage.removeItem("oficina-token");
        window.localStorage.removeItem("oficina-id");
        return toast.error(error.message);
      }
    }
  }

  function logout() {
    window.localStorage.removeItem("oficina-token");
    setAuth(false);
    return;
  }

  return (
    <AuthContext.Provider value={{ login, logout, auth, user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
