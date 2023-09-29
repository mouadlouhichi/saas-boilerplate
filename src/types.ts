import { Metadata } from "next";
import { NextResponse, type NextRequest } from "next/server";


import { User, type DefaultSession } from "next-auth";
import { type FileWithPath } from "react-dropzone";
import { type z, type ZodIssue } from "zod";
import { LucideProps } from "lucide-react";


/**
 * =======================================================================
 * TYPES: NEXT
 * =======================================================================
 */
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




/**
 * =======================================================================
 * TYPES: RESPONSE
 * =======================================================================
 */

export type ApiResponseError = {
  ok: false;
  error: string;
  issues?: ZodIssue[];
};

export type ApiResponseSuccess<T> = {
  ok: true;
  data: T;
};

export type ApiResponse<T> = ApiResponseSuccess<T> | ApiResponseError;

export type NextRequestContext<T> = {
  params: T;
};

/**
 * The Context parameter for route handlers, which is currently optional `params` object.
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/route#context-optional
 */
export type NextRouteContext<T = undefined> = {
  params: T;
};

/**
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/route
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/route#request-optional
 */
export type NextRouteHandler<T = void, U = NextRouteContext> = (
  request: NextRequest,
  context: U,
) => NextResponse<T> | Promise<NextResponse<T>>;



/**
 * =======================================================================
 * TYPES: PROPS
 * =======================================================================
 */

export type WithChildren<T = unknown> = T & { children: React.ReactNode };

export type LocaleLayoutParams = { params: { locale: string } };

export interface NullLayoutParams {}

export type GeneralShellParams = { header?: React.ReactNode };

/**
 * =======================================================================
 * TYPES: API
 * =======================================================================
 */

declare module "translate" {
  export default function translate(
    text: string,
    options: {
      from: string;
      to: string;
      cache?: number;
      engine?: string;
      key?: string;
      url?: string;
    },
  ): string;
}

/**
 * =======================================================================
 * TYPES: NAVIGATION
 * =======================================================================
 */

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

export type MainMenuItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;

/**
 * =======================================================================
 * TYPES: USER
 * =======================================================================
 */


export interface Option {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export type FileWithPreview = FileWithPath & {
  preview: string;
};

export interface StoredFile {
  id: string;
  name: string;
  url: string;
}

export interface DataTableSearchableColumn<TData> {
  id: keyof TData;
  title: string;
}

export interface DataTableFilterableColumn<TData>
  extends DataTableSearchableColumn<TData> {
  options: Option[];
}
