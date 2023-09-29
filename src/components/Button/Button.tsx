import { Link } from "@/lib/router-events";
import { Route } from "@/routers/types";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const button = cva(
  [
    "flex",
    "items-center",
    "justify-center",
    "h-auto",
    "inline-flex",
    "transition-colors",
    "rounded-full",
    "self-center"
  ],
  {
    variants: {
      intent: {
        primary: [
          "border",
          "border-primary-6000",
          "bg-primary-6000",
          "text-neutral-50",
          "hover:bg-primary-700",
          "disabled:bg-opacity-70"
        ],
        secondary: [
          "border",
          "border-primary-6000",
          "text-primary-6000",
          "hover:border-primary-700",
          "hover:text-primary-700",
          "bg-white",
          "font-medium",
          "dark:border-neutral-700",
          "dark:bg-neutral-900",
          "dark:text-neutral-300",
          "dark:hover:bg-neutral-800"
        ],
        circle: [
          "rounded-full",
          "!leading-none",
          "text-neutral-50",
          "w-9",
          "h-9",
          "disabled:bg-opacity-70",
          "transition-transform",
          "hover:translate-y-[-2px]"
        ]
      },
      size: {
        none: [],
        sm: ["px-2", "py-1", "sm:px-2"],
        md: ["px-4", "py-3", "sm:px-6"],
        lg: ["px-6", "py-4", "sm:px-8"]
      },
      fontSize: {
        normal: ["text-sm", "sm:text-base", "font-medium"],
        big: ["text-base", "sm:text-lg", "font-medium"],
        bold: ["text-sm", "sm:text-base", "font-bold"]
      },
      underline: { true: ["underline"], false: [] }
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
      fontSize: "normal"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  underline?: boolean;
  loading?: boolean;
  href?: string;
  targetBlank?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  colorStyle?: "primary" | "secondary";
  fontSize?: "normal" | "big" | "bold";
}

export function Button({
  className,
  intent,
  size,
  underline,
  loading,
  targetBlank,
  disabled,
  onClick,
  href,
  fontSize,
  ...props
}: ButtonProps) {
  const _renderLoading = () => {
    return (
      <svg
        className="-ml-1 mr-3 h-5 w-5 animate-spin"
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

  if (href) {
    return (
      <Link
        className={twMerge(
          button({ intent, size, className, underline, fontSize })
        )}
        href={href as Route}
        target={targetBlank ? "_blank" : undefined}
        rel={targetBlank ? "noopener noreferrer" : undefined}
      >
        {loading ? _renderLoading() : props.children}
      </Link>
    );
  }
  return (
    <button
      className={twMerge(button({ intent, size, className, underline }))}
      {...props}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? _renderLoading() : props.children}
    </button>
  );
}
