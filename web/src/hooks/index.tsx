import { ReactNode } from "react";
import { AuthContextProvider } from "../context/auth";
import { TaskContextProvider } from "../context/task";

export default function AppProvider({ children }: { children: ReactNode }) {
  return (
    <AuthContextProvider>
      <TaskContextProvider>{children}</TaskContextProvider>
    </AuthContextProvider>
  );
}
