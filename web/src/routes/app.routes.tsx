import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import useAuth from "../hooks/useAuth";

export default function AppRoutes() {
  const { auth } = useAuth();
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={auth ? <Home /> : <Login />} />
    </Routes>
  );
}
