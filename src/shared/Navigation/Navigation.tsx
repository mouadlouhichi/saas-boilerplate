// TD get navigation from backend
import React from "react";

import { NAVIGATION } from "@/data/navigation";

import NavigationItem from "./NavigationItem";

function Navigation() {
  return (
    <ul className="relative hidden w-full justify-center  lg:flex lg:flex-wrap  lg:space-x-1 xl:justify-end">
      {NAVIGATION.map((item) => (
        <NavigationItem key={item.id} menuItem={item} />
      ))}
    </ul>
  );
}

export default Navigation;
