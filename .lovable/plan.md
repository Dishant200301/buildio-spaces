

# Buildio* - Architecture & Interior Design Website

## Overview
A premium, dark-themed website for Buildio* - an architecture and interior design business. Built with React + TypeScript + Tailwind CSS, featuring smooth scroll animations, interactive elements, and a polished user experience.

---

## Pages (8 Total)

### 1. Home Page
- **Hero Section**: Full-width with badge, multi-line heading, description, CTA buttons, client logos marquee, and floating feature tags on hero image with rating card overlay
- **Past Work Marquee**: Infinite horizontal scroll of project images with alternating shapes
- **About/Who We Are**: Stats (15+ years, 21+ team members, etc.), content cards with bullet points
- **Services Preview**: 4 service cards with hover-to-reveal image effect
- **Projects Showcase**: 3 featured project cards with meta info (type, location)
- **Testimonials**: Infinite scrolling testimonial cards with ratings
- **Team Section**: 3 team member cards with social links
- **FAQ Accordion**: 5 expandable questions
- **CTA Image Section**: Full-width image with overlay card
- **Footer**: Brand info, navigation links, social links, background logo

### 2. About Page
- **Hero with Video**: Title, description, and video player with play button overlay
- **Our Story Section**: Quote-style card with interactive hoverable images
- **Proven Results**: Image + stats grid with count-up animation on scroll
- **Team Section**: Reusable team component

### 3. Services Page (Home scroll target)
- When clicking "Services" in nav, scrolls to services section on home page

### 4. Service Details Page (Dynamic)
- Back navigation button
- Service title, description, hero image
- Content sections: About, Approach, What's Included
- "Explore Other Services" grid (excludes current service)
- CTA component

### 5. Projects Page
- Header with badge, heading, description
- Project cards with meta info
- "View all projects" button

### 6. Project Details Page (Dynamic)
- Back navigation
- Project title, description, meta bar (type, location, area)
- Hero image
- Content sections: Concept, Process, Outcome
- Gallery images infinite scroll

### 7. Testimonials (Home scroll target)
- When clicking "Testimonials" in nav, scrolls to testimonials section on home page

### 8. Contact Page
- Header section with badge and heading
- Contact form: Full name, email, phone, service dropdown, message
- Contact info cards (clickable): Email, Phone, Address

### 9. 404 Page
- Centered layout with badge, heading, description
- "Go back to home" button

---

## Design System

### Theme
- **Background**: Dark (#0a0a0a / near-black)
- **Text**: White primary, #b8b8b8 muted
- **Accent**: Glass/blur effects with subtle borders (#5a5a5a)
- **Cards**: Dark surface with rounded corners
- **Buttons**: White/light for primary CTAs, glass effect for secondary

### Navigation
- Sticky navbar with backdrop blur
- Logo left, nav links center (About, Services, Projects, Testimonials)
- "Contact us" button right with white bg, black text

---

## Animations & Interactions

- **Scroll Fade-in**: Elements fade in smoothly as they enter viewport
- **Marquee**: Infinite horizontal scroll for images and testimonials
- **Count-up**: Numbers animate from 0 to target when visible
- **Hover Effects**: 
  - Service cards: Image slides in from right
  - Story images: Subtle rotation on hover
  - Cards: Elevation and glow effects
- **Video Player**: Click to play with smooth transitions

---

## Data Structure

### Services Data (`data/services.ts`)
- 4 services: Architectural Design, Interior Design, Space Planning, Space Decoration
- Each with slug, title, description, icon, images, content sections

### Projects Data (`data/projects.ts`)
- Multiple projects with slug, title, description, type, location, area, images, content

### Team Data (`data/team.ts`)
- Team members with name, role, image, social links

### Testimonials Data (`data/testimonials.ts`)
- Client reviews with name, role, rating, text, avatar

---

## Technical Features

- **React Helmet**: SEO meta tags for all pages
- **React Router**: Dynamic routing for service/project details
- **Smooth Scroll**: Navigation links scroll to sections
- **Responsive Design**: Desktop, tablet, mobile breakpoints
- **Image Optimization**: All images in `public/images/`
- **Reusable Components**: Navbar, Footer, CTA, Team, Badge, etc.

---

## File Structure
```
src/
├── components/
│   ├── layout/ (Navbar, Footer)
│   ├── home/ (Hero, Marquee, Services, Projects, etc.)
│   ├── about/ (StorySection, ProvenResults, etc.)
│   ├── shared/ (Badge, SectionHeader, CTA, TeamCard)
│   └── ui/ (existing shadcn components)
├── pages/
│   ├── Index.tsx (Home)
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── ProjectDetails.tsx
│   ├── ServiceDetails.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
├── data/
│   ├── services.ts
│   ├── projects.ts
│   ├── team.ts
│   └── testimonials.ts
└── hooks/
    └── useScrollAnimation.ts
```

---

## Deliverables

1. Complete 8-page website matching reference design
2. All interactive animations and effects
3. Fully responsive across all devices
4. SEO-ready with React Helmet
5. Clean, maintainable code structure
6. Placeholder images (you'll add real images to `public/images/`)

