"use client";

import { Button, type ButtonProps } from "@/islands/primitives/button";
import { cn } from "@/server/utils";

interface ClientButtonProps extends ButtonProps {}

export function ClientButton({ className, ...props }: ClientButtonProps) {
  return <Button className={cn(className)} {...props}></Button>;
}
