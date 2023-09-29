// ?? To reduce the number of config files, we aim to combine everything into a single file.
// ?? Materials about @satisfies: https://youtu.be/49gHWuepxxE, https://youtu.be/G1RtAmI0-vc

import type { FooterItem, MainNavItem } from "@/types";

import { ContentSection, HeroHeader } from "@/server/config/appts";
import { networks } from "@/server/config/socials";

import { FOOTER_NAVIGATION, NAVIGATION } from "./data/navigation";
import { ImageSvgIcons } from "./images/icons";

// ========================================================

export const appts = {
  name: "MindRested",
  social: networks({
    youtube: "@mindrested_maroc",
    facebook: "mindrested_maroc",
    twitter: "mindrested_maroc",
    instagram: "mindrested_maroc"
  })
};

export default appts;

export type SiteConfig = typeof siteConfig;

const links = {
  twitter: "https://x.com/mindrested_maroc",
  youtube: "https://youtube.com/mindrested_maroc",
  instagram: "https://instagram.com/mindrested_maroc",
  facebook: "https://facebook.com/groups/bleverse"
};

export const contactConfig = {
  email: "contact.mindrested@gmail.com"
};

// ========================================================

export const REPOSITORY_OWNER = "mouadlouhichi";
export const REPOSITORY_NAME = "mindrested-app";
export const REPOSITORY_URL = `https://github.com/${REPOSITORY_OWNER}/${REPOSITORY_NAME}`;
export const baseUrl = "http://localhost:3000";

// ========================================================

export const BASE_URL =
  process.env.NODE_ENV === "production" ? baseUrl : "http://localhost:3000";
export const BRAND_NAME = "Mindrested";
export const BRAND_TITLE =
  "Your Mental Health Journey Starts Here | MindRested";

export const BRAND_DESCRIPTION =
  "MindRested: Elevate Your Well-being with Online Therapy, Progress Tracking, and Self-Care Resources. Start your journey to better mental health today.";

export const OWNER_ROLE = "Owner";
export const ADMIN_ROLE = "Admin";
export const Therapist_ROLE = "Therapist";
export const USER_ROLE = "User";
export const GUEST_ROLE = "Guest";

export const TRIAL_LENGTH_IN_DAYS = 7;
export const ROLES = [
  OWNER_ROLE,
  ADMIN_ROLE,
  Therapist_ROLE,
  GUEST_ROLE
] as const;

export const POLICIES = {
  SESSION_CREATE: "session:create",
  SESSION_READ: "session:read",
  SESSION_UPDATE: "session:update",
  SESSION_DELETE: "session:delete",
  SESSION_BOOK: "session:book",
  SESSION_CANCEL: "session:cancel",
  SESSION_RESCHEDULE: "session:reschedule",
  SESSION_COMPLETE: "session:complete",
  SESSION_REVIEW: "session:review",
  SESSION_REPORT: "session:report",
  SESSION_VIEW: "session:view",
  SESSION_LIST: "session:list",
  SESSION_SEARCH: "session:search",
  SESSION_FILTER: "session:filter",
  SESSION_SORT: "session:sort",
  SESSION_EXPORT: "session:export",
  SESSION_IMPORT: "session:import",
  SESSION_SYNC: "session:sync",
  SESSION_PUBLISH: "session:publish",
  SESSION_UNPUBLISH: "session:unpublish",
  SESSION_ARCHIVE: "session:archive",
  SESSION_UNARCHIVE: "session:unarchive",
  SESSION_RESTORE: "session:restore",
  SESSION_PURGE: "session:purge",
  SESSION_PURGE_ALL: "session:purge_all",
  SESSION_PURGE_DELETED: "session:purge_deleted",
  SESSION_PURGE_ARCHIVED: "session:purge_archived",
  SESSION_PURGE_EXPIRED: "session:purge_expired",
  SESSION_PURGE_CANCELLED: "session:purge_cancelled",
  SESSION_PURGE_COMPLETED: "session:purge_completed",
  SESSION_PURGE_UNPUBLISHED: "session:purge_unpublished",
  SESSION_PURGE_PUBLISHED: "session:purge_published",
  SESSION_PURGE_REJECTED: "session:purge_rejected",
  SESSION_PURGE_PENDING: "session:purge_pending",
  SESSION_PURGE_ACTIVE: "session:purge_active",
  // V2
  COMMENT_CREATE: "comment:create",
  COMMENT_READ: "comment:read",
  COMMENT_UPDATE: "comment:update",
  COMMENT_DELETE: "comment:delete",
  POST_CREATE: "post:create",
  POST_READ: "post:read",
  POST_UPDATE: "post:update"
} as const;
// ======================= default features===========================

