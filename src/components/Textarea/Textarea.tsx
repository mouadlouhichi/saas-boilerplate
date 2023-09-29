import React, { TextareaHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const cvaConfig = cva(["block", "w-full", "bg-white"], {
  variants: {
    intent: {
      primary: [
        "border-neutral-200",
        "focus:border-primary-300",
        "focus:ring",
        "focus:ring-primary-200",
        "focus:ring-opacity-50",
        "dark:border-neutral-700",
        "dark:bg-neutral-900",
        "dark:focus:ring-primary-6000",
        "dark:focus:ring-opacity-25"
      ]
    },
    sizeType: {
      md: ["px-4", "py-3"]
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
});

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof cvaConfig> {
  intent?: "primary";
  sizeType?: "md";
  className?: string;
  ref?: React.Ref<HTMLTextAreaElement>;
  type?: string;
  font?: "base";
  rounded?: "rounded-2xl";
}
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { className = "", sizeType, intent, rounded, font, children, ...args },
    ref
  ) => {
    return (
      <textarea
        className={twMerge(
          cvaConfig({ intent, sizeType, className, rounded, font })
        )}
        rows={4}
        ref={ref}
        {...args}
      >
        {children}
      </textarea>
    );
  }
);

export default Textarea;
