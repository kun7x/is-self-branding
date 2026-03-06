# Kundan Patil — Portfolio

A clean, minimal, professional portfolio website built with React + Vite + Tailwind CSS v4.

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```
Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deploys.

### Netlify
1. Push to GitHub
2. Connect repo at [netlify.com](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`

## Customizing Content

All content lives in **`src/data/content.json`**. Edit this single file to update:
- Personal info (name, tagline, bio, links)
- Projects (title, description, tech stack, case study details)
- Skills (technical categories + soft skills)
- Qualifications (education, certifications, publications)
- Contact info (email, social links, form action URL)

### Contact Form
The form uses [FormSubmit](https://formsubmit.co/). Update `contact.formAction` in `content.json` with your FormSubmit URL. Alternative: use Netlify Forms by adding `data-netlify="true"` to the form element.

## Design Tokens

Design tokens are exported in `src/data/designTokens.json` for Figma import or documentation. Colors, typography, spacing, radii, shadows, and transitions are all defined.

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Icons.jsx     # Custom SVG icon components
│   ├── Navbar.jsx    # Responsive navigation
│   ├── Footer.jsx    # Site footer
│   ├── Layout.jsx    # Page wrapper
│   ├── ScrollReveal.jsx  # Scroll animation
│   └── SectionHeading.jsx
├── pages/            # Route pages
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── ProjectDetail.jsx
│   ├── Skills.jsx
│   ├── Qualification.jsx
│   └── Contact.jsx
├── data/
│   ├── content.json      # All site content
│   └── designTokens.json # Design tokens
├── App.jsx           # Router setup
├── main.jsx          # Entry point
└── index.css         # Global styles + Tailwind
```

## Accessibility Checklist

- [x] Skip-to-content link
- [x] Semantic HTML (`header`, `main`, `footer`, `nav`, `section`, `article`)
- [x] ARIA labels on navigation, buttons, and landmarks
- [x] Focus-visible styles on all interactive elements
- [x] Mobile menu focus trap + Escape to close
- [x] Keyboard navigable (Tab, Enter, Escape)
- [x] Form labels and validation with `role="alert"`
- [x] Color contrast WCAG AA compliant
- [x] Meaningful alt text on images/SVGs

## Manual Test Checklist

- [ ] All 6 pages render correctly (Home, About, Projects, Skills, Qualification, Contact)
- [ ] Mobile hamburger menu opens/closes with animation
- [ ] Nav links highlight active page
- [ ] Project cards link to detail pages
- [ ] Qualification tabs filter correctly
- [ ] Contact form validates (empty submit, invalid email)
- [ ] Scroll reveal animations fire on scroll
- [ ] Responsive at 480px, 768px, 1024px, 1440px
- [ ] External links open in new tab

## Tech Stack

- **React 19** — UI framework
- **Vite 6** — Build tool
- **Tailwind CSS v4** — Utility-first styling
- **React Router v7** — Client-side routing

## License

MIT
