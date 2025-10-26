"use client";

import { useToggle } from "@/providers/toggle-provider";

import { cn } from "@/lib/utils";

import { LucideAlignRight, X } from "lucide-react";

import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";

import { Language } from "../global/language";

import { RouteLink } from "./route-link";

import { IRoute } from "@/interfaces/core/IRoute"

interface MobileMainProps {
  className?: string;
  routes?: IRoute[];
}

export function MobileMainNav({ className, routes }: MobileMainProps) {
  const { toggle, setToggle } = useToggle();

  const toggleNav = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <nav className={cn("flex items-center", className)}>
        {toggle ? (
          <X
            className="inline-flex items-center justify-center rounded-md text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
            onClick={toggleNav}
            size={30}
          />
        ) : (
          <LucideAlignRight
            className="inline-flex items-center justify-center rounded-md text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
            onClick={toggleNav}
            size={30}
          />
        )}

        {toggle && (
          <div
            className={cn(
              "absolute transition-all duration-500 top-full flex flex-col w-full h-screen bg-background border-t-border left-0 pt-2 pb-3 px-4 z-50"
            )}
          >
            <div className="flex flex-col gap-80">
              <ScrollArea className="h-full w-full">
                {routes &&
                  routes.map((route) => {
                    return (
                      <div className="relative" key={route.href}>
                        <div className="py-5">
                          <RouteLink
                            route={route}
                            className="flex items-center gap-4 text-xl"
                            onClick={() => {
                              setToggle(false);
                              document
                                .querySelector("body")
                                ?.classList.remove("overflow-hidden");
                            }}
                          >
                            {route.icon}
                            {route.label}
                          </RouteLink>
                        </div>
                        <Separator />
                      </div>
                    );
                  })}

                <div className="relative">
                  <div className="py-5">
                    <Language classname="w-32 text" />
                  </div>
                  <Separator />
                </div>
              </ScrollArea>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
