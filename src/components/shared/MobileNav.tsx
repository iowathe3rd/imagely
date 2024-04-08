"use client";

import { Bars3Icon } from "@/assets/icons/Bars3Icon";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/data";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="header px-2">
      <Link href="/" className="flex items-center bg-base-100 gap-2">
        <Image src="/logo-text.png" alt="logo" width={180} height={28} />
      </Link>

      <nav className="flex gap-2 items-center">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />

          <Sheet>
            <SheetTrigger>
              <Bars3Icon height={"40px"} />
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
                            {<link.icon />} {link.label}
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
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
