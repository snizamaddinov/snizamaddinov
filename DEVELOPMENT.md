# Developing snizamaddinov.com

This file documents how the portfolio site is built and published. `README.md` is the GitHub profile page and is deliberately kept free of build details.

This repository is both the GitHub profile and the source of the portfolio site, [snizamaddinov.com](https://snizamaddinov.com). The site is a single page built with Vite and Tailwind CSS. All of its text lives in three JSON files in `content/`, and the build turns them into one static HTML page.

## Layout

```
index.html                 page template with placeholders
content/profile.json       name, title, tagline, About paragraphs, social links, résumé link
content/experience.json    the Experience section
content/projects.json      the Projects section (the one file to edit for projects)
src/render/*.js            functions that turn the JSON into HTML at build time
src/main.js, src/styles.css
static/                    files copied to the site as they are (images, icons, favicon, résumé PDF)
scripts/check-content.mjs  validates the JSON before every build
public/                    BUILD OUTPUT. Never edit it by hand. Cloudflare serves this folder.
```

## Run it locally

Install the dependencies once with `npm ci` (or `npm install` after changing package.json). Start the development server with `npm run dev`; it reloads when you change a content file. `npm run build` checks the content and writes the finished site to `public/`, and `npm run preview` serves that folder so you can look at the exact result.

## Add or change a project

Open `content/projects.json` and add an object to the list, or edit an existing one. The cards are sorted by `order`, so pick a number that puts the project where you want it. Use `null` for any link you do not have; a project without a `live` link gets a plain title, and a project without an image gets a full-width card. A project with the status `in-progress` shows an "In progress" tag. If the project has an image, put the file in `static/images/projects/` (about 640 pixels wide is enough) and refer to it as `/images/projects/your-file.png`. Then run `npm run build`: it stops with a clear message if a required field is missing, a URL is malformed or an `id` is used twice.

A complete entry looks like this:

```json
{
  "id": "home-server",
  "title": "Home Server",
  "summary": "The self-hosted server that runs my own services, set up with Docker.",
  "role": "Personal project",
  "company": null,
  "period": { "start": "2024-01", "end": null },
  "status": "live",
  "featured": false,
  "order": 8,
  "tech": ["Linux", "Docker", "Nginx"],
  "links": { "live": null, "repo": "https://github.com/snizamaddinov/example", "article": null },
  "image": { "src": "/images/projects/home-server.png", "alt": "Home server dashboard" }
}
```

`status` is one of `live`, `in-progress` or `archived`. `period.start` and `period.end` are written as `"2024-01"`, and either may be `null`. `featured` is recorded for later use and does not change the page yet.

## Deploy

Cloudflare serves the `public/` folder of the `main` branch exactly as it is committed. Nothing is built on Cloudflare's side, so the build has to happen before the push:

1. Run `npm run build`.
2. Commit your changes together with the updated `public/` folder.
3. Push to `main`. Cloudflare publishes the new version within a minute or two to snizamaddinov.com, and shanazar.com redirects there.

If you forget step 1, the site keeps showing the old content even though the JSON changed.

To make Cloudflare run the build instead, open the project's build settings in the Cloudflare dashboard, set the build command to `npm ci && npm run build`, and keep the served directory as `public`. Once a deploy has succeeded that way, `public/` can be added to `.gitignore` and removed from git, and a push is all that is needed.

## Update the résumé

The résumé linked in the sidebar is `static/Shanazar_Nizamaddinov_CV.pdf`. Replace that file with the new PDF, keeping the name, then build and push.

