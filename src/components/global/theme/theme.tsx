"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

import { Button } from "../../ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

export default function Theme() {
  const { theme, setTheme } = useTheme();

  /* Update theme-color meta tag
* when theme is updated */
  useEffect(() => {
    const themeColor = theme === 'dark' ? '#262626' : '#f5f5f5'
    const metaThemeColor = document.querySelector("meta[name='theme-color']")
    if (metaThemeColor) metaThemeColor.setAttribute('content', themeColor)
  }, [theme])

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      className="hover:border-primary"
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
