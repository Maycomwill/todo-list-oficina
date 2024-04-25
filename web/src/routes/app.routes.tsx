import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

export default function AppRoutes() {
  const auth = true;
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={auth ? <Home /> : <Login />} />
    </Routes>
  );
}
