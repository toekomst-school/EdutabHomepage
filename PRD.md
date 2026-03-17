# PRD: Products Section - Navigation Dropdown and Product Pages

## Introduction

Add a "Products" navigation section to the EduTab website with a dropdown menu containing 4 product pages (Ecosystem, Tablets, Portal, App Marketplace). The dropdown will be hover-triggered on desktop and click/tap accordion-style on mobile/tablet. Each product page will follow the existing homepage structure with full-viewport photo heroes and fluid responsive design.

## Goals

- Add "Products" dropdown to main navigation with 4 submenu items
- Desktop: Hover-triggered dropdown with keyboard accessibility
- Mobile/Tablet: Click/tap accordion expansion in mobile drawer
- Create 4 new product pages matching homepage structure and aesthetic
- Maintain WCAG 2.1 AA accessibility compliance
- Use existing components (Section, Reveal, Button) for consistency

## User Stories

---

### US-001: Extend NavItem interface for dropdown support
**Description:** As a developer, I need the NavItem interface to support nested children so the navigation can render dropdown menus.

**Complexity Score:** 7 (Pages:0, Files_to_read:2, Files_to_modify:1, Criteria:3, Breakpoints:0, Browsers:0, Unknowns:0)

**Files to Read:**
- `/src/lib/components/layout/Header.svelte` - Current NavItem interface
- `/src/lib/components/layout/MobileMenuDrawer.svelte` - NavItem interface usage

**Files to Modify:**
- `/src/lib/components/layout/Header.svelte` - Extend NavItem interface

