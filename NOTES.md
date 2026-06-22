# Boats Galore — Notes

## Scope

Professional website for Boats Galore — indoor vehicle and outdoor equipment storage in Dowagiac, MI. Owned by Mike and Leslie Malin (same as MTL Landscaping). Portfolio work — delivered free. Result: tripled organic leads in 6 months.

**Live at:** https://boats-galore.com
**GitHub:** kramirezingold/Boats-Galore
**Hosting:** Vercel (auto-deploy from main)
**Domain:** Namecheap

## Status

All 4 pages built and deployed. Site is live. Pre-launch checklist items still outstanding.

## Key Decisions

- **Vanilla HTML/CSS/JS** — no React, no frameworks. Simplest viable stack for a 4-page static site.
- **EmailJS** for contact form (free tier) — no backend needed
- **Design:** Navy (#0a1628) + gold (#b8963e) — premium, trustworthy, family-owned feel
- **Typography:** Playfair Display (headlines) + Raleway (sub-headlines/nav) + DM Sans (body)
- **Never mention connection to landscaping business** on this site — separate brand
- **`overflow-x: clip` not `overflow-x: hidden`** on html/body — hidden breaks sticky sidebar (critical rule)
- **Reviews carousel:** clones 3 cards before + after real cards for infinite loop — don't change card count without updating clone logic
- **Pricing:** all shown as [TBD] — needs client confirmation before hardcoding

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

- [ ] Confirm actual pricing with Mike and Leslie — replace all [TBD] in services.html
- [ ] Rename `jet ski.jpg` → `jet-ski.jpg` and update src in index.html
- [ ] Set up Google Business Profile listing
- [ ] Verify EmailJS template variables match form field names exactly
- [ ] Test contact form end-to-end — confirm email arrives at Lmalinmtl@gmail.com
- [ ] Test on real mobile device
- [ ] Submit sitemap to Google Search Console after launch

## Vault Sync Log

- 2026-06-22: initial sync — created projects/boats-galore/boats-galore-website.md
