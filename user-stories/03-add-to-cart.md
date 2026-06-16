# Story 3 — Add ducks to a cart

**ID:** `add-to-cart`
**Persona:** Quincy Quacker (customer)
**Priority:** MVP
**Depends on:** `duck-detail`

## Story

> **As** an indecisive customer,
> **I want** to add multiple ducks to a cart and adjust the quantities,
> **so that** I can stage my purchase before paying.

## Acceptance criteria

- A customer can add a duck (by ID) to their cart, optionally with a quantity (default 1).
- A customer can change the quantity of any line item, or remove it entirely.
- A customer can view the current cart contents and a running total.
- Adding more than the available stock of a duck is rejected with a clear message.
- The cart is preserved within a single session. (Cross-session persistence is out of scope.)

## Out of scope

- User accounts or logins.
- Discounts, coupons, gift wrapping. (Tempting, but no.)
- Cross-session persistence.

## Open questions

- What identifies a "session"? A cookie? A header? A URL token? (Pick the simplest thing that works.)
- Should the cart store a snapshot of the price at add-time, or always re-read the current price?
- If a duck goes out of stock *while it's already in someone's cart*, what should happen at next view?
