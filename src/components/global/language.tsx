"use client";

import React, { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Locale } from "@/i18n/i18-config";

import { useToggle } from "@/providers/toggle-provider";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "@/lib/utils";

interface ILanguage {
  lang: Locale;
}

type Props = {
  classname?: string;
};

export function Language({ classname }: Props) {
  const pathname = usePathname();
  const locale = useLocale();

  const router = useRouter();
  const { setToggle } = useToggle();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  function handleLocaleChange(newLocale: Locale): void {
    console.log(locale);
    router.push(pathname, { locale: newLocale });
    router.refresh();
    setToggle(false);
  }

  const languages: ILanguage[] = [
    {
      lang: "en",
    },
    {
      lang: "pt",
    },
  ];

  if (!isMounted) {
    return null;
  }
  return (
    <Select onValueChange={(e) => handleLocaleChange(e as Locale)}>
      <SelectTrigger className={cn("w-20 border-primary", classname)}>
        <SelectValue placeholder={locale.toUpperCase()} />
      </SelectTrigger>
      <SelectContent className="min-w-20">
        <SelectGroup>
          {languages.map((language) => (
            <div key={language.lang}>
              <SelectItem value={language.lang}>{language.lang.toUpperCase()}</SelectItem>
            </div>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
