"use client";

import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function Error() {
  const router = useRouter();
  const t = useTranslations("Error");

  return (
    <div className="flex">
      <h1>{t("title")}</h1>
      <Button onClick={() => router.push("/")}>{t("retry")}</Button>
    </div>
  );
}
