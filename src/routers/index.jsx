import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "@/pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
