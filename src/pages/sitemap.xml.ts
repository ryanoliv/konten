import { GetServerSideProps } from "next";

const SITE_URL = "https://www.konten.dev";

const staticPages = [
  { path: "/", priority: "1.00" },
  { path: "/web-development-cape-town", priority: "0.90" },
  { path: "/privacy-policy", priority: "0.70" },
  { path: "/terms-of-service", priority: "0.70" },
  { path: "/the-role-of-ux-in-web-development", priority: "0.80" },
  { path: "/the-best-web-development-tools-in-2024", priority: "0.80" },
  {
    path: "/web-design-vs-web-development-understanding-the-differences",
    priority: "0.80",
  },
];

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${staticPages
    .map(
      ({ path, priority }) => `
    <url>
      <loc>${SITE_URL}${path}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>${priority}</priority>
    </url>
  `
    )
    .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default function Sitemap() {
  return null;
}
