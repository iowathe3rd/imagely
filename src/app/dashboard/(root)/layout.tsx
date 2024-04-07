import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";
import { Toaster } from "@/components/ui/toaster";
import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="flex min-h-screen w-full flex-col bg-background lg:flex-row">
      <Sidebar />
      <MobileNav />
      <div className="mt-16 flex-1 overflow-auto py-8 lg:mt-0 lg:max-h-screen lg:py-10">
        <div className="px-4 lg:px-6">{children}</div>
      </div>
      <Toaster />
    </main>
  );
};

export default Layout;
