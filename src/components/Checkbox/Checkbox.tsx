import React, { InputHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const checkbox = cva(
  [
    "focus:ring-action-primary",
    "border-primary",
    "rounded",
    "bg-white",
    "text-primary-500",
    "focus:ring-primary-500",
    "dark:bg-neutral-700",
    "dark:checked:bg-primary-500"
  ],
  {
    variants: {
      intent: {
        primary: ["border-neutral-500"]
      },
      sizeType: {
        md: ["h-6", "w-6"]
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
    VariantProps<typeof checkbox> {
  intent?: "primary";
  className?: string;
  ref?: React.Ref<HTMLInputElement>;
  type?: string;
  label?: string;
  name?: string;
  value?: string;
  subLabel?: string;
  sizeType?: "md";
  defaultChecked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  id?: string;
}
const Checkbox = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      sizeType,
      intent,
      label,
      id,
      name,
      value,
      subLabel,
      onChange,
      defaultChecked,
      ...args
    },
    ref
  ) => {
    return (
      <div className={`flex text-sm sm:text-base `}>
        <input
          id={id}
          ref={ref}
          name={name}
          type="checkbox"
          className={twMerge(checkbox({ intent, sizeType, className }))}
          defaultChecked={defaultChecked}
          {...args}
          onChange={onChange}
          value={value}
        />
        {label && (
          <label
            htmlFor={id}
            className="ml-3.5 flex flex-1 flex-col justify-center"
          >
            <span className=" text-neutral-900 dark:text-neutral-100">
              {label}
            </span>
            {subLabel && (
              <p className="mt-1 text-sm font-light text-neutral-500 dark:text-neutral-400">
                {subLabel}
              </p>
            )}
          </label>
        )}
      </div>
    );
  }
);

export default Checkbox;
