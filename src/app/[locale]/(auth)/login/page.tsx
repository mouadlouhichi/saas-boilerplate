"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";
import authBackground from "@/images/backgrounds/authBackground-l.jpg";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";

import Auth from "@/shared/Auth/Auth";

const errors = {
  Signin: "Try signing with a different account.",
  OAuthSignin: "Try signing with a different account.",
  OAuthCallback: "Try signing with a different account.",
  OAuthCreateAccount: "Try signing with a different account.",
  EmailCreateAccount: "Try signing with a different account.",
  Callback: "Try signing with a different account.",
  OAuthAccountNotLinked:
    "To confirm your identity, sign in with the same account you used originally.",
  EmailSignin: "Check your email address.",
  CredentialsSignin:
    "Sign in failed. Check the details you provided are correct.",
  default: "Unable to sign in."
};

interface SignInErrorProps {
  error: keyof typeof errors;
}

function PageLogin() {
  const [error, setError] = useState<SignInErrorProps["error"]>();
  const lng = useLocale();
  const callbackUrl = `/${lng}`;
  const searchParams = useSearchParams();
  const errorParam = searchParams?.get("error");
  useEffect(() => {
    setError(errorParam as SignInErrorProps["error"]);
    if (error && errorParam) {
      toast.error(errors[error] ?? errors.default, {
        duration: 5000,
        icon: (
          <ExclamationTriangleIcon
            width={24}
            hanging={24}
            className="min-w-[1.5rem]	 min-h-[1.5rem]	text-secondary-500"
          />
        )
      });
    }
  }, [error]);

  return (
    <>
      <div className="relative  h-[30vh] md:row-span-2 md:h-screen">
        <Image
          fill
          alt="Feel MindRested"
          className="object-cover"
          src={authBackground}
          placeholder="blur"
        />
      </div>
      <Auth
        type="login"
        heading=" Welcome back"
        description="Login with Social Media or enter your details."
        callbackUrl={callbackUrl}
      />
    </>
  );
}

export default PageLogin;
