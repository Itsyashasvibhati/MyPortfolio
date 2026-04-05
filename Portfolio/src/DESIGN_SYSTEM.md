# Portfolio Design System & Standardization Guide

## Overview
This document outlines the unified design system for the Yashasvi Bhati portfolio. All components follow consistent layout, fonts, colors, spacing, and styling patterns.

---

## 1. TYPOGRAPHY STANDARDS

### Heading Sizes
- **H1 (Hero Title)**: `text-4xl sm:text-5xl md:text-6xl` - 48px → 64px
- **H2 (Section Titles)**: `text-4xl md:text-5xl` - 36px → 48px
- **H3 (Card Titles)**: `text-xl font-semibold` - 20px
- **H4 (Sub-headings)**: `text-lg font-semibold` - 18px
- **Body Text**: `text-base` - 16px
- **Small Text**: `text-sm` - 14px

### Font Families
- **Headings**: Poppins, Sora (bold)
- **Body**: Inter, Poppins (normal weight)
- **Code**: JetBrains Mono, Courier New

---

## 2. COLOR PALETTE

### Primary Colors
- **Primary Pink**: `#ff9a9e` / `text-pink-500`
- **Accent Yellow**: `#ffd700` / `text-yellow-500`
- **Accent Orange**: `#ff8c42` / `text-orange-500`
- **Accent Purple**: `#a855f7` / `text-purple-500`

### Light Mode
- **Background**: `bg-white`
- **Text**: `text-black`
- **Secondary Text**: `text-gray-700`
- **Light Text**: `text-gray-600`
- **Cards**: `bg-gray-50`

### Dark Mode
- **Background**: `bg-black`
- **Text**: `text-white`
- **Secondary Text**: `text-gray-300`
- **Light Text**: `text-gray-400`
- **Cards**: `bg-[#1a1a1a]`

---

## 3. SPACING & LAYOUT

### Container
```
max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12
```

### Section Padding
```
py-16 md:py-20 lg:py-24
```

### Standard Gaps
- **Small Gap**: `gap-4`
- **Medium Gap**: `gap-6`
- **Large Gap**: `gap-8`
- **XL Gap**: `gap-10`

---

## 4. BUTTON STYLES

### Primary Button
```jsx
<Button variant="primary" darkMode={darkMode}>
  Contact Me →
</Button>
```
- Background: `from-orange-500 to-pink-500`
- Hover: `scale-105` with enhanced shadow

### Secondary Button
```jsx
<Button variant="secondary" darkMode={darkMode}>
  DM Me →
</Button>
```
- Background: `from-orange-500 to-yellow-500`

### Outline Button
```jsx
<Button variant="outline" darkMode={darkMode}>
  View Work →
</Button>
```
- Border-based styling with dark/light mode support

---

## 5. CARD COMPONENTS

All cards follow consistent styling:
```jsx
<Card darkMode={darkMode} hover={true}>
  {content}
</Card>
```

**Base Styles**:
- Padding: `p-6`
- Border Radius: `rounded-lg`
- Hover Effect: `hover:scale-105 hover:shadow-lg`
- Transition: `transition duration-300`

---

## 6. SECTION STRUCTURE

Every section should follow this pattern:

```jsx
<section
  id="section-id"
  className={`w-full py-16 md:py-20 lg:py-24 ${
    darkMode ? "bg-black text-white" : "bg-white text-black"
  }`}
>
  <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
    <SectionHeading
      label="Label"
      title="Main"
      titleAccent="Text"
      description="Optional description"
      darkMode={darkMode}
    />
    {/* Content */}
  </div>
</section>
```

---

## 7. DARK MODE IMPLEMENTATION

All components accept `darkMode` prop (default: `false`):

```jsx
// Light Mode Text
const text = darkMode ? "text-gray-300" : "text-gray-700";

// Dark Mode Classes
const cardBg = darkMode ? "bg-[#1a1a1a]" : "bg-gray-50";
```

