# CLAUDE.md — Boats Galore Website Project

## Project Overview
A professional business website for **Boats Galore**, a vehicle and outdoor equipment
storage business located in Dowagiac, Michigan. Owned and operated by Mike Malin and
Leslie Malin. They store boats, RVs, snowmobiles, ATVs, jet skis, trailers, and similar
vehicles. They do NOT store cars, fifth wheels, or anything easily damaged by indoor
unheated storage.

**Status: All four pages are built and deployed. The site is live at boats-galore.com
via Vercel, auto-deploying from GitHub (kramirezingold/Boats-Galore).**

---

## Business Details
- **Business Name:** Boats Galore
- **Owners:** Mike Malin and Leslie Malin
- **Address:** 55235 Garrett Rd, Dowagiac, MI 49047
- **Phone:** (269) 782-3090
- **Email:** Lmalinmtl@gmail.com (displayed as text only — all contact routed through EmailJS)
- **Domain:** boats-galore.com (Namecheap)
- **Hosting:** Vercel — auto-deploys from GitHub main branch
- **GitHub:** kramirezingold/Boats-Galore
- **Access Hours:** 24/7
- **New Customers:** Accepted year round
- **Storage Type:** Indoor only (unheated barn/warehouse). No outdoor storage.

---

## Goals of This Website
1. Establish a legitimate, professional online presence for the first time
2. Attract higher-ticket clientele — people with expensive boats, RVs, and vehicles
3. Build trust through reputation, facility details, and clear information
4. Generate leads via a contact/inquiry form that sends an email to the owner
5. Rank on Google for local searches like "boat storage Dowagiac MI" and
   "RV storage near Sister Lakes"

---

## Target Audience
- Recreational vehicle owners in the Dowagiac, MI area and surrounding communities
- Seasonal residents and visitors near Sister Lakes, MI
- Owners of high-value vehicles: boats ($50k-$200k+), RVs, snowmobiles, ATVs
- People who prioritize trust and security over the cheapest option

---

## Tone & Brand Direction
- **Premium and trustworthy** — not cheap, not corporate, not generic
- **Local and family-owned** — warm, community-rooted, established
- **Confident and simple** — clear information, easy to contact
- **About page is warmer/more editorial** — storytelling tone, not selling

### What to avoid:
- Generic stock photo warehouse aesthetic
- Overly corporate or cold language
- Cluttered layouts with too much text
- Anything that looks like a website builder template

---

## Tech Stack
- **HTML/CSS/JavaScript only** — no React, no frameworks
- **EmailJS** for contact form email delivery (free tier)
- **Vercel** for hosting and deployment
- **Custom domain:** boats-galore.com via Namecheap

---

## EmailJS Credentials
- **Public Key:** PihDcOwei2Nh1fjSQ
- **Service ID:** service_dybhya9
- **Template ID:** template_gjtuwz8
- **Form fields sent:** from_name, from_email, phone, what_to_store,
  vehicle_size, dropoff_date, heard_from, message
- Do not change these IDs without updating the EmailJS dashboard to match.

---

## Site Structure — All Pages Complete

### 1. Home (index.html) ✓
- Hero: full-viewport, `images/Hero_2.jpg` background, navy overlay
- Trust bar, intro/about snippet
- Features 4-card grid (24/7, Security, Fast Access, Pickup & Drop-off)
- What We Store: photo carousel (6 real facility photos) + accordion
- Storage & Services: tab switcher (Rates tab / Our Services tab)
- Testimonials: 8-review auto-rotating carousel with infinite loop
- CTA banner: two-column with Google Maps embed
- Footer: 3-column with address, quick links, hours

### 2. Services & Pricing (services.html) ✓
- Layout: sticky sidebar (desktop) + 7 scrollable panels
- Mobile: horizontal scrollable pill nav replaces sidebar
- 7 panels: Seasonal Storage, Winterization, Cleaning & Wash, Shrink Wrap,
  Maintenance, Pickup & Drop-Off, Custom Requests
- IntersectionObserver tracks active panel and highlights sidebar link
- Scroll-in animations on desktop via IntersectionObserver
- Bottom CTA: navy background, gold button

### 3. About (about.html) ✓
- Section 1: Navy page hero, Playfair Display headline
- Section 2: Family story — pull quote, drop cap, 3 paragraphs, gold rule
- Section 3: Sister Lakes area — two-column, copy left / stats right (10+, 4, 24/7, 1)
- Section 4: Values strip — compact horizontal banner, 3 statements, gold dividers
- Section 5: Gold CTA section
- Scroll-in animations (desktop only) via IntersectionObserver

### 4. Contact (contact.html) ✓
- Two-column: contact info + map (left) / inquiry form (right)
- 8-field form: from_name, from_email, phone, what_to_store, vehicle_size,
  dropoff_date, heard_from, message
- On submit: form fades out, success message fades in
- Google Maps embed + Get Directions link

---

## Design System

