# Services Dropdown — Contact Form

**Date:** 2026-05-11
**Status:** Approved

## Summary

Add an optional multi-select dropdown field to the contact form in `contact.html` that lets users check off which services they're interested in. Selected values are collected in a hidden input and sent via EmailJS.

## Placement

New `.form-group` block inserted between the drop-off date row and the "How did you hear about us?" field.

## Field Details

- **Label:** Services Interested In (no required asterisk — optional)
- **Input name:** `services` (hidden `<input type="hidden">` collects final value)
- **Default button text:** "Select services..."
- **Selected state text:** Comma-separated list of checked labels, e.g. "Winterization, Maintenance"

## Options (6 total)

1. Seasonal Storage
2. Winterization
3. Cleaning & Wash
4. Maintenance
5. Pickup & Drop-Off
6. Custom Requests

## Behavior

- Click button → dropdown panel opens below button with 6 labeled checkboxes
- Each checkbox toggles independently
- Button label updates live as user checks/unchecks items
- Click outside panel or press Escape → panel closes
- Hidden input value set to comma-separated string of checked labels on each change
- If nothing checked, hidden input value is empty string (field is optional — no validation needed)

## Styling

- Button matches existing form `<input>` elements: same border (`--border`), border-radius, font (DM Sans), padding, height
- Button has a down-arrow indicator (▾) on the right
- Dropdown panel: `--white` background, `--border` border, `box-shadow: 0 4px 12px rgba(0,0,0,0.08)`, `border-radius: 6px`
- Checkboxes use `accent-color: var(--gold)` for brand consistency
- Panel z-index high enough to overlay form fields below it

## EmailJS Integration

- `services` field added as hidden input with `name="services"` — EmailJS `sendForm` picks it up automatically
- Add `{{services}}` to the EmailJS template `template_gjtuwz8` to display selected services in the email body

## Files Changed

- `contact.html` — add field HTML + JS for dropdown toggle/close behavior
- EmailJS dashboard — add `{{services}}` variable to template (manual step, not a code change)

## Out of Scope

- No changes to other pages
- No backend required
- Shrink Wrap intentionally excluded per client request
