import { MetadataRoute } from "next";
import { siteMeta } from "@/data/bigcloud";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: `https://${siteMeta.domain}/sitemap.xml`,
  };
}
