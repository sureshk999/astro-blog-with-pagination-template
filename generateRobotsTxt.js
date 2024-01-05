import fs from "fs";
import path from "path";

const robotsTxtContent = `User-agent: *
Disallow:

Sitemap: http://astro-blog-with-pagination-template.vercel.app/sitemap-index.xml`;

fs.writeFileSync(path.resolve('public', 'robots.txt'), robotsTxtContent);
console.log('robots.txt generated successfully!');
