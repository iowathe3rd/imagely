import {
  AdjustmentsHorizontal,
  BackSpace,
  Camera,
  Home,
  Photo,
  ShoppingBag,
  Sparkles,
  UserCircle,
} from "@/assets/icons";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const features = [
  {
    title: "Image Restore",
    description:
      "Restore old or damaged images with our advanced image restoration feature.",
    route: "/dashboard/transformations/add/restore",
    icon: Photo,
  },
  {
    title: "Generative Fill",
    description:
      "Automatically fill in missing parts of images using generative algorithms.",
    route: "/dashboard/transformations/add/fill",
    icon: Sparkles,
  },
  {
    title: "Object Remove",
    description:
      "Effortlessly remove unwanted objects from your images with our object removal tool.",
    route: "/dashboard/transformations/add/remove",
    icon: BackSpace,
  },
  {
    title: "Object Recolor",
    description:
      "Change the color of objects in your images with our easy-to-use recoloring feature.",
    route: "/dashboard/transformations/add/recolor",
    icon: AdjustmentsHorizontal,
  },
  {
    title: "Background Remove",
    description:
      "Quickly remove backgrounds from images to isolate objects or people.",
    route: "/dashboard/transformations/add/removeBackground",
    icon: Camera,
  },
  {
    title: "Buy Credits",
    description: "Purchase credits to access premium features and services.",
    route: "/credits",
    icon: ShoppingBag,
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
  icon: (props?: any) => JSX.Element;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="h-48 p-4 rounded-xl border-2 border-border shadow-xl hover:shadow-2xl transition-all">
        <div className="flex justify-center items-center w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900s">
          <Button variant={"ghost"}>{icon()}</Button>
        </div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
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
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
