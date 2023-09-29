import React, { FC } from "react";

import Label from "@/components/Label";

export interface FormItemProps {
  className?: string;
  label?: string;
  desc?: string;
  children?: React.ReactNode;
}

const FormItem: FC<FormItemProps> = ({
  children,
  className = "",
  label,
  desc
}) => {
  return (
    <div className={className}>
      {label && <Label>{label}</Label>}
      <div>{children}</div>
      {desc && (
        <span className="block  text-xs text-neutral-500 dark:text-neutral-400 ">
          {desc}
        </span>
      )}
    </div>
  );
};

export default FormItem;
