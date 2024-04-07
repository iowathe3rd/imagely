import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      {children}
    </main>
  );
};

export default Layout;
