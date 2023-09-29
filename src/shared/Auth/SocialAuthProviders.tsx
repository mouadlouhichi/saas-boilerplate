"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { loginSocials } from "@/app";

import Button from "@/components/Button";

function SocialAuthProviders({ callbackUrl }: { callbackUrl: string }) {
  const [isLoading, setIsloading] = useState(false);

  return (
    <div className="flex justify-center gap-10">
      {loginSocials.map((item, index) => (
        <Button
          intent="circle"
          size="none"
          key={index}
          disabled={isLoading}
          className="h-[3rem] w-[3rem] bg-primary-50  dark:bg-neutral-800 "
          onClick={async () => {
            setIsloading(true);
            await signIn(item.provider, { callbackUrl });
          }}
        >
          {item.icon && item.icon}
        </Button>
      ))}
    </div>
  );
}

export default SocialAuthProviders;
