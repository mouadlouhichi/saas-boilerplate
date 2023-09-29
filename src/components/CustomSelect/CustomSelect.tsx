import * as React from "react";
import { FC, forwardRef } from "react";
import Select, { ActionMeta, SingleValue } from "react-select";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

import { SurveyOption } from "@/data/survey";

const select = cva(["block"], {
  variants: {
    intent: {
      primary: ["bg-transparent"]
    },
    sizeType: {
      md: ["w-full", "h-20"]
    }
  },
  defaultVariants: {
    intent: "primary",
    sizeType: "md"
  }
});

export interface CustomSelectProps extends VariantProps<typeof select> {
  intent?: "primary";
  sizeType?: "md";
  className?: string;
  name: string;
  value?: SurveyOption;
  options: SurveyOption[];
  classNamePrefix?: string;
  isSearchable?: boolean;
  nextStep?: () => void;
  onChange?:
    | ((
        newValue: SingleValue<SurveyOption>,
        actionMeta: ActionMeta<SurveyOption>
      ) => void)
    | undefined;
}

const CustomSelect: FC<CustomSelectProps> = forwardRef(
  (
    {
      className,
      intent,
      sizeType,
      classNamePrefix = "custom-select",
      name,
      options,
      onChange,
      value,
      ...args
    },
    ref: any
  ) => {
    return (
      <Select
        name={name}
        options={options}
        value={value}
        onChange={onChange}
        {...args}
        classNamePrefix={classNamePrefix}
        className={twMerge(select({ intent, sizeType, className }))}
        ref={ref}
      />
    );
  }
);

CustomSelect.displayName = "CustomSelect";

export default CustomSelect;
