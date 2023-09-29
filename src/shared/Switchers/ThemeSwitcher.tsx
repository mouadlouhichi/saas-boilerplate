import * as React from "react";
import { useTheme } from "next-themes";
import { useThemeMode } from "@/utils/useThemeMode";
import { Switch } from "@headlessui/react";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/solid";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

import { useIsClient } from "@/hooks/use-is-client";
import Button from "@/components/Button";

const cvaConfig = cva(["flex"], {
  variants: {
    type: {
      icon: [
        "items-center",
        "justify-center",
        "self-center",
        "rounded-full",
        "text-2xl",
        "text-neutral-700",
        "hover:bg-neutral-100",
        "focus:outline-none",
        "dark:text-neutral-300",
        "dark:hover:bg-neutral-800",
        "md:text-3xl"
      ],
      toggle: ["h-12", "w-12"]
    },
    size: {
      md: ["h-12", "w-12"]
    }
  },
  defaultVariants: {
    type: "icon",
    size: "md"
  }
});

export interface SwitchDarkModeProps extends VariantProps<typeof cvaConfig> {
  size?: "md";
  className?: string;
  type?: "icon" | "toggle";
}
const SwitchDarkMode = ({
  size,
  className,
  type = "icon",
  ...props
}: SwitchDarkModeProps) => {
  const { setTheme, theme } = useTheme();
  const client = useIsClient();
  const isDarkMode = theme === "dark";

  if (!client)
    return (
      <Button
        disabled
        aria-label="Theme Switcher"
        className="h-9 w-9 border rounded-md"
        {...props}
      >
        <SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
      </Button>
    );
  switch (type) {
    case "icon":
      return (
        <button
          onClick={() => setTheme(isDarkMode ? "light" : "dark")}
          className={twMerge(cvaConfig({ size, type, className }))}
        >
          <span className="sr-only">Enable dark mode</span>
          {isDarkMode ? (
            <MoonIcon className="h-7 w-7 text-neutral-300" aria-hidden="true" />
          ) : (
            <SunIcon className="h-7 w-7" aria-hidden="true" />
          )}{" "}
        </button>
      );
    case "toggle":
      return (
        <div className="inline-flex">
          <span className="sr-only">Enable dark mode</span>
          <Switch
            checked={isDarkMode}
            onChange={() => setTheme(isDarkMode ? "light" : "dark")}
            className={`${isDarkMode ? "bg-primary-6000" : "bg-neutral-300"}
          relative inline-flex h-[22px] w-[42px] shrink-0 cursor-pointer rounded-full border-4 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">Enable dark mode</span>
            <span
              aria-hidden="true"
              className={`${isDarkMode ? "translate-x-5" : "translate-x-0"}
            pointer-events-none inline-block h-[14px] w-[14px] rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
          </Switch>
        </div>
      );
  }
};

export default SwitchDarkMode;
