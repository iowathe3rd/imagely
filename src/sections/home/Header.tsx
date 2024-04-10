"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/data";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "Dashboard",
    to: "/dashboard",
  },
  {
    title: "Pricing",
    to: "/pricing",
  },
  {
    title: "Features",
    to: "#features",
  },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="header px-2">
      <Link href="/" className="flex items-center bg-base-100 gap-2">
        <Image src="/logo-text.png" alt="logo" width={180} height={28} />
      </Link>

      <div
        className="hidden justify-between items-center w-full lg:flex lg:w-auto"
        id="mobile-menu-2"
      >
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.to}
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <nav className="flex gap-2 items-center lg:hidden">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />

          <Sheet>
            <SheetTrigger>
              <Image
                src={"/icons/bars-3-icon.svg"}
                alt={"menu"}
                width={40}
                height={40}
              />
            </SheetTrigger>
            <SheetContent className="sm:w-64">
              <>
                <Image
                  src="/logo-text.png"
                  alt="logo"
                  width={152}
                  height={23}
                />

                <ul className="mt-8 flex w-full flex-col items-start gap-5">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname;

                    return (
                      <li key={link.route} className="w-full">
                        <Button
                          asChild
                          variant={isActive ? "default" : "secondary"}
                          className="w-full flex justify-start"
                        >
                          <Link
                            className="p-16-semibold flex size-full gap-4 p-4"
                            href={link.route}
                          >
                            <Image
                              src={link.icon}
                              alt={link.label}
                              width={20}
                              height={20}
                            />
                            {link.label}
                          </Link>
                        </Button>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>

      <nav className="hidden lg:flex gap-2 items-center">
        <SignedIn>
          <UserButton afterSignOutUrl="/" showName />
          <Button asChild>
            <Link href={"/dashboard"}>Dashboard</Link>
          </Button>
        </SignedIn>

        <SignedOut>
          <Button asChild variant={"outline"}>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button asChild variant={"default"}>
            <Link href="/sign-in">Sign up</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default Header;
