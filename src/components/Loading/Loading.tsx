import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const cvaConfig = cva(["flex"], {
  variants: {
    intent: {
      primary: ["bg-transparen"]
    },
    size: {
      sm: ["h-5 w-5"],
      md: ["h-6 w-6"],
      lg: ["h-8 w-8"]
    }
  },
  defaultVariants: {
    intent: "primary",
    size: "lg"
  }
});

export interface LoadingProps extends VariantProps<typeof cvaConfig> {
  intent?: "primary";
  size?: "sm" | "md" | "lg";
  className?: string;
}
const Loading = ({
  intent = "primary",
  size = "sm",
  className = "animate-spin -ml-1 mr-3"
}: LoadingProps) => {
  return (
    <svg
      className={twMerge(cvaConfig({ intent, size, className }))}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};

export default Loading;