**Acceptance Criteria:**
- [x] Add optional `children?: NavItem[]` to NavItem interface
- [x] Add optional `href?: string` (parent items don't need href)
- [x] Typecheck passes

---

### US-002: Add desktop dropdown to Header navigation
**Description:** As a desktop user, I want to hover over "Products" to see a dropdown menu with product links so I can navigate to product pages easily.

**Complexity Score:** 18 (Pages:0, Files_to_read:3, Files_to_modify:1, Criteria:10, Breakpoints:0, Browsers:0, Unknowns:1)

**Files to Read:**
- `/src/lib/components/layout/Header.svelte` - Current navigation structure
- `/src/lib/components/Accordion.svelte` - ARIA patterns reference
- `/tailwind.config.js` - Styling patterns

**Files to Modify:**
- `/src/lib/components/layout/Header.svelte` - Add dropdown functionality

**Acceptance Criteria:**
- [x] Add "Products" nav item with children to navItems array
- [x] ChevronDown icon shows next to "Products" label
- [x] Hover triggers dropdown visibility (group-hover pattern)
- [x] Dropdown panel has white background, shadow, rounded corners
- [x] Dropdown items: Ecosystem, Tablets, Portal, App Marketplace
- [x] Links have hover states (primary-green/10 background)
- [x] aria-expanded attribute on trigger button
- [x] aria-haspopup="true" on trigger button
- [x] Typecheck passes
- [x] Verify changes work in browser

---

### US-003: Add keyboard navigation to desktop dropdown
**Description:** As a keyboard user, I want to navigate the Products dropdown using keyboard keys so I can access product pages without a mouse.

**Complexity Score:** 14 (Pages:0, Files_to_read:2, Files_to_modify:1, Criteria:8, Breakpoints:0, Browsers:0, Unknowns:1)

**Files to Read:**
- `/src/lib/components/layout/Header.svelte` - Dropdown implementation
- `/src/lib/components/Accordion.svelte` - Keyboard navigation reference

**Files to Modify:**
- `/src/lib/components/layout/Header.svelte` - Add keyboard handlers

**Acceptance Criteria:**
- [x] Enter/Space toggles dropdown open/close
- [x] Escape closes dropdown and returns focus to trigger
- [x] ArrowDown moves focus to next dropdown item
- [x] ArrowUp moves focus to previous dropdown item
- [x] Tab from last item closes dropdown
- [x] role="menu" on dropdown container
- [x] role="menuitem" on each dropdown link
- [x] Typecheck passes

---

### US-004: Add accordion expansion to MobileMenuDrawer
**Description:** As a mobile/tablet user, I want to tap "Products" to expand an accordion menu showing product links so I can navigate on touch devices.

**Complexity Score:** 14 (Pages:0, Files_to_read:2, Files_to_modify:1, Criteria:8, Breakpoints:0, Browsers:0, Unknowns:1)

**Files to Read:**
- `/src/lib/components/layout/MobileMenuDrawer.svelte` - Current implementation
- `/src/lib/components/layout/Header.svelte` - Updated NavItem interface

**Files to Modify:**
- `/src/lib/components/layout/MobileMenuDrawer.svelte` - Add accordion

**Acceptance Criteria:**
- [x] Add expandedItem state for tracking which item is expanded
- [x] "Products" shows with ChevronDown icon
- [x] Tap "Products" toggles accordion expand/collapse
- [x] Chevron rotates 180° on expand
- [x] Child links render in indented list when expanded
- [x] aria-expanded on accordion trigger
- [x] Clicking a child link closes the drawer
- [x] Typecheck passes
- [x] Verify changes work in browser

---

### US-005: Create ProductHero component
**Description:** As a developer, I need a reusable hero component for product pages so all product pages have consistent hero sections.

**Complexity Score:** 16 (Pages:0, Files_to_read:3, Files_to_modify:1, Criteria:8, Breakpoints:0, Browsers:0, Unknowns:1)

**Files to Read:**
- `/src/lib/components/sections/Hero.svelte` - Pattern reference
- `/src/lib/components/ui/button/button.svelte` - Button component
- `/src/lib/styles/app.css` - CSS custom properties

**Files to Modify:**
- `/src/lib/components/sections/ProductHero.svelte` - CREATE NEW FILE

**Acceptance Criteria:**
- [x] Props interface: title, subtitle, backgroundImage, primaryCta?, secondaryCta?, trialInfo?
- [x] Full viewport height (min-h-[31.25rem])
- [x] Background image with object-cover
- [x] Gradient overlay (from-black/40 via-black/30 to-black/50)
- [x] Green accent gradient at bottom (from-primary-green/20)
- [x] Uses CSS custom properties for fluid typography
- [x] CTA buttons use coral primary color
- [x] Typecheck passes

---

### US-006: Create Ecosystem page - Hero and SEO
**Description:** As a visitor, I want to see the Ecosystem page with a hero section and proper SEO metadata.

**Complexity Score:** 13 (Pages:1, Files_to_read:3, Files_to_modify:1, Criteria:5, Breakpoints:0, Browsers:0, Unknowns:0)

**Files to Read:**
- `/src/lib/components/sections/ProductHero.svelte` - Hero component
- `/newpages/ecosystem.md` - YAML frontmatter for SEO data
- `/src/routes/+page.svelte` - SEO pattern reference

**Files to Modify:**
- `/src/routes/ecosystem/+page.svelte` - CREATE NEW FILE

**Acceptance Criteria:**
- [x] Route created at /src/routes/ecosystem/+page.svelte
- [x] svelte:head with title, description, keywords, og tags, canonical
- [x] ProductHero with /ecosystem.png background
- [x] Hero title from ecosystem.md frontmatter
- [x] Typecheck passes
- [x] Verify changes work in browser

---

### US-007: Create Ecosystem page - Content sections
**Description:** As a visitor, I want to see content sections on the Ecosystem page explaining the EduTab platform.

**Complexity Score:** 18 (Pages:1, Files_to_read:3, Files_to_modify:1, Criteria:8, Breakpoints:0, Browsers:0, Unknowns:1)

**Files to Read:**
- `/newpages/ecosystem.md` - Content structure (H2/H3 sections)
- `/src/lib/components/sections/Section.svelte` - Section wrapper
- `/src/lib/components/Reveal.svelte` - Scroll animation

**Files to Modify:**
- `/src/routes/ecosystem/+page.svelte` - Add content sections

**Acceptance Criteria:**
- [x] Introduction section with hero context
- [x] Feature/benefit sections from markdown H2 headings
- [x] Each section uses Section component with variant
- [x] Reveal wrapper on all content sections
- [x] Final CTA section with buttons
- [x] Content matches markdown structure
- [x] Typecheck passes
- [x] Verify changes work in browser

---

### US-008: Create Tablets page - Hero and SEO
**Description:** As a visitor, I want to see the Tablets page with a hero section and proper SEO metadata.

**Complexity Score:** 13 (Pages:1, Files_to_read:3, Files_to_modify:1, Criteria:5, Breakpoints:0, Browsers:0, Unknowns:0)

**Files to Read:**
- `/src/lib/components/sections/ProductHero.svelte` - Hero component
- `/newpages/tablets.md` - YAML frontmatter for SEO data
- `/src/routes/+page.svelte` - SEO pattern reference

**Files to Modify:**
- `/src/routes/tablets/+page.svelte` - CREATE NEW FILE

**Acceptance Criteria:**
- [x] Route created at /src/routes/tablets/+page.svelte
- [x] svelte:head with title, description, keywords, og tags, canonical
- [x] ProductHero with /tablets.png background
- [x] Hero title from tablets.md frontmatter
- [x] Typecheck passes
- [x] Verify changes work in browser

---

### US-009: Create Tablets page - Content sections
**Description:** As a visitor, I want to see content sections on the Tablets page explaining EduTab's school tablets.

**Complexity Score:** 18 (Pages:1, Files_to_read:3, Files_to_modify:1, Criteria:8, Breakpoints:0, Browsers:0, Unknowns:1)

**Files to Read:**
- `/newpages/tablets.md` - Content structure
- `/src/lib/components/sections/Section.svelte` - Section wrapper
- `/src/lib/components/Reveal.svelte` - Scroll animation

**Files to Modify:**
- `/src/routes/tablets/+page.svelte` - Add content sections

**Acceptance Criteria:**
- [x] Introduction section with product overview
- [x] Feature/spec sections from markdown content
- [x] Each section uses Section component with variant
- [x] Reveal wrapper on all content sections
- [x] Final CTA section with buttons
- [x] Content matches markdown structure
- [x] Typecheck passes
- [x] Verify changes work in browser

---

### US-010: Create Portal page - Hero and SEO
**Description:** As a visitor, I want to see the Portal page with a hero section and proper SEO metadata.

**Complexity Score:** 13 (Pages:1, Files_to_read:3, Files_to_modify:1, Criteria:5, Breakpoints:0, Browsers:0, Unknowns:0)

**Files to Read:**
- `/src/lib/components/sections/ProductHero.svelte` - Hero component
- `/newpages/portal.md` - YAML frontmatter for SEO data
- `/src/routes/+page.svelte` - SEO pattern reference

**Files to Modify:**
- `/src/routes/portal/+page.svelte` - CREATE NEW FILE

**Acceptance Criteria:**
- [x] Route created at /src/routes/portal/+page.svelte
- [x] svelte:head with title, description, keywords, og tags, canonical
- [x] ProductHero with /portal.png background
- [x] Hero title from portal.md frontmatter
- [x] Typecheck passes
- [x] Verify changes work in browser

---

### US-011: Create Portal page - Content sections
**Description:** As a visitor, I want to see content sections on the Portal page explaining EduTab's MDM software.

**Complexity Score:** 19 (Pages:1, Files_to_read:3, Files_to_modify:1, Criteria:9, Breakpoints:0, Browsers:0, Unknowns:1)

**Files to Read:**
- `/newpages/portal.md` - Content structure (largest file at 11,301 bytes)
- `/src/lib/components/sections/Section.svelte` - Section wrapper
- `/src/lib/components/Reveal.svelte` - Scroll animation

**Files to Modify:**
- `/src/routes/portal/+page.svelte` - Add content sections

**Acceptance Criteria:**
- [x] Introduction section with MDM overview
- [x] Feature sections from markdown content
- [x] Pricing/spec table if present in markdown
- [x] Each section uses Section component with variant
- [x] Reveal wrapper on all content sections
- [x] Final CTA section with buttons
- [x] Content matches markdown structure
- [x] Typecheck passes
- [x] Verify changes work in browser

---

### US-012: Create App Marketplace page - Hero and SEO
**Description:** As a visitor, I want to see the App Marketplace page with a hero section and proper SEO metadata.

**Complexity Score:** 13 (Pages:1, Files_to_read:3, Files_to_modify:1, Criteria:5, Breakpoints:0, Browsers:0, Unknowns:0)

**Files to Read:**
- `/src/lib/components/sections/ProductHero.svelte` - Hero component
- `/newpages/appMarketplace.md` - YAML frontmatter for SEO data
- `/src/routes/+page.svelte` - SEO pattern reference

**Files to Modify:**
- `/src/routes/app-marketplace/+page.svelte` - CREATE NEW FILE

**Acceptance Criteria:**
- [x] Route created at /src/routes/app-marketplace/+page.svelte
- [x] svelte:head with title, description, keywords, og tags, canonical
- [x] ProductHero with /AppMarketplace.png background
- [x] Hero title from appMarketplace.md frontmatter
- [x] Typecheck passes
- [x] Verify changes work in browser

---

### US-013: Create App Marketplace page - Content sections
**Description:** As a visitor, I want to see content sections on the App Marketplace page explaining EduTab's educational app store.

**Complexity Score:** 19 (Pages:1, Files_to_read:3, Files_to_modify:1, Criteria:9, Breakpoints:0, Browsers:0, Unknowns:1)

**Files to Read:**
- `/newpages/appMarketplace.md` - Content structure (11,063 bytes)
- `/src/lib/components/sections/Section.svelte` - Section wrapper
- `/src/lib/components/Reveal.svelte` - Scroll animation

**Files to Modify:**
- `/src/routes/app-marketplace/+page.svelte` - Add content sections

**Acceptance Criteria:**
- [x] Introduction section with app store overview
- [x] Feature/category sections from markdown content
- [x] App showcase sections if present
- [x] Each section uses Section component with variant
- [x] Reveal wrapper on all content sections
- [x] Final CTA section with buttons
- [x] Content matches markdown structure
- [x] Typecheck passes
- [x] Verify changes work in browser

---

## Non-Goals

- No authentication or user account features
- No dynamic content management (pages are static)
- No product filtering or search functionality
- No shopping cart or e-commerce features
- No multi-language support in this phase
- No A/B testing or analytics integration

## Technical Considerations

### Existing Components to Reuse
- `Section.svelte` - Section wrapper with variants (default, accent, dark)
- `Reveal.svelte` - Scroll-triggered animation wrapper
- `Button.svelte` - Coral primary buttons
- `Accordion.svelte` - Keyboard navigation and ARIA patterns reference

### Design System
- CSS custom properties for fluid typography
- Tailwind breakpoints: sm:640px, md:820px, lg:1024px, xl:1280px
- Colors: primary-coral (#FF6B35), primary-green (#4CAF50), mintCream (#F0FFF4)
- Fonts: Outfit (display), Plus Jakarta Sans (body)

### Accessibility Requirements
- WCAG 2.1 AA contrast ratios (4.5:1 for text)
- Keyboard navigation for dropdown
- ARIA attributes (aria-expanded, aria-haspopup, role="menu")
- Focus management and indicators

## Agent Execution Guidelines

### Agent Selection
| Criteria | Subagent Type |
|----------|---------------|
| "Verify accessibility standards (WCAG AA)" | `ui-ux-designer` |
| Task involves UX patterns or accessibility design | `ui-ux-designer` |
| "Verify responsive design" | `ui-ux-designer` |

### Verification Protocols

**A. Typecheck (always required)**
- Run: `npm run check`
- If fails → fix → retry

**B. Browser Verification ("Verify changes work in browser")**
- Ensure dev server running: `curl -s http://localhost:5173 >/dev/null || (npm run dev &)`
- Use Playwright MCP tools:
  1. `browser_navigate` to the dev server URL
  2. `browser_snapshot` to get accessibility tree
  3. `browser_console_messages` with level "error"
- Verify no console errors and expected elements present

**C. Visual Verification ("Verify visual balance and component completeness")**
- Use Playwright to capture screenshot
- Use `mcp__zai-mcp-server__analyze_image` to evaluate visual quality

### Completion Criteria

**If ALL verifications pass:**
- Mark task complete in PRD.md (change `[ ]` to `[x]`)
- Commit changes with message: `feat: [task description]`
- Append success to `progress.txt`

**If ANY verification fails:**
- Do NOT mark task complete
- Do NOT commit broken code
- Append issue to `progress.txt`
