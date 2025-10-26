import type { MetadataRoute } from "next";
import { URL } from "@/config/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: ["Googlebot", "Applebot", "Bingbot"],
        allow: ["/", "/en", "/services", "/en/services"],
      },
    ],
    sitemap: `${URL}/sitemap.xml`,
  };
}