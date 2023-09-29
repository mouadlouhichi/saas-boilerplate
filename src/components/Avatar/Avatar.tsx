import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { avatarColors } from "@/contains/contants";
import defaultAvatar from "@/images/avatars/default-avatar.jpg";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const avatar = cva(
  [
    "relative",
    "inline-flex",
    "shrink-0",
    "items-center",
    "justify-center",
    "font-semibold",
    "uppercase",
    "text-neutral-100",
    "shadow-inner",
    "ring-1",
    "ring-white",
    "dark:ring-neutral-900"
  ],
  {
    variants: {
      intent: {
        primary: [
          "bg-primary-500",
          "text-white",
          "hover:enabled:bg-primary-700",
          "font-normal"
        ]
      },
      size: {
        sm: ["w-6", "h-6", "sm:w-8", "sm:h-8"],
        md: ["w-8", "h-8", "sm:w-9", "sm:h-9"],
        lg: ["w-10", "h-10", "sm:w-12", "sm:h-12"],
        xl: ["w-32", "h-32"]
      },
      borderRadius: {
        "rounded-full": ["rounded-full"],
        "rounded-md": ["rounded-md"],
        "rounded-lg": ["rounded-lg"]
      }
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
      borderRadius: "rounded-full"
    }
  }
);

export interface AvatarProps extends VariantProps<typeof avatar> {
  containerClassName?: string;
  sizeClass?: string;
  radius?: string;
  imgUrl?: string | StaticImageData | null | undefined;
  userName?: string | null | undefined;
  hasChecked?: boolean;
  hasCheckedClass?: string;
  intent?: "primary";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  borderRadius?: "rounded-full" | "rounded-md" | "rounded-lg";
}

const Avatar: FC<AvatarProps> = ({
  imgUrl = defaultAvatar,
  userName,
  hasChecked,
  intent,
  size,
  className,
  borderRadius = "rounded-full",
  hasCheckedClass = "w-4 h-4 -top-0.5 -right-0.5"
}) => {
  const url = imgUrl || "";
  const name = userName || "John Doe";
  const _setBgColor = (name: string) => {
    const backgroundIndex = Math.floor(
      name.charCodeAt(0) % avatarColors.length
    );
    return avatarColors[backgroundIndex];
  };

  return (
    <div
      className={twMerge(avatar({ intent, size, className, borderRadius }))}
      style={{ backgroundColor: url ? undefined : _setBgColor(name) }}
    >
      {url && (
        <Image
          className={`absolute inset-0 h-full w-full object-cover ${borderRadius}`}
          src={url}
          alt={name}
          width={32}
          height={32}
        />
      )}
      <span className="wil-avatar__name">{name[0]}</span>

      {hasChecked && (
        <span
          className={` absolute flex items-center justify-center rounded-full bg-teal-500 text-xs text-white  ${hasCheckedClass}`}
        >
          <i className="las la-check"></i>
        </span>
      )}
    </div>
  );
};

export default Avatar;
