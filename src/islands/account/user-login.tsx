"use client";

import { FC, type ButtonHTMLAttributes } from "react";
// import { useTranslations } from "next-intl";

import { ActionButton } from "@/islands/account/action-button";
import { signIn, signOut, useSession } from "next-auth/react";

export const UserLogin: FC<
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "type" | "onClick">
> = (props) => {
  // const t = useTranslations("common.userLogin");
  const { data: session } = useSession();

  const handleClick = async () => {
    if (session) await signOut({ callbackUrl: "/" });
    else await signIn();
  };

  return (
    <ActionButton
      type="button"
      variant="small"
      onClick={handleClick}
      {...props}
    >
      {session
        ? // ? t("signOutText", { userName: session.user?.name })
          `{ userName: session.user?.name }`
        : "signInText"}
    </ActionButton>
  );
};
