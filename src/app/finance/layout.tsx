import { ReactNode } from "react";
import SidebarComponent from "./component/sidebar";
import Navbar from "./component/navbar";

export default function DashboardFinanceLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex flex-row sm:gap-15">
      <SidebarComponent />
      <div className="flex w-full flex-col p-4">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
