import { Suspense } from "react";
import { createBrowserRouter, redirect, Outlet } from "react-router-dom";
import { lazily } from "react-lazily";
import { TokenService } from "@/libs";
import { ErrorBoundary } from "react-error-boundary";

const { AuthLoginPage, AuthRegisterPage } = lazily(() => import("@/pages"));

export const routes = createBrowserRouter([
  {
    path: "/",
    loader: () => (TokenService.getToken() ? redirect("/auth/login") : redirect("/dashboard")),
  },
  {
    path: "/auth",
    element: (
      <ErrorBoundary fallback={<div>Error</div>}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    ),
    errorElement: <div>Error</div>,
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
