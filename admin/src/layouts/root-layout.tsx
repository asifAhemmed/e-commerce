import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { cn } from "@/lib/utils";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="h-screen flex bg-background">
      <Sidebar />
      <div
        className={cn(
          "flex flex-col bg-red-300 flex-1 max-w-[--breakpoint-2xl]"
        )}
      >
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
