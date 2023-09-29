import React, { SelectHTMLAttributes } from "react";
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

export interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof cvaConfig> {
  intent?: "primary";
  sizeType?: "md";
  className?: string;
  ref?: React.Ref<HTMLSelectElement>;
  type?: string;
  font?: "base";
  rounded?: "rounded-2xl";
}
const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className = "",
      sizeType,
      intent,
      rounded,
      font,
      children,
      type = "text",
      ...args
    },
    ref
  ) => {
    return (
      <select
        className={twMerge(
          cvaConfig({ intent, sizeType, className, rounded, font })
        )}
        ref={ref}
        {...args}
      >
        {children}
      </select>
    );
  }
);

export default Select;
