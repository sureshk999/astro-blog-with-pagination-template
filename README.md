# Astro Starter Kit: Blog With Pagination and Tags

Welcome to my starter blog template. Modified from the Astro standard blog template to include Tags and Pagination!

*pagination* is quite tricky in Astro, and this blog includes it by default. 

It has basic styling on purpose, so that you can develop and define your own website. This version includes inline and on page `<style>` elements in case you want to use that. There is another version with `Tailwind CSS` you can [find here](https://github.com/sureshk999/astro-blog-template-tailwind)

## 👨‍🏫 Installation

Installation couldn't be easier:

`git clone https://github.com/sureshk999/astro-blog-template-tailwind`

followed by 

`npm install`

then deploy or change the code as you like!

## 📣 Features 

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md*` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [the official documentation](https://docs.astro.build) or read more about my coding hobby at [my web dev site](https://sureshkhirwadkar.dev).

## 👋 Credit

This theme is produced by me, [suresh khirwadkar](https://sureshkhirwadkar.dev).

## ☕️ Support

If you found this template useful, please consider [buying me a coffee](https://sureshkhirwadkar.dev) to help ongoing development projects.
