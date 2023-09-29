"use client";

import { Button } from "@/islands/primitives/button";
import { signOut } from "next-auth/react";

export function SignOutButton() {
  return (
    <Button
      onClick={(event) => {
        event.preventDefault();
        void signOut();
      }}
      size="sm"
      className="px-4"
    >
      Sign Out
    </Button>
  );
}
