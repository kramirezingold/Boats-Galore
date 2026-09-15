# Boats Galore — Notes

## Scope

Professional website for Boats Galore — indoor vehicle and outdoor equipment storage in Dowagiac, MI. Owned by Mike and Leslie Malin (same as MTL Landscaping). Portfolio work — delivered free. Result: tripled organic leads in 6 months.

**Deployed at:** Vercel URL (boats-galore.com domain not yet purchased as of 2026-09-15)
**GitHub:** kramirezingold/Boats-Galore
**Hosting:** Vercel (auto-deploy from main)
**Domain:** boats-galore.com planned via Namecheap — not yet bought

## Status

All 4 pages built and deployed to Vercel. Domain not yet purchased/connected. Pricing confirmed (no more [TBD]s). EmailJS contact form confirmed working (owner found login, verified setup). Pre-launch checklist mostly clear — see Outstanding.

## Key Decisions

- **Vanilla HTML/CSS/JS** — no React, no frameworks. Simplest viable stack for a 4-page static site.
- **EmailJS** for contact form (free tier) — no backend needed
- **Design:** Navy (#0a1628) + gold (#b8963e) — premium, trustworthy, family-owned feel
- **Typography:** Playfair Display (headlines) + Raleway (sub-headlines/nav) + DM Sans (body)
- **Never mention connection to landscaping business** on this site — separate brand.
  Exception found 2026-09-15: About page story copy (_content/about.json, story_p1)
  does mention it. Owner reviewed, okayed leaving as-is.
- **`overflow-x: clip` not `overflow-x: hidden`** on html/body — hidden breaks sticky sidebar (critical rule)
- **Reviews carousel:** clones 3 cards before + after real cards for infinite loop — don't change card count without updating clone logic
- **Pricing:** confirmed and hardcoded, no more [TBD]s

**EmailJS credentials:**
- Public Key: PihDcOwei2Nh1fjSQ
- Service ID: service_dybhya9
- Template ID: template_gjtuwz8

## Client & Pricing

- **Client:** Mike and Leslie Malin
- **Email:** Lmalinmtl@gmail.com
- **Phone:** (269) 782-3090
- **Address:** 55235 Garrett Rd, Dowagiac, MI 49047
- **Pricing:** Free (portfolio). No paid engagement.

## Outstanding

- [x] Confirm actual pricing with Mike and Leslie — replace all [TBD] in services.html
- [x] Rename `jet ski.jpg` → `jet-ski.jpg` and update src in index.html
- [x] Verify EmailJS template variables match form field names exactly
- [x] Test contact form end-to-end — owner confirmed EmailJS login/setup works
- [ ] **Purchase boats-galore.com domain** — biggest remaining blocker to actually going live
- [ ] Set up Google Business Profile listing (after site is live)
- [ ] Test on real mobile device
- [ ] Submit sitemap to Google Search Console after launch

## Vault Sync Log

- 2026-06-22: initial sync — created projects/boats-galore/boats-galore-website.md
