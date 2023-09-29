"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useIsClient } from "@/hooks/use-is-client";
import { Icons } from "@/islands/icons";
import { Button, buttonVariants } from "@/islands/primitives/button";
import { Skeleton } from "@/islands/primitives/skeleton";
import { cn } from "@/server/utils";
import {
  signIn,
  SignInResponse,
  signOut,
  useSession,
  type ClientSafeProvider,
} from "next-auth/react";

export function LogOutButtons() {
  const router = useRouter();
  const mounted = useIsClient();
  const [isPending, startTransition] = React.useTransition();

  const { data: session } = useSession();
  const handleSignOut = async () => {
    if (session) await signOut({ callbackUrl: "/sign-in" });
  };

  return (
    <div className="flex w-full items-center space-x-2">
      {mounted ? (
        <>
          {/* <SignOutButton
            signOutCallback={() =>
              startTransition(() => {
                router.push(`${window.location.origin}/?redirect=false`);
              })
            }
          > */}
          <Button
            aria-label="Log out"
            size="sm"
            className="w-full"
            disabled={isPending}
            onClick={handleSignOut}
          >
            {isPending && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Log out
          </Button>
          {/* </SignOutButton> */}
        </>
      ) : (
        <Skeleton
          className={cn(
            buttonVariants({ size: "sm" }),
            "w-full bg-muted text-muted-foreground",
          )}
        >
          Log out
        </Skeleton>
      )}
      <Button
        aria-label="Go back to the previous page"
        variant="outline"
        size="sm"
        className="w-full"
        onClick={() => router.back()}
        disabled={isPending}
      >
        Go back
      </Button>
    </div>
  );
}
