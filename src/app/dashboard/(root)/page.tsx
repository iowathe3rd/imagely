import { Collection } from "@/components/shared/Collection";
import { navLinks } from "@/data";
import { getAllImages } from "@/lib/actions/image.actions";
import Link from "next/link";

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || "";

  const images = await getAllImages({ page, searchQuery });

  return (
    <>
      <section className="flex sm:items-center sm:justify-center h-72 flex-col gap-4 rounded-[20px] border bg-card bg-cover bg-no-repeat p-10 shadow-inner">
        <h1 className="text-[36px] font-semibold sm:text-[44px] leading-[120%] sm:leading-[56px] max-w-[500px] flex-wrap text-center ">
          Unleash Your Creativity with Imagely
        </h1>
        <ul className="flex items-center justify-center w-full gap-20">
          {navLinks.slice(1, 5).map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className="flex items-center justify-center flex-col gap-2"
            >
              <li className="flex items-center justify-center w-fit rounded-full bg-background p-4">
                {link.icon()}
              </li>
              <p className="font-medium text-[14px] leading-[120%] text-center">
                {link.label}
              </p>
            </Link>
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
