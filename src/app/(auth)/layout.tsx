import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return <main className="auth">{children}</main>;
};

export default Layout;
