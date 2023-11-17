import { createBrowserRouter, redirect, Outlet } from "react-router-dom";
import { AuthLoginPage, AuthRegisterPage } from "@/pages";
import { TokenService } from "@/libs";

export const routes = createBrowserRouter([
  {
    path: "/",
    loader: () => (TokenService.getToken() ? redirect("/auth/login") : redirect("/dashboard")),
  },
  {
    path: "/auth",
    element: <Outlet />,
    children: [
      {
        path: "/auth/login",
        element: <AuthLoginPage />,
      },
      {
        path: "/auth/register",
        element: <AuthRegisterPage />,
      },
    ],
  },
]);
