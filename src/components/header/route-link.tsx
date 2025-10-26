"use client";

import React from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

import { IRoute } from "@/interfaces/core/IRoute";

type RouteLinkProps = {
  children: React.ReactNode;
  route: IRoute;
  className?: string;
  onClick?: () => void;
};

export function RouteLink({ children, route, className, onClick }: RouteLinkProps) {
  return (
    <Link
      key={route.href}
      href={route.href}
      className={cn(
        "relative text-sm font-medium transition-all hover:text-primary",
        route.active ? "text-primary" : "text-secondary-foreground",
        className
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
