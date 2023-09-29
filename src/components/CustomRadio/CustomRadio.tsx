import React, { InputHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const radio = cva(
  [
    "flex",

    "cursor-pointer",
    "items-center",
    "justify-center",
    "rounded-full",
    "text-primary-6000",
    "transition",
    "hover:bg-primary-6000",
    "hover:text-white",
    "dark:bg-neutral-700",
    "dark:hover:bg-primary-6000"
  ],
  {
    variants: {
      intent: {
        primary: ["bg-primary-100"]
      },
      sizeType: {
        md: ["w-full"]
      }
    },
    defaultVariants: {
      intent: "primary",
      sizeType: "md"
    }
  }
);

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof radio> {
  intent?: "primary";
  className?: string;
  ref?: React.Ref<HTMLInputElement>;
  type?: string;
  label?: string;
  name?: string;
  value?: string;
  sizeType?: "md";
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  id?: string;
}
const Radio = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      sizeType,
      intent,
      label,
      id,
      name,
      value,
      onClick,
      ...args
    },
    ref
  ) => {
    return (
      <div
        onClick={onClick}
        className={twMerge(radio({ intent, sizeType, className }))}
      >
        <input
          name={name}
          ref={ref}
          value={value}
          type="checkbox"
          {...args}
          className="hidden border-none bg-transparent   text-primary-500 focus:ring-primary-500"
        />
        <label
          htmlFor={id}
          className="h-full w-full cursor-pointer p-4 text-center text-base font-semibold dark:text-neutral-300"
        >
          {label}
        </label>
      </div>
    );
  }
);

export default Radio;
