import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./app.routes";

export default function RouterProvider() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
