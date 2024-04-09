type navLinks = Array<{
  label: string;
  route: string;
  icon: string;
}>;

export const navLinks: navLinks = [
  {
    label: "Home",
    route: "/dashboard/",
    icon: "/icons/home.svg",
  },
  {
    label: "Image Restore",
    route: "/dashboard/transformations/add/restore",
    icon: "/icons/adjustments-horizonal.svg",
  },
  {
    label: "Generative Fill",
    route: "/dashboard/transformations/add/fill",
    icon: "/icons/sparkles.svg",
  },
  {
    label: "Object Remove",
    route: "/dashboard/transformations/add/remove",
    icon: "/icons/backspace.svg",
  },
  {
    label: "Object Recolor",
    route: "/dashboard/transformations/add/recolor",
    icon: "/icons/photo.svg",
  },
  {
    label: "Background Remove",
    route: "/dashboard/transformations/add/removeBackground",
    icon: "/icons/backspace.svg",
  },
  {
    label: "Profile",
    route: "/dashboard/profile",
    icon: "/icons/user-circle.svg",
  },
  {
    label: "Buy Credits",
    route: "/dashboard/credits",
    icon: "/icons/shopping-bag.svg",
  },
];

type plans = Array<{
  _id: number;
  name: string;
  icon: string;
  price: number;
  credits: number;
  inclusions: {
    label: string;
    isIncluded: boolean;
  }[];
}>;
export const plans: plans = [
  {
    _id: 1,
    name: "Free",
    icon: "/assets/icons/free-plan.svg",
    price: 0,
    credits: 20,
    inclusions: [
      {
        label: "20 Free Credits",
        isIncluded: true,
      },
      {
        label: "Basic Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: false,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 2,
    name: "Pro Package",
    icon: "/assets/icons/free-plan.svg",
    price: 40,
    credits: 120,
    inclusions: [
      {
        label: "120 Credits",
        isIncluded: true,
      },
      {
        label: "Full Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: false,
      },
    ],
  },
  {
    _id: 3,
    name: "Premium Package",
    icon: "/assets/icons/free-plan.svg",
    price: 199,
    credits: 2000,
    inclusions: [
      {
        label: "2000 Credits",
        isIncluded: true,
      },
      {
        label: "Full Access to Services",
        isIncluded: true,
      },
      {
        label: "Priority Customer Support",
        isIncluded: true,
      },
      {
        label: "Priority Updates",
        isIncluded: true,
      },
    ],
  },
];

export const transformationTypes = {
  restore: {
    type: "restore",
    title: "Restore Image",
    subTitle: "Refine images by removing noise and imperfections",
    config: { restore: true },
    icon: "/icons/photo.svg",
  },
  removeBackground: {
    type: "removeBackground",
    title: "Background Remove",
    subTitle: "Removes the background of the image using AI",
    config: { removeBackground: true },
    icon: "/icons/camera.svg",
  },
  fill: {
    type: "fill",
    title: "Generative Fill",
    subTitle: "Enhance an image's dimensions using AI outpainting",
    config: { fillBackground: true },
    icon: "/icons/sparkles.svg",
  },
  remove: {
    type: "remove",
    title: "Object Remove",
    subTitle: "Identify and eliminate objects from images",
    config: {
      remove: { prompt: "", removeShadow: true, multiple: true },
    },
    icon: "/icons/backspace.svg",
  },
  recolor: {
    type: "recolor",
    title: "Object Recolor",
    subTitle: "Identify and recolor objects from the image",
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
    icon: "/icons/adjustments-horizontal.svg",
  },
};

export const aspectRatioOptions = {
  "1:1": {
    aspectRatio: "1:1",
    label: "Square (1:1)",
    width: 1000,
    height: 1000,
  },
  "3:4": {
    aspectRatio: "3:4",
    label: "Standard Portrait (3:4)",
    width: 1000,
    height: 1334,
  },
  "9:16": {
    aspectRatio: "9:16",
    label: "Phone Portrait (9:16)",
    width: 1000,
    height: 1778,
  },
};

export const defaultValues = {
  title: "",
  aspectRatio: "",
  color: "",
  prompt: "",
  publicId: "",
};

export const creditFee = -1;
