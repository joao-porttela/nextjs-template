"use client";

import { cn } from "@/lib/utils";

import { Language } from "../global/language";

import { RouteLink } from "./route-link";

import { IRoute } from "@/interfaces/core/IRoute";

interface MainNavProps {
  className?: string;
  routes?: IRoute[];
}

export function Nav({ className, routes }: MainNavProps) {
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes &&
        routes.map((route) => (
          <RouteLink
            key={route.href}
            route={route}
            className={cn(
              "font-bold link",
              route.active ? "link-active" : ""
            )}
          >
            {route.label}
          </RouteLink>
        ))}

      <Language />
    </nav>
  );
}
