import { Metadata } from "next";
import type { DefaultSession } from "next-auth";
import { User } from "next-auth";
import { type FileWithPath } from "react-dropzone";
import { LucideProps } from "lucide-react";
import { type z } from "zod";

import { type userPrivateMetadataSchema } from "@/data/valids/auth";

export type UserSession =
  | (User & {
      id: string;
    })
  | undefined;

declare module "next-auth" {
  interface Session {
    user?: User & {
      id: string;
      hasSurvey: boolean;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId?: string | null;
    email?: string | null;
  }
}

export type WithChildren<T = unknown> = T & { children: React.ReactNode };

export type PageParams = { params: { locale: string } };

export type GenerateMetadata = (
  params: PageParams
) => Metadata | Promise<Metadata>;

export interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: LucideProps;
  label?: string;
  description?: string;
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;

export type UserRole = z.infer<typeof userPrivateMetadataSchema.shape.role>;

export interface Option {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export type FileWithPreview = FileWithPath & {
  preview: string;
};

export interface GuestsObject {
  guestAdults?: number;
  guestChildren?: number;
  guestInfants?: number;
}

export type StaySearchFormFields = "location" | "guests" | "dates";

export interface PropertyType {
  name: string;
  description: string;
  checked: boolean;
}

export type ClassOfProperties = PropertyType;

export type DateRage = [Date | null, Date | null];
