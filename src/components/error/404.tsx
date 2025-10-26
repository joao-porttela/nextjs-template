import React from "react";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PageNotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-4xl">{t("title")}</h2>
        <p className="text-xl">{t("description")}</p>
      </div>
      <Link href="/">
        <Button>{t("back")}</Button>
      </Link>
    </div>
  );
}
