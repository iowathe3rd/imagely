"use client";

import { navLinks } from "@/data";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="hidden h-screen flex-col bg-background-300 justify-between w-72 p-5 lg:flex shadow-md">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image src={"/logo-text.png"} alt="logo" width={400} height={200} />
        </Link>

        <nav className="h-full flex-col justify-between md:flex md:gap-4">
          <SignedIn>
            <ul className="hidden w-full flex-col items-start gap-2 md:flex">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li key={link.route} className="w-full">
                    <Button
                      asChild
                      variant={isActive ? "default" : "ghost"}
                      className="w-full flex justify-start"
                    >
                      <Link
                        className="p-16-semibold flex size-full gap-4 p-4"
                        href={link.route}
                      >
                        {<link.icon />}
                        {link.label}
                      </Link>
                    </Button>
                  </li>
                );
              })}
            </ul>

            <ul className="hidden w-full flex-col items-start gap-2 md:flex">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li key={link.route} className="w-full">
                    <Button
                      asChild
                      variant={isActive ? "default" : "ghost"}
                      className="w-full flex justify-start"
                    >
                      <Link
                        className="p-16-semibold flex size-full gap-4 p-4"
                        href={link.route}
                      >
                        {<link.icon />}
                        {link.label}
                      </Link>
                    </Button>
                  </li>
                );
              })}

              <li className="flex items-center flex-row-reverse justify-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl="/" />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild>
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
