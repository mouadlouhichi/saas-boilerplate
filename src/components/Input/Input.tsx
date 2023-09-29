import React, { InputHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const cvaConfig = cva(
  [
    "block",
    "w-full",
    "bg-white",
    "focus:border-primary-300",
    "focus:ring",
    "focus:ring-primary-200",
    "focus:ring-opacity-50",
    "dark:border-neutral-700",
    "dark:bg-neutral-900",
    "dark:focus:ring-primary-6000",
    "dark:focus:ring-opacity-25 "
  ],
  {
    variants: {
      intent: {
        primary: ["border-neutral-200"]
      },
      sizeType: {
        md: ["h-11", "px-4", "py-3"]
      },
      rounded: {
        "rounded-2xl": ["rounded-2xl"]
      },
      font: {
        base: ["text-sm", "font-normal"]
      }
    },
    defaultVariants: {
      intent: "primary",
      sizeType: "md",
      rounded: "rounded-2xl",
      font: "base"
    }
  }
);

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof cvaConfig> {
  intent?: "primary";
  sizeType?: "md";
  className?: string;
  ref?: React.Ref<HTMLInputElement>;
  type?: string;
  font?: "base";
  rounded?: "rounded-2xl";
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className = "", sizeType, intent, rounded, font, type = "text", ...args },
    ref
  ) => {
    return (
      <input
        className={twMerge(
          cvaConfig({ intent, sizeType, className, rounded, font })
        )}
        ref={ref}
        type={type}
        {...args}
      />
    );
  }
);

export default Input;
