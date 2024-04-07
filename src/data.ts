import {
  AdjustmentsHorizontal,
  ArrowDownOnSquareStackIcon,
  ArrowUpTray,
  BackSpace,
  Bars3Icon,
  Camera,
  Home,
  Photo,
  ShoppingBag,
  Sparkles,
  UserCircle,
} from "@/assets/icons";

type navLinks = Array<{
  label: string;
  route: string;
  icon: React.ReactSVG;
}>;

export const navLinks: navLinks = [
  {
    label: "Home",
    route: "/",
    icon: Home,
  },
  {
    label: "Image Restore",
    route: "/dashboard/transformations/add/restore",
    icon: Photo,
  },
  {
    label: "Generative Fill",
    route: "/dashboard/transformations/add/fill",
    icon: Sparkles,
  },
  {
    label: "Object Remove",
    route: "/dashboard/transformations/add/remove",
    icon: BackSpace,
  },
  {
    label: "Object Recolor",
    route: "/dashboard/transformations/add/recolor",
    icon: AdjustmentsHorizontal,
  },
  {
    label: "Background Remove",
    route: "/dashboard/transformations/add/removeBackground",
    icon: Camera,
  },
  {
    label: "Profile",
    route: "/dashboard/profile",
    icon: UserCircle,
  },
  {
    label: "Buy Credits",
    route: "/dashboard/credits",
    icon: ShoppingBag,
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
    icon: Photo,
  },
  removeBackground: {
    type: "removeBackground",
    title: "Background Remove",
    subTitle: "Removes the background of the image using AI",
    config: { removeBackground: true },
    icon: Camera,
  },
  fill: {
    type: "fill",
    title: "Generative Fill",
    subTitle: "Enhance an image's dimensions using AI outpainting",
    config: { fillBackground: true },
    icon: Sparkles,
  },
  remove: {
    type: "remove",
    title: "Object Remove",
    subTitle: "Identify and eliminate objects from images",
    config: {
      remove: { prompt: "", removeShadow: true, multiple: true },
    },
    icon: BackSpace,
  },
  recolor: {
    type: "recolor",
    title: "Object Recolor",
    subTitle: "Identify and recolor objects from the image",
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
    icon: AdjustmentsHorizontal,
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
