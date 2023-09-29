import { CustomLink } from "@/data/types";
import { PathName, Route } from "@/routers/types";
import { MegamenuItem, NavItemType } from "@/shared/Navigation/NavigationItem";
import ncNanoId from "@/utils/ncNanoId";

import __megamenu from "./jsons/__megamenu.json";

const megaMenuDemo: MegamenuItem[] = [
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Company",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "/" as PathName,
      name: i.Company,
    })),
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "App Name",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "/" as PathName,
      name: i.AppName,
    })),
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/5059013/pexels-photo-5059013.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "City",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "/" as PathName,
      name: i.City,
    })),
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/5159141/pexels-photo-5159141.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Contruction",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "/" as PathName,
      name: i.Contruction,
    })),
  },
  {
    id: ncNanoId(),
    image:
      "https://images.pexels.com/photos/7473041/pexels-photo-7473041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Country",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "/" as PathName,
      name: i.Country,
    })),
  },
];

const demoChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "Online booking",
  },
  {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "Real estate",
    isNew: true,
  },
  {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "Home 3",
    isNew: true,
  },
];

const otherPageChildMenus: NavItemType[] = [
  { id: ncNanoId(), href: "/" as PathName, name: "Blog page" },
  { id: ncNanoId(), href: "/" as PathName as Route, name: "Blog single" },
  { id: ncNanoId(), href: "/" as PathName, name: "About" },
  { id: ncNanoId(), href: "/" as PathName, name: "Contact us" },
  { id: ncNanoId(), href: "/" as PathName, name: "Login" },
  { id: ncNanoId(), href: "/" as PathName, name: "Signup" },
];

const templatesChildrenMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/add-listing/1" as Route,
    name: "Add listing",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/" as PathName as Route,
        name: "Add listing 1",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/2" as Route,
        name: "Add listing 2",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/3" as Route,
        name: "Add listing 3",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/4" as Route,
        name: "Add listing 4",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/5" as Route,
        name: "Add listing 5",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/6" as Route,
        name: "Add listing 6",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/7" as Route,
        name: "Add listing 7",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/8" as Route,
        name: "Add listing 8",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/9" as Route,
        name: "Add listing 9",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/10" as Route,
        name: "Add listing 10",
      },
    ],
  },
  //
  { id: ncNanoId(), href: "/" as PathName, name: "Checkout" },
  { id: ncNanoId(), href: "/" as PathName, name: "Pay done" },
  //
  { id: ncNanoId(), href: "/" as PathName, name: "Author page" },
  { id: ncNanoId(), href: "/" as PathName, name: "Account page" },
  //
  {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "Subscription",
  },
];

export const NAVIGATION_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "Business",
    type: "dropdown",
    children: demoChildMenus,
    isNew: true,
  },
  {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "Five columns",
    type: "megaMenu",
    megaMenu: megaMenuDemo,
  },
  {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "Listing Page",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/" as PathName,
        name: "Stay listings",
        type: "dropdown",
        children: [
          { id: ncNanoId(), href: "/" as PathName, name: "Stay page" },
          {
            id: ncNanoId(),
            href: "/" as PathName,
            name: "Stay page (map)",
          },
          { id: ncNanoId(), href: "/" as PathName, name: "Stay Detail" },
        ],
      },

      //
      {
        id: ncNanoId(),
        href: "/" as PathName,
        name: "Experiences listings",
        type: "dropdown",
        children: [
          {
            id: ncNanoId(),
            href: "/" as PathName,
            name: "Experiences page",
          },
          {
            id: ncNanoId(),
            href: "/" as PathName,
            name: "Experiences page (map)",
          },
          {
            id: ncNanoId(),
            href: "/" as PathName,
            name: "Experiences Detail",
          },
        ],
      },

      //
      {
        id: ncNanoId(),
        href: "/" as PathName,
        name: "Cars listings",
        type: "dropdown",
        children: [
          { id: ncNanoId(), href: "/" as PathName, name: "Cars page" },
          { id: ncNanoId(), href: "/" as PathName, name: "Cars page (map)" },
          { id: ncNanoId(), href: "/" as PathName, name: "Car Detail" },
        ],
      },

      //
      {
        id: ncNanoId(),
        href: "/" as PathName,
        name: "Real Estate Listings",
        type: "dropdown",
        children: [
          {
            id: ncNanoId(),
            href: "/" as PathName,
            name: "Real Estate Listings",
          },
          {
            id: ncNanoId(),
            href: "/" as PathName,
            name: "Real Estate Maps",
          },
        ],
      },
      //
      {
        id: ncNanoId(),
        href: "/" as PathName,
        name: "Flights listings",
      },
    ],
  },
  {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "Templates",
    type: "dropdown",
    children: templatesChildrenMenus,
  },

  {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "Other pages",
    type: "dropdown",
    children: otherPageChildMenus,
  },
];

