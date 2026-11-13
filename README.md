# Lucky Cafe — Restaurant Ordering Prototype

A responsive React + TypeScript + Vite prototype inspired by the supplied Lucky Cafe website reference. The three menu posters are used only as the source of product names, categories and listed prices; their visual styling is not used.

## Run locally

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

To create a production build:

```bash
npm run build
npm run preview
```

## Included

- Home, Menu, Product Details, Cart, Checkout, Order Confirmation, About and Contact pages.
- Category filtering across all menu categories and live search.
- Product add-to-cart, quantity changes, removal and cart count.
- Cart persistence using localStorage.
- Demo coupon `LUCKY10` for 10% off.
- Delivery fee demo value ₹30 and 5% tax calculation.
- Checkout validation and pay-at-restaurant flow.
- Dynamically generated demo order IDs and confirmation timeline.
- Responsive desktop, tablet and mobile layouts.

## Notes

- This is a frontend prototype. It does not connect to a real payment gateway, database, authentication provider, delivery service or restaurant order system.
- Product photos are replaceable image URLs in `src/data/products.ts`. Replace these with the supplied individual food photos when available. The menu poster images themselves are not used as product photos.
- The cafe's phone number, email and street address are intentionally not invented. Contact details and map embed can be added once provided.
- The provided menu does not list large pizza prices, so no unlisted size prices have been invented.
