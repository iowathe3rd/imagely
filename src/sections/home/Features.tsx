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

export const features = [
  {
    title: "Image Restore",
    description:
      "Restore old or damaged images with our advanced image restoration feature.",
    route: "/transformations/add/restore",
    icon: Photo,
  },
  {
    title: "Generative Fill",
    description:
      "Automatically fill in missing parts of images using generative algorithms.",
    route: "/transformations/add/fill",
    icon: Sparkles,
  },
  {
    title: "Object Remove",
    description:
      "Effortlessly remove unwanted objects from your images with our object removal tool.",
    route: "/transformations/add/remove",
    icon: BackSpace,
  },
  {
    title: "Object Recolor",
    description:
      "Change the color of objects in your images with our easy-to-use recoloring feature.",
    route: "/transformations/add/recolor",
    icon: AdjustmentsHorizontal,
  },
  {
    title: "Background Remove",
    description:
      "Quickly remove backgrounds from images to isolate objects or people.",
    route: "/transformations/add/removeBackground",
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
}: {
  title: string;
  description: string;
  icon: (props?: any) => JSX.Element;
}) {
  return (
    <div>
      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
        {icon()}
      </div>
      <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
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
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {features.map((feature, index) => (
            <FeatureBlock
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