---

## 8. ANIMATIONS & TRANSITIONS

### AOS (Animate On Scroll)
```jsx
<div data-aos="fade-up">Content</div>
<div data-aos="fade-right">Content</div>
<div data-aos="fade-left">Content</div>
<div data-aos="zoom-in">Content</div>
```

### Hover Effects
- Scale: `hover:scale-105`
- Shadow: `hover:shadow-lg`
- Duration: `transition duration-300`
- Color: `hover:text-yellow-500`

---

## 9. RESPONSIVE BREAKPOINTS

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Example:
```jsx
className="text-base sm:text-lg md:text-xl lg:text-2xl"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

---

## 10. COMPONENT CHECKLIST

### SectionHeading ✅
Used for all major section titles with consistent formatting.

### Button ✅
- Primary variant for main CTAs
- Secondary variant for alternative actions
- Outline variant for minimal style

### Card ✅
- Standard card with hover effects
- Consistent padding and border radius

### ServiceCard ✅
- Icon-based card for services/skills
- Centered text layout
- Always uses Card component

### SectionContainer ✅
- Wrapper for consistent section layout
- Handles background color variants

---

## 11. UPDATED COMPONENTS

✅ **Certification.jsx** - Using SectionHeading & standardized spacing
✅ **Skills.jsx** - Using Card component & SectionHeading
✅ **QAProject.jsx** - Using Button & Card components
✅ **SocialMedia.jsx** - Using SectionHeading & Card
✅ **HeroSection.jsx** - Using Button component with variants
✅ **Services.jsx** - Using ServiceCard & SectionHeading
✅ **About.jsx** - Using Button & SectionHeading
✅ **Contact.jsx** - Using SectionHeading, Button, & Card
✅ **Footer.jsx** - Consistent padding & spacing

---

## 12. COMPONENTS TO UPDATE

⏳ **EducationWork/EducationWork.jsx**
- Needs SectionHeading
- Standardize card styling
- Update spacing

⏳ **MyWork/Work.jsx**
- Use consistent grid layout
- Update button styling
- Standardize card styles

⏳ **CaseStudy/CaseStudy.jsx**
- Apply SectionHeading
- Use Card components

⏳ **GraphicWork/GraphicWork.jsx**
- Standardize layout
- Use reusable components

⏳ **NavbarSection/Navbar.jsx**
- Already good, minor refinements needed

---

## 13. USAGE EXAMPLES

### Creating a New Section

```jsx
import React from "react";
import { SectionHeading, Card, Button } from "../common/StyledComponents";

const MySection = ({ darkMode = false }) => {
  return (
    <section
      className={`w-full py-16 md:py-20 lg:py-24 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Heading */}
        <SectionHeading
          label="Label"
          title="Main"
          titleAccent="Accent"
          description="Description text"
          darkMode={darkMode}
        />

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Card
              key={item.id}
              darkMode={darkMode}
              hover={true}
              className="p-6"
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8">
          <Button
            href="#contact"
            variant="primary"
            darkMode={darkMode}
          >
            Get Started →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MySection;
```

---

## 14. GRADIENT EFFECTS

### Primary Gradient (Orange → Pink)
```
from-orange-500 to-pink-500
```

### Secondary Gradient (Purple → Pink)
```
from-purple-500 to-pink-500
```

### Gold Gradient (Yellow → Orange)
```
from-yellow-500 to-orange-500
```

Use with: `bg-gradient-to-r`, `text-gradient`, `border-gradient`

---

## 15. FINAL NOTES

- Always use `darkMode` prop for theme consistency
- Import reusable components from `common/StyledComponents`
- Follow the container and spacing patterns for alignment
- Use Tailwind CSS utility classes for consistency
- Update components incrementally to avoid breaking changes
- Test dark mode and light mode for all components
- Run `npm run build` before deployment

---

**Last Updated**: April 5, 2026
**Portfolio**: Yashasvi Bhati (yashasvibhati.com)
