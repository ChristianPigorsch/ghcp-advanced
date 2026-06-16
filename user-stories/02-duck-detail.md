# Story 2 — View a duck's detail page

**ID:** `duck-detail`
**Persona:** Quincy Quacker (customer)
**Priority:** MVP
**Depends on:** `browse-catalog`

## Story

> **As** a curious customer,
> **I want** to view the full details of a specific duck,
> **so that** I can read its backstory, personality traits and special powers before I buy it.

## Acceptance criteria

- Given a valid duck ID, the system returns the full duck record: name, category, price, tagline, long description, personality traits, and stock level ("In stock" / "Only 2 left" / "Sold out").
- An invalid or unknown ID returns a clear "duck not found" response (HTTP 404 if API, or a friendly error page if UI).
- The catalog list links/refers to detail pages by ID.

## Out of scope

- Customer reviews.
- "Related ducks" suggestions.

## Open questions

- What exactly are "personality traits"? Tags (`["judgmental", "philosophical"]`)? Free text? A small enum?
- How is stock level represented internally vs. shown to the customer?
- Should sold-out ducks still be visible on the detail page (with a "Sold out" banner) or hidden entirely?
