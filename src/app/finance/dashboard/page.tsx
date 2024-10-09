import { Metadata } from "next";
import SidebarComponent from "../component/sidebar";
import { RxHamburgerMenu } from "react-icons/rx";
import Navbar from "../component/navbar";

export function generateMetadata(): Metadata {
  return {
    title: "PlannerPro | Finance Planner",
  };
}

export default function DashboardFinancePage() {
  return (
    <div className="flex my-5 py-5 px-4 gap-4">
      <div className="flex-col flex-1">
        <div className="bg-gray-500 rounded-2xl shadow-md h-[300px] p-4">
          1A
        </div>
        <div className="mt-4 bg-gray-500 rounded-2xl h-[370px] p-4">1B</div>
      </div>

      <div className="flex-col flex-1">
        <div className="bg-gray-500 rounded-2xl shadow-md h-[300px] p-4">
          2A
        </div>
        <div className="mt-4 bg-gray-500 rounded-2xl h-[370px] p-4">2B</div>
      </div>
    </div>
  );
}
