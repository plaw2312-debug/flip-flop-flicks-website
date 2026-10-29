# Just Stay Away (Flip Flop Flicks) website

A plain static website for Max and Jacquie's YouTube channel, Flip Flop Flicks
(@Flip-Flop-Flicks). Edited by Philippa and her dad, each with their own Claude.

## How it goes live

- This GitHub repository is linked to Vercel. Anything pushed to `main` goes
  live at https://flip-flop-flicks-website.vercel.app within a minute or two.
- Always pull the latest changes before editing, as two people work on it.
- After pushing, check the live page loads and shows the change.

## Pages

| File | Page |
|---|---|
| index.html | Home |
| videos.html | Videos |
| travel.html | Travel blogs |
| blog-nafplio.html | Blog post: Nafplio |
| where-we-stay.html | Where we stay |
| food.html | Food |
| about.html | About us |

Images live in `images/`. `dc-lite.js` fills in the video and travel lists on
videos.html and travel.html; do not remove it.

## Rules

- **Keep the site hidden from Google** until Philippa says otherwise. Every page
  needs `<meta name="robots" content="noindex, nofollow">`, and do not change
  `vercel.json` or `robots.txt`.
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
