import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const features = [
  {
    title: "Image Restore",
    description:
      "Restore old or damaged images with our advanced image restoration feature.",
    route: "/dashboard/transformations/add/restore",
    icon: "/icons/sparkles.svg",
  },
  {
    title: "Generative Fill",
    description:
      "Automatically fill in missing parts of images using generative algorithms.",
    route: "/dashboard/transformations/add/fill",
    icon: "/icons/sparkles.svg",
  },
  {
    title: "Object Remove",
    description:
      "Effortlessly remove unwanted objects from your images with our object removal tool.",
    route: "/dashboard/transformations/add/remove",
    icon: "/icons/sparkles.svg",
  },
  {
    title: "Object Recolor",
    description:
      "Change the color of objects in your images with our easy-to-use recoloring feature.",
    route: "/dashboard/transformations/add/recolor",
    icon: "/icons/sparkles.svg",
  },
  {
    title: "Background Remove",
    description:
      "Quickly remove backgrounds from images to isolate objects or people.",
    route: "/dashboard/transformations/add/removeBackground",
    icon: "/icons/sparkles.svg",
  },
  {
    title: "Buy Credits",
    description: "Purchase credits to access premium features and services.",
    route: "/credits",
    icon: "/icons/sparkles.svg",
  },
];
function FeatureBlock({
  title,
  description,
  icon,
  href,
}: {
  title: string;
  description: string;
  icon: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="h-48 p-4 rounded-lg border-2 border-border shadow-lg hover:shadow-2xl transition-all">
        <div className="flex items-center w-full dark:bg-primary-900s">
          <h3 className="text-xl font-bold">{title}</h3>
          <Button variant={"ghost"}>
            <Image src={icon} width={25} height={25} alt={title} />
          </Button>
        </div>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </Link>
  );
}

const Features = () => {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
            Our features is simple
          </h2>
          <p className="sm:text-xl">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <FeatureBlock
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              href={feature.route}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
