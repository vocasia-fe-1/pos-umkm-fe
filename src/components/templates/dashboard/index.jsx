import { Sidebar } from "@/components";
import { Outlet } from "react-router-dom";

export const DashboardTemplate = () => {
  return (
    <section className="flex">
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <Outlet />
      </div>
    </section>
  );
};