### Colors (CSS custom properties)
```
--navy:       #0a1628   (primary background, headers, footer)
--navy-mid:   #112040   (hover states)
--white:      #fafaf8   (page backgrounds)
--gold:       #b8963e   (accents, eyebrows, CTA)
--gold-dark:  #9a7830   (hover on gold elements)
--gold-light: #d4a855
--text:       #1e2a3a   (body copy)
--text-light: #5a6a7a   (muted copy)
--bg-alt:     #f3f2ef   (alternating section backgrounds)
--border:     #ddd9d0
```

### Typography
- **Headlines:** Playfair Display 700 (serif, editorial feel)
- **Sub-headlines / nav:** Raleway 700/800
- **Body:** DM Sans 400/500
- Google Fonts import includes italic variant of Playfair Display for about.html

### Layout Breakpoints
- Mobile base styles (no media query)
- `min-width: 640px` — small tablet / large phone
- `min-width: 768px` — tablet
- `min-width: 900px` — services sidebar becomes visible
- `min-width: 1100px` — full desktop

### Recurring Design Patterns
- **Eyebrow labels:** small gold uppercase wide-tracking text above headings
- **Gold divider:** `<div class="section-divider">` thin gold line between eyebrow and h2
- **Dot texture:** `radial-gradient` on navy sections for subtle depth
- **Section alternation:** white (#fafaf8) and warm cream (#f5f0e8) backgrounds
- **Footer:** always has `border-top: 3px solid var(--gold)` separator

---

## Images
All images live in `/images/`. Current inventory:
- `Hero_2.jpg` — home page hero background (in use)
- `Hero_1.jpg` — spare hero photo (not currently used)
- `Boat.jpg`, `rv.jpg`, `snowmobile.jpg`, `atv.jpg`, `jet ski.jpg`, `trailer.jpg`
  — real facility photos used in the "What We Store" carousel on index.html
- `sister-lakes.avif` — original hero placeholder (no longer used)

Note: `jet ski.jpg` has a space in the filename. It works but could be renamed
to `jet-ski.jpg` before launch for cleanliness.

---

## SEO — Completed
- Unique `<title>` and `<meta name="description">` on every page
- JSON-LD SelfStorage schema on every page (with description field)
- `sitemap.xml` created — lists all 4 pages with priority weights
- `robots.txt` created — allows all crawlers, points to sitemap
- Semantic HTML throughout (header, main, section, footer, nav, aside)
- Alt text on all images
- One H1 per page, logical H2/H3 hierarchy

---

## Known Technical Rules — Do Not Violate

### CSS
- **Never use `overflow-x: hidden` on `html` or `body`** — it breaks
  `position: sticky` on the services sidebar. Use `overflow-x: clip` instead.
  `clip` prevents horizontal scroll without creating a scroll container.
- **Never use `white-space: nowrap` on headline or body text without wrapping
  it in a `min-width` media query** — it causes horizontal overflow on mobile.
- Global `a:hover { color: var(--gold-dark) }` exists in style.css. Any button
  or link with a non-gold text color needs an explicit `color` override in its
  own `:hover` rule, or the global rule will bleed through.
- The footer has `border-top: 3px solid var(--gold)` — this is intentional on
  all pages to separate it from adjacent navy sections.

### JavaScript
- The reviews carousel in script.js clones 3 cards before and after the real
  cards for infinite looping. The total in the DOM is `real cards + 6 clones`.
  Do not change the card count without updating the clone logic.
- The services page sidebar uses IntersectionObserver with
  `rootMargin: '-30% 0px -60% 0px'` to track the active panel. The scroll-in
  animation observer uses `threshold: 0.08`.
- All scroll animations use IntersectionObserver and are disabled on mobile
  (`max-width: 767px` or `max-width: 899px` depending on the page).

---

## Before Launch Checklist
- [ ] Confirm actual pricing with Mike and Leslie — replace all [TBD] in services.html
- [ ] Rename `jet ski.jpg` → `jet-ski.jpg` and update src in index.html
- [ ] Set up Google Business listing (after site is live)
- [ ] Verify EmailJS template variables match form field names exactly
- [ ] Test contact form end-to-end — confirm email arrives at Lmalinmtl@gmail.com
- [ ] Test on real mobile device (not just browser DevTools)
- [ ] Submit sitemap to Google Search Console after launch

---

## Things Claude Should Never Do
- Do not use placeholder text like "Lorem ipsum" anywhere
- Do not invent specific pricing numbers — use [TBD] placeholders
- Do not invent testimonials or reviews — use the real 8 reviews already in index.html
- Do not mention any connection to a landscaping business (the Malins ran one
  previously — it should not appear on this site)
- Do not add features that require a backend server
- Do not use React or any JavaScript framework
- Do not add unnecessary pages or features beyond the four defined above
- Do not place the owner's personal email visibly in source code —
  route all contact through EmailJS only
- Do not use `overflow-x: hidden` on html/body — use `clip` instead
