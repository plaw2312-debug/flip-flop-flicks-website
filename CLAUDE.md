# Just Stay Away (Flip Flop Flicks) website

A plain static website for Max and Jacquie's YouTube channel, Flip Flop Flicks
(@Flip-Flop-Flicks). Edited by Philippa and her dad, each with their own Claude.

## How it goes live

- This GitHub repository is linked to Vercel. Anything pushed to `main` goes
  live at https://juststayaway.com within a minute or two. The domain is
  registered at names.co.uk; www and the old vercel.app address redirect to it.
- Always pull the latest changes before editing, as two people work on it.
- After pushing, check the live page loads and shows the change.

## Pages

| File | Page |
|---|---|
| index.html | Home |
| videos.html | Videos |
| travel.html | Travel blogs (blog-*.html are the posts) |
| travel-tips.html | Travel tips (tips-*.html are the articles) |
| travel-resources.html | Travel toolkit: every booking site we use, by category, with affiliate links |
| where-we-stay.html | Where we stay (stay-*.html are the reviews) |
| food.html | Food |
| about.html | About us |
| contact.html | Contact |
| privacy-policy.html | Privacy policy |

Images live in `images/`. `dc-lite.js` fills in the video and travel lists on
videos.html and travel.html; do not remove it.

## Rules

- The site is public and open to Google. Do not add `noindex` tags, and leave
  `vercel.json` and `robots.txt` alone.
- When adding or removing a page, add or remove its line in `sitemap.xml`.
- The header, footer and blue jagged banner are the same on every page. Change
  one, change them all.
- Square-bracket text such as `[Dish and place]` is a placeholder waiting for
  real words.
- New blog posts: copy blog-nafplio.html, then add a card for it on travel.html.

## Look and feel

- Colours: cream #EFE6D4, navy #13325B, blue #2C6FB7 / #1B5FA6, yellow #F4C542,
  terracotta #B2472F, YouTube red #D62C2C.
- Fonts: Archivo and Archivo Black, Caveat for handwritten notes, Permanent
  Marker for stamps.
- Email sign-up: the Kit form "Greece trip planner sign-up" is embedded with
  `<script async data-uid="e681643c9e" ...>` just above the footer on the home
  page, travel-tips.html, travel-resources.html and every blog-*/tips-* page.
  On tips-trip-planner.html it sits under the wish-list download, before
  "8 weeks out", instead.
  Use it once per page only. New blog posts get it by copying blog-nafplio.html.
- Discover Cars affiliate link (use this one on the site):
  `https://www.discovercars.com/uk/greece?a_aid=juststayaway&currency=gbp`
  The DiscoverCars search widget is on tips-car-hire.html (under "How we found
  Auto Union"); it needs `data-aff-code="a_aid"` and
  `data-aff-value="juststayaway"`.
