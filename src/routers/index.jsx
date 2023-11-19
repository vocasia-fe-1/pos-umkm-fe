import { Suspense } from "react";
import { createBrowserRouter, redirect, Outlet } from "react-router-dom";
import { lazily } from "react-lazily";
import { TokenService } from "@/libs";
import { ErrorBoundary } from "react-error-boundary";
import { LoadingSpinner, DashboardTemplate } from "@/components";

const { AuthLoginPage, AuthRegisterPage } = lazily(() => import("@/pages"));

export const routes = createBrowserRouter([
  {
    path: "/",
    loader: () =>
      !TokenService.getToken() ? redirect("/auth/login") : redirect("/dashboard/home"),
  },
  {
    path: "/dashboard",
    element: (
      <ErrorBoundary fallback={<div>Error</div>}>
        <Suspense fallback={<LoadingSpinner isFullscreen />}>
          <DashboardTemplate />
        </Suspense>
      </ErrorBoundary>
    ),
    errorElement: <div>Error</div>,
    children: [
      {
        path: "/dashboard/home",
        element: <div>Dashboard</div>,
      },
    ],
  },
  {
    path: "/auth",
    element: (
      <ErrorBoundary fallback={<div>Error</div>}>
        <Suspense fallback={<LoadingSpinner isFullscreen />}>
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
