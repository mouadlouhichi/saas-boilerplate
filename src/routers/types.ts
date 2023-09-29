import { ComponentType } from "react";
import type { Route as NextRoute } from "next";

// Get ready to update to nextjs version 13.2 with X typedRoutes
export type Route<T = string> = NextRoute;
export type PathName = Route;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType<object>;
}
