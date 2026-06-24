# Reanty Landing Page

A responsive real estate landing page built with vanilla HTML, CSS, and JavaScript. No frameworks or build tools required.

## Overview

Reanty is a static landing page for a real estate brand, covering property listings, services, testimonials, blog posts, and a contact form. The layout is mobile-first and adapts across four breakpoints.

## Sections

- Top bar with contact info and social links
- Sticky navigation with mobile hamburger menu
- Commercial real estate highlights
- Dream home hero section
- About the agency
- Services overview
- Property listings with filterable tabs
- Unit showcase
- Client testimonials
- Call to action
- Blog / news articles
- Contact form
- Footer with newsletter subscription


## Project Structure

```
reanty-landing-page/
├── index.html           # Single-page markup
├── css/
│   ├── reset.css        # Cross-browser normalize
│   ├── style.css        # Global styles and CSS variables
│   └── responsive.css   # Breakpoint overrides
├── js/
│   └── main.js          # Hamburger menu, property tabs, form handling
├── images/
│   ├── logo.svg
│   ├── icons/           # SVG icons grouped by section
│   └── photos/          # Photography assets
└── README.md
```

## Getting Started

No installation needed. Serve the directory with any static file server.

**VS Code Live Server**

1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.
2. Right-click `index.html` and select **Open with Live Server**.
3. Open `http://127.0.0.1:5500` in your browser.


## Responsive Breakpoints

| Token | Width   | Layout changes                          |
|-------|---------|-----------------------------------------|
| sm    | 480px   | Property grid switches to 2 columns     |
| md    | 768px   | Navbar expands inline, hero grows taller |
| lg    | 1024px  | Property grid 3 columns, footer 4 columns |
| xl    | 1280px  | Hero minimum height increases to 680px  |

## CSS Architecture

Global design tokens are defined as CSS custom properties in `style.css`:

```css
:root {
  --brand: #FF5A3C;
  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Nunito', sans-serif;
  --radius-card: 12px;
  --shadow-card: 0 18px 28px rgba(0, 0, 0, 0.08);
}
```

All components reference these variables, making visual changes centralized.

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | 90+     |
| Firefox | 88+     |
| Safari  | 14+     |
| Edge    | 90+     |

## License

This project was created as part of a front-end development assessment.