export const defaultFeatures = {
  internationalizationEnabled: true,
  themeToggleEnabled: true,
  authEnabled: true
};

export const settings = {
  internationalizationEnabled: true,
  themeToggleEnabled: true
};

export const siteConfig = {
  name: "MindRested",
  shortName: "MindRested",
  author: "mouadlouhichi",
  description:
    "Elevate your mental well-being with MindRested - your trusted online therapy platform. Schedule sessions, track progress, and access self-care resources for a healthier you.",
  company: {
    name: "MindRested",
    link: "https://www.mindrested.com",
    email: "contact@mindrested.com",
    twitter: "@mindrested_maroc"
  },
  handles: {
    twitter: "@mindrested_maroc"
  },
  keywords: [
    "online therapy",
    "mental health",
    "therapy platform",
    "self-care",
    "Mental wellness",
    "therapist appointments",
    "therapy progress",
    "Morocco",
    "MindRested",
    "counseling",
    "emotional support",
    "mental well-being",
    "therapeutic sessions",
    "stress management",
    "anxiety relief",
    "depression help",
    "virtual therapy",
    "licensed therapists",
    "online counseling",
    "psychological support",
    "mental health resources",
    "therapy sessions",
    "mental health tracking",
    "mental health progress",
    "online mental health",
    "therapy access",
    "personalized therapy",
    "professional therapists",
    "therapeutic resources",
    "self-help tools"
  ],
  url: {
    base: baseUrl,
    author: REPOSITORY_OWNER
  },
  ogImage: `${baseUrl}/og-image.png`,
  mainNav: NAVIGATION,
  links,
  footerNav: FOOTER_NAVIGATION
};

// ========================================================

export const heroHeader: HeroHeader = {
  header1: `Next.js 13 Template 2023: Store & Dashboard`,
  header2: `Helps Build Great eCommerce & SaaS Faster`,
  subheader: `shadcn/ui, Link, App Router, TypeScript, T3, Stripe, Clerk, Tailwind,
  Drizzle, Zod, RSC, SWC, tRPC, NextAuth, Server Actions, Lucide Icons,
  etc.`
};

export const featureCards: ContentSection = {
  header: `Powered by`,
  subheader: `What Makes Relivator Possible`,
  content: [
    {
      text: `Next.js`,
      subtext: `The React Framework`
    },
    {
      text: `shadcn/ui`,
      subtext: `Beautifully Designed Components`
    },
    {
      text: `Vercel`,
      subtext: `Develop. Preview. Ship.`
    }
  ]
};

export const features: ContentSection = {
  header: `Features`,
  subheader: `Why You Need to Download Relivator`,
  content: [
    {
      text: `SEO Optimized`,
      subtext: `Improved website visibility on search engines`
    },
    {
      text: `Highly Performant`,
      subtext: `Fast loading times and smooth performance`
    },
    {
      text: `Easy Customization`,
      subtext: `Change your content and layout with little effort`
    }
  ]
};

// ========================================================

export const loginSocials = [
  {
    name: "Continue with Facebook",
    href: "#",
    icon: ImageSvgIcons.FacebookSvg,
    provider: "facebook"
  },
  {
    name: "Continue with Twitter",
    href: "#",
    icon: ImageSvgIcons.TwitterSvg,
    provider: "linkedin"
  },
  {
    name: "Continue with Google",
    href: "#",
    icon: ImageSvgIcons.GoogleSvg,
    provider: "google"
  }
];
