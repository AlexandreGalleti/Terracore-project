# Terracore Landscape & Hardscape - Website

## 📁 Project Structure

```
Terracore L&H/
├── terracore-website.html    # Main HTML file (organized with clear section comments)
├── css/                      # Modular CSS architecture
│   ├── variables.css         # Color palette & typography variables
│   ├── base.css              # Global reset & base styles
│   ├── nav.css               # Navigation bar styling
│   ├── hero.css              # Hero section
│   ├── services.css          # Services grid & CTA band
│   ├── gallery.css           # Portfolio gallery
│   ├── about.css             # About section
│   ├── testimonials.css      # Client testimonials
│   ├── faq.css               # FAQ section
│   ├── form.css              # Estimate form styling
│   └── footer.css            # Footer styling
├── tasks.txt                 # Project tasks and requirements
└── README.md                 # This file

```

## 🎨 Color Palette

**Greens:**
- Dark Green: `#1a2e1a`
- Mid Green: `#2d4f2d`
- Accent Green: `#4a7c59`
- Light Green: `#7aad82`

**Terra/Orange:**
- Primary: `#b85c38`
- Light: `#d4855f`

**Neutrals:**
- Cream: `#f5f0ea`
- Dark Cream: `#e8e0d5`
- Stone: `#8c7b6b`

## 📝 HTML Sections

The HTML file is organized into clear, commented sections:

1. **Navigation** - Fixed header with logo and CTA
2. **Hero** - Large banner section with headline and stats
3. **Why Choose Us** - 4-column grid of differentiators
4. **Services** - 6 service cards
5. **CTA Band** - Mid-page call-to-action
6. **Service Areas** - City/area pills (customize here)
7. **Portfolio** - Project gallery grid
8. **About** - Company story and features
9. **Testimonials** - 3 client reviews
10. **FAQ** - Frequently asked questions
11. **Estimate Form** - Lead capture form
12. **Footer** - Navigation links and contact

## 🔧 Customization

### Quick Updates:

**Phone Number:**
- Update in nav: line ~36
- Update in footer: line ~385

**Email:**
- Update in footer: line ~389

**Service Areas:**
- Replace "Area Name 1-12" in Service Areas section (lines ~184-195)

**Images:**
- Replace placeholder divs with actual images
- Hero image: line ~73
- Service images: lines ~125, 133, 140, etc.
- Portfolio images: lines ~207-225
- About image: line ~232

## 💻 CSS Architecture

CSS is split into modular files for maintainability:

- **variables.css** - All CSS custom properties (colors, fonts)
- **base.css** - Global styles, resets, utility classes
- **Component files** - Specific styling for each section

This structure allows:
- Easy color/font changes in one file
- Clear separation of concerns
- Easier debugging and updates
- Better performance (can be minified separately)

## 📱 Responsive Design

The layout includes mobile breakpoints:
- **900px and below** - Grid adjustments
- **600px and below** - Single column layouts, hidden nav elements

## 🚀 Features

- ✅ Smooth scroll behavior
- ✅ Fade-up animations on scroll (Intersection Observer)
- ✅ Responsive grid layouts
- ✅ Form submission feedback
- ✅ Glass-morphism effects (nav)
- ✅ SEO-optimized meta tags

---

**Last Updated:** 2025  
**Status:** Ready for content updates and image replacements
