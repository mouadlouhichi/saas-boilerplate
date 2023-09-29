import * as React from "react";
import { useThemeMode } from "@/utils/useThemeMode";
import { Switch } from "@headlessui/react";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/solid";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

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
  type = "icon"
}: SwitchDarkModeProps) => {
  const { _toogleDarkMode, isDarkMode, toDark, toLight } = useThemeMode();

  switch (type) {
    case "icon":
      return (
        <button
          onClick={_toogleDarkMode}
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
            onChange={_toogleDarkMode}
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
