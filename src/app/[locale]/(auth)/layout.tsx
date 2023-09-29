import { type PropsWithChildren } from "react";
import GeneralShell from "@/islands/wrappers/general-shell";
import { type WithChildren } from "@/types";

type AuthLayoutProps = PropsWithChildren;

export default function AuthLayout({
  children,
}: WithChildren<AuthLayoutProps>) {
  return <GeneralShell>{children}</GeneralShell>;
}
