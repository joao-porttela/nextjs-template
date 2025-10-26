import type { MetadataRoute } from "next";

import { APP_DEFAULT_DESCRIPTION, APP_DEFAULT_TITLE } from "@/config/config";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: APP_DEFAULT_TITLE,
        short_name: APP_DEFAULT_TITLE,
        description: APP_DEFAULT_DESCRIPTION,
        theme_color: "#171717",
        background_color: "#171717",
        start_url: "/",
        scope: "/",
        display: "standalone",
        orientation: "portrait",
    };
}