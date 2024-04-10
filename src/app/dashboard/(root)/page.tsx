import { Collection } from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data";
import { getAllImages } from "@/lib/actions/image.actions";
import Image from "next/image";
import Link from "next/link";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard",
  description: "Imagely dashboard",
};

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || "";

  const images = await getAllImages({ page, searchQuery });

  return (
    <>
      <section className="flex sm:items-center sm:justify-center min-h-72 flex-col gap-4 rounded-[20px] border bg-card bg-cover bg-no-repeat p-10 shadow-inner">
        <h1 className="text-[36px] font-semibold sm:text-[44px] leading-[120%] sm:leading-[56px] max-w-[500px] flex-wrap text-center ">
          Unleash Your Creativity with Imagely
        </h1>
        <ul className="grid grid-cols-2 lg:grid-cols-4 w-full gap-0">
          {navLinks.slice(1, 5).map((link) => (
            <div
              className="flex flex-col items-center justify-center gap-2  hover:scale-125 transition-all"
              key={link.route}
            >
              <Button
                asChild
                variant={"outline"}
                className="rounded-full w-fit p-0 h-fit"
              >
                <Link
                  href={link.route}
                  className="flex items-center justify-center flex-col gap-2"
                >
                  <li className="flex items-center justify-center w-fit rounded-full bg-background p-4">
                    <Image
                      src={link.icon}
                      width={25}
                      alt={link.route}
                      height={25}
                    />
                  </li>
                </Link>
              </Button>

              <p className="font-medium text-[14px] leading-[120%] text-center hidden lg:flex">
                <Link
                  href={link.route}
                  className="flex items-center justify-center flex-col gap-2"
                >
                  {link.label}
                </Link>
              </p>
            </div>
          ))}
        </ul>
      </section>

      <section className="sm:mt-12">
        <Collection
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />
      </section>
    </>
  );
};

export default Home;
