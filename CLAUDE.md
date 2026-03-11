# CLAUDE.md — Boats Galore Website Project

## Project Overview
We are building a professional business website for **Boats Galore**, a vehicle and
outdoor equipment storage business located in Dowagiac, Michigan. The owners are
Mike Malin and Leslie Malin. They store boats, RVs, snowmobiles, ATVs, jet skis,
trailers, and similar vehicles/equipment. They do NOT store cars, fifth wheels,
or anything easily damaged by indoor unheated storage.

The business has been operating for several years but has NO existing online
presence — no website, no Google Business listing, no social media.

---

## Business Details
- **Business Name:** Boats Galore
- **Owners:** Mike Malin and Leslie Malin
- **Address:** 55235 Garrett Rd, Dowagiac, MI 49047
- **Phone:** (269) 782-3090
- **Email:** Lmalinmtl@gmail.com
- **Domain:** boats-galore.com
- **Access Hours:** 24/7
- **New Customers:** Accepted year round
- **Storage Type:** Indoor only (unheated barn/warehouse). No outdoor storage currently.

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
- Customers who currently find the business through word of mouth

---

## Tone & Brand Direction
- **Premium and trustworthy** — not cheap, not corporate, not generic
- **Local and family-owned** — warm, community-rooted, established
- **Confident and simple** — clear information, easy to contact
- Reference for information/pricing structure: lunastoragesolutions.com/services-rates
  (use for content inspiration only, NOT for style or layout)

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
- All code must be clean, well-commented, and easy to update later

---

## Site Structure (Pages)

### 1. Home (index.html)
- Hero section with strong headline and CTA button ("Request Storage" or "Contact Us")
- Brief intro — who they are, what they offer, why trust them
- Key feature highlights: 24/7 access, security cameras and lighting,
  fast access when needed, pickup and drop-off service available
- Visual grid of vehicle types stored
- Pricing overview teaser with link to services page
- Testimonials section (placeholder structure — to be filled with real reviews)
- Final CTA section linking to contact page

### 2. Services & Pricing (services.html)
- What they store: boats, RVs, snowmobiles, ATVs, jet skis, trailers, and more
- What they do NOT store: cars, fifth wheels, items easily damaged by
  unheated indoor storage
- Storage type: Indoor unheated barn/warehouse
- Pricing section — use realistic placeholder pricing structure:
  - Small vehicles (snowmobiles, ATVs, jet skis): [TBD]/month or [TBD]/season
  - Medium vehicles (boats up to 24ft, small trailers): [TBD]/month or [TBD]/season
  - Large vehicles (boats 24ft+, RVs, large trailers): [TBD]/month or [TBD]/season
  - Note: "Pricing varies by vehicle size and storage duration.
    Contact us for an exact quote."
  - [OWNER TO CONFIRM ACTUAL RATES BEFORE LAUNCH]
- Special services:
  - 24/7 customer access
  - Faster access turnaround than most competitors in the area
  - Pickup and drop-off available (requires several days advance notice)
  - Security cameras and lighting on property

### 3. About (about.html)
- Family-owned and operated by Mike and Leslie Malin
- Based in Dowagiac, MI — conveniently located near Sister Lakes
- Years of experience serving the local community
- What makes them different: 24/7 access, personalized service,
  fast response times, pickup/drop-off convenience
- A brief statement about their commitment to keeping customers'
  vehicles safe and accessible

### 4. Contact (contact.html)
- Contact form: Full Name, Email, Phone, Vehicle Type (dropdown),
  Approximate Size/Length, Message/Questions
- Form submits via EmailJS to Lmalinmtl@gmail.com
- Phone and email displayed prominently:
  (269) 782-3090 | Lmalinmtl@gmail.com
- Address: 55235 Garrett Rd, Dowagiac, MI 49047
- Google Maps embed showing the location
- Note about response time: "We typically respond within 24 hours"

---

## Pricing Placeholder Guidelines
Until the owner confirms exact pricing, use this structure:
- Display pricing as tiers based on vehicle size
- Always include: "Pricing varies by vehicle size and storage duration.
  Contact us for a personalized quote."
- Use [TBD] markers wherever exact prices would go
- Structure the pricing section so real numbers can be swapped in easily later

---

## Special Services to Highlight
These are genuine differentiators — make them prominent:
- **24/7 Access** — customers can retrieve their vehicle any time, day or night
- **Faster than competitors** — quicker turnaround when customers need their vehicle
- **Pickup & Drop-off** — available with several days advance notice
- **Security** — cameras and lighting throughout the property
- **Indoor storage** — protected from Michigan weather year round

---

## SEO Requirements
Build these in from day one — do not add later:

- Each page must have a unique `<title>` tag and `<meta name="description">`
- Use semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`,
  proper heading hierarchy (one H1 per page, logical H2/H3 structure)
- Target keywords to weave naturally into copy:
  - "boat storage Dowagiac MI"
  - "RV storage near Sister Lakes"
  - "outdoor vehicle storage Michigan"
  - "snowmobile storage southwest Michigan"
  - "boat storage near me Dowagiac"
  - "24/7 vehicle storage Michigan"
- Add `alt` text to every image
- Ensure fast load times — optimize images, minimize CSS/JS
- Add a `sitemap.xml` and `robots.txt` file
- Add local business schema markup:
  Name: Boats Galore
  Address: 55235 Garrett Rd, Dowagiac, MI 49047
  Phone: (269) 782-3090
  Type: SelfStorage

---

## Contact Form (EmailJS Setup)
- Use EmailJS free tier
- Form fields: Full Name, Email, Phone, Vehicle Type (dropdown:
  Boat, RV, Snowmobile, ATV, Jet Ski, Trailer, Other),
  Approximate Size/Length, Message
- On submit: send email to Lmalinmtl@gmail.com
- Show clear success message to user after submission
- Add basic validation: required fields, valid email format
- Never expose EmailJS service ID or template ID in comments

---

## Design Direction
- **Color palette:** Deep navy blue (#0a1628) as primary, warm white (#fafaf8)
  for backgrounds, gold/amber (#c9943a) as accent. Conveys trust,
  premium quality, and the outdoors.
- **Typography:** A clean display font for headlines paired with a readable
  sans-serif for body. Avoid Arial, Roboto, generic system fonts.
  Suggest: Raleway or Playfair Display for headlines, DM Sans for body.
- **Layout:** Spacious, clean sections. Let content breathe.
  No cramped layouts, no cluttered sidebars.
- **Images:** High quality photos from Unsplash as placeholders.
  Search terms: "boat storage", "marina barn", "RV storage facility",
  "snowmobile storage", "Michigan lake boat"
- **Mobile-first:** Build mobile layout first, then desktop
- **CTA buttons** on every page — always give the user a clear next action
- No carousels, no auto-playing video or audio

---

## Things Claude Should Never Do
- Do not use placeholder text like "Lorem ipsum" anywhere
- Do not invent specific pricing numbers — use [TBD] placeholders
- Do not invent testimonials or reviews — use placeholder structure only
- Do not mention any connection to a landscaping business
- Do not add features that require a backend server
- Do not use React or any JavaScript framework
- Do not make the site look like a Squarespace or Wix template
- Do not add unnecessary pages or features beyond the four defined above
- Do not place the owner's personal email visibly in source code —
  route all contact through EmailJS only

---

## Development Workflow
1. Build and test locally first
2. Push to GitHub after each completed page
3. Vercel auto-deploys from GitHub main branch
4. Test on mobile after every significant change
5. Replace stock photo placeholders with real facility photos before final launch
6. Confirm pricing section with owner before sharing live link
7. Help owner set up Google Business listing after site launches