export const NAVIGATION_DEMO_2: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "Business",
    type: "none",
  },

  //
  {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "Listing pages",
    children: [
      { id: ncNanoId(), href: "/" as PathName, name: "Stay listings" },
      {
        id: ncNanoId(),
        href: "/" as PathName,
        name: "Stay listings (map)",
      },
      { id: ncNanoId(), href: "/" as PathName, name: "Stay detail" },

      //
      {
        id: ncNanoId(),
        href: "/" as PathName,
        name: "Experiences listings",
      },
      {
        id: ncNanoId(),
        href: "/" as PathName,
        name: "Experiences (map)",
      },
      {
        id: ncNanoId(),
        href: "/" as PathName,
        name: "Experiences detail",
      },
    ],
  },
  {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "Listing pages",
    children: [
      { id: ncNanoId(), href: "/" as PathName, name: "Cars listings" },
      { id: ncNanoId(), href: "/" as PathName, name: "Cars listings (map)" },
      { id: ncNanoId(), href: "/" as PathName, name: "Car detail" },

      //
      {
        id: ncNanoId(),
        href: "/" as PathName,
        name: "Real estate listings",
      },
      {
        id: ncNanoId(),
        href: "/" as PathName,
        name: "Real estate (map)",
      },
      //
      {
        id: ncNanoId(),
        href: "/" as PathName,
        name: "Flights listings",
      },
    ],
  },

  //
  {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "Templates",
    type: "dropdown",
    children: templatesChildrenMenus,
  },

  //
  {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "Other pages",
    type: "dropdown",
    children: otherPageChildMenus,
  },
];

export const NAVIGATION: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "Business",
    type: "none",
  },
  {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "About",
    type: "none",
  },
  {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "Resources",
    type: "none",
  },
  {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "Join Us",

    type: "none",
  },
  {
    id: ncNanoId(),
    href: "/" as PathName,
    name: "Contact",
    type: "none",
  },
];

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

export const FOOTER_NAVIGATION: WidgetFooterMenu[] = [
  {
    id: ncNanoId(),
    title: "Getting Started",
    menus: [
      { href: "#", label: "How It Works" },
      { href: "#", label: "Setting Up Your Account" },
      { href: "#", label: "Choosing the Right Therapist" },
      { href: "#", label: "Privacy & Security" },
      { href: "#", label: "Frequently Asked Questions" },
    ],
  },
  {
    id: ncNanoId(),
    title: "About Us",
    menus: [
      { href: "#", label: "Our Mission" },
      { href: "#", label: "Our Therapists" },
      { href: "#", label: "Testimonials" },
      { href: "#", label: "Blog" },
      { href: "#", label: "Community Involvement" },
    ],
  },
  {
    id: ncNanoId(),
    title: "Resources",
    menus: [
      { href: "#", label: "Blog" },
      { href: "#", label: "Guided Meditation" },
      { href: "#", label: "Self-Care Tips" },
      { href: "#", label: "Videos & Workshops" },
      { href: "#", label: "Books & Resources" },
    ],
  },
  {
    id: ncNanoId(),
    title: "Contact",
    menus: [
      { href: "#", label: "Contact Us" },
      { href: "#", label: "Support Center" },
      { href: "#", label: "Live Chat" },
      { href: "#", label: "Phone Support" },
      { href: "#", label: "Email Support" },
    ],
  },
];
