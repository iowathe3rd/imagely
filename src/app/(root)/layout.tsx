import Header from "@/sections/home/Header";
import { PropsWithChildren } from "react";

const Layout = (props: PropsWithChildren) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Layout;
