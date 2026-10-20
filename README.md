# Noah Huffman — Portfolio

Personal resume and portfolio site for my software engineering work.

Built with Next.js, React, TypeScript, and Sass Modules.

## Structure and styles

- `app/components/<component>/` contains each standalone React component and its
  colocated `<component>.module.scss` stylesheet. Components remain Server
  Components unless they need browser-side state or interactions.
- Each route's `page.tsx` composes components; its `page.module.scss` owns only
  page layout.
- `app/globals.scss` contains document defaults, existing theme custom properties,
  selection colours, and shared focus styles. Component styles belong in modules.
- `app/stylesheets/_colours.scss` centralizes the existing palette.
- `app/stylesheets/_breakpoints.scss` defines the mobile-first
  `app-breakpoint-up` mixin (`sm`, `md`, `lg`, `xl`).
- `app/stylesheets/_layout.scss` shares the site container mixin without emitting
  global selectors.

Use `@use` for shared Sass partials, BEM-style nesting under the component's
kebab-case block, and `rem` for spacing. Keep colour values in the palette and
responsive rules inside their selectors using the breakpoint mixin.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Live site: [https://huffmansoftware.com](https://huffmansoftware.com)
