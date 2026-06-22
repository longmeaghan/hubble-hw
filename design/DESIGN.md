DESIGN.md
17.0 KB


Design system context:
Treat this as supplemental design-system guidance for the prompt. Preserve its colors, typography, spacing rhythm, shapes, elevation, component styling, animation direction, polish rules, icon direction, accessibility cues, and motion preferences. If this conflicts with a direct screenshot, source HTML, or explicit user request, the direct source wins.
Selected design-system settings:
Page section types to include: Hero, Features, Testimonials, Footer. Treat these as content requirements, then choose the natural information architecture and page flow for the product instead of following the list order. Hero: Use a strong above-the-fold hero that establishes the offer, visual direction, primary action, and brand tone. Features: Include a clear features section that turns capabilities into concrete user benefits with scannable structure. Testimonials: Include testimonials or proof points that make the page feel credible without overwhelming the main conversion path. Footer: Include a polished footer with grounded navigation, contact paths, brand details, and any necessary secondary links.
Animation: Masked Reveal, GSAP ScrollTrigger, Rich Interactions, In-view Cascade, Smooth Scroll, Magnetic Buttons. Masked Reveal: Create masked staggered word reveal on scroll with GSAP ScrollTrigger. GSAP ScrollTrigger: Create a GSAP ScrollTrigger experience with sticky product storytelling, progressive UI reveals, scroll-synced animations, smooth interpolation, cinematic aesthetic, and immersive transitions between sections. Rich Interactions: Add rich micro-interactions on every interactive element, including buttons, cards, links, controls, inputs, and media hovers. In-view Cascade: Animate when in view using observers: fade in, slide in, blur in, and reveal element by element with staggered timing. Smooth Scroll: Add smooth scroll with Lenis or locomotive-scroll, using refined scroll smoothing, momentum, and careful fallback behavior so the page feels premium without breaking native navigation. Magnetic Buttons: Add Awwwards-style button animations with magnetic hover, fluid movement, smooth interpolation, and cinematic polish.
Icons: Solar Linear, Solar Duotone Bold, Solar Broken, Lucide, MingCute Line, MingCute Fill, IconaMoon, Basil. Solar Linear: Use Solar Linear icons for clean, consistent stroke-based interface and feature iconography. Solar Duotone Bold: Use Solar Duotone Bold icons for stronger, two-tone visual emphasis in hero, feature, and callout moments. Solar Broken: Use Solar Broken icons for expressive broken-line icon styling with a more distinctive technical feel. Lucide: Use Lucide icons for crisp, lightweight, minimal line iconography across interface controls and supporting UI. MingCute Line: Use MingCute Line icons for rounded, friendly, modern stroke icons with consistent optical weight. MingCute Fill: Use MingCute Fill icons for filled, compact icon moments that need more visual weight than line icons. IconaMoon: Use IconaMoon icons for polished, simple, contemporary iconography with a balanced UI feel. Basil: Use Basil icons for soft, approachable iconography with a refined product-app character.


Design System

HTML + JS
Gemini 3.1 Pro

Remix
•
206
Recently Featured

Browse Featured
Preview for NOIRFRAME Editorial Fashion Landing Page Template
DESIGN.md

Copy prompt
NOIRFRAME Editorial Fashion Landing Page Template

PRO
Sourasith Phomhome
Sourasith Phomhome


Remix
•
178
Preview for Cleaning Services Landing Page TemplateReact
DESIGN.md

Copy prompt
Cleaning Services Landing Page Template


Remix
•
1.4k
Preview for Fluxa AI Finance Landing Page Template
DESIGN.md

Copy prompt
Fluxa AI Finance Landing Page Template

Sourasith Phomhome
Sourasith Phomhome

Remix
•
1.4k
Pro Templates

Browse Pro Templates
Preview for AI Interior Design Studio Landing Page Template
DESIGN.md

Copy prompt
AI Interior Design Studio Landing Page Template

PRO
S
Sam

Remix
•
4.5k
Preview for Novi SaaS Social Automation Platform Template
DESIGN.md

Copy prompt
Novi SaaS Social Automation Platform Template

PRO
Sourasith Phomhome
Sourasith Phomhome

Remix
•
3.5k
Preview for Elara Footwear Atelier E-commerce TemplateReact
DESIGN.md

Copy prompt
Elara Footwear Atelier E-commerce Template

PRO
Aksonvady Phomhome
Aksonvady Phomhome

Remix
•
2.9k
Paid Templates

Browse Paid Templates
Preview for Creative Studio Website Template
Creative Studio Website Template

$29
S
Sam

3.6k
Preview for Executive Coaching Landing Page Template
Executive Coaching Landing Page Template

$19
Marius Berg
Marius Berg

2.1k
Preview for Nexus AI Consulting Landing Page Template
Nexus AI Consulting Landing Page Template

$39
Meng To
Meng To

© 2026 Aura. All rights reserved. Made with Cursor.


---

version: alpha
name: Hubble Network
description: A futuristic, deep-space industrial visual language for global IoT connectivity. The site uses high-contrast dark themes, celestial imagery, and technical blueprints to convey a sense of 'space-grade' reliability.
colors:
  primary: "#5761FF"
  secondary: "#8C30DC"
  background: "#060826"
  surface: "#0A0F5C"
  text: "#FFFFFF"
  text-muted: "#B8A4FA"
  accent-purple: "#A04AE8"
  accent-blue: "#272FA3"
  border: "#FFFFFF33"
typography:
  family: "'Instrument Sans', sans-serif"
  monospace: "'Inconsolata', monospace"
  h1: { size: "clamp(3rem, 5vw, 5rem)", weight: 600, lineHeight: 1.1, letterSpacing: "-0.02em" }
  h2: { size: "clamp(2.5rem, 4vw, 4rem)", weight: 600, lineHeight: 1.1 }
  body-lg: { size: "1.25rem", weight: 400, lineHeight: 1.5 }
  body-md: { size: "1.125rem", weight: 400, lineHeight: 1.5 }
  eyebrow: { size: "1.375rem", weight: 400, family: "{typography.monospace}" }
spacing:
  section: "clamp(4rem, 7vw, 7rem)"
  gutter: "1.5rem"
  container-max: "78rem"
rounded:
  small: "0.5rem"
  main: "1rem"
  card: "20px"
  pill: "100vw"
components:
  button-primary:
    background: "{colors.primary}"
    text: "{colors.text}"
    radius: "{rounded.small}"
    padding: "0.5em 1.5em"
  card-glass:
    background: "rgba(19, 20, 40, 0.75)"
    border: "1px solid {colors.border}"
    radius: "{rounded.card}"

---

##
 Overview

Hubble Network employs a "Dark Matter" aesthetic, characterized by deep navy and purple gradients that simulate the cosmos. The visual density is airy but structured, relying on a rigorous grid system that organizes complex technical information. The tone is authoritative and visionary, blending high-fidelity 3D renders of hardware with ethereal satellite views of Earth. Motion is subtly suggested through background radial gradients that imply light radiating from stars or electronic signals.
##
 Colors

The palette is dominated by the "Cosmic Dawn" gradient, a mix of Blurple (#5761FF) and Deep Purple (#8C30DC). Backgrounds use a tiered approach: the base is a nearly black Blue-950 (#060826), while interactive sections and cards use Blue-900 (#0A0F5C). Text is primarily white with high-transparency variations (80% opacity) used for secondary body copy to maintain hierarchy without sacrificing legibility against the dark background. Vibrant accents in teal and magenta are reserved for high-priority calls to action and technical status indicators.
##
 Typography

The typeface "Instrument Sans" serves as the primary font, chosen for its clean, geometric forms that feel both human and engineered. It is used in variable weights from Regular (400) to Semibold (600). Typography tokens follow a fluid scaling model (clamp) to ensure headlines maintain impact across devices. "Inconsolata" is utilized as a secondary monospace font for eyebrows and technical metadata, reinforcing the "developer-first" and "high-tech" positioning of the network.
##
 Layout

The layout is built on a 9-column grid system with a maximum content width of 78rem. It uses a "Breakout" pattern where visual assets (like the Earth/Satellite imagery) extend to the viewport edges while text remains containerized. Spacing is governed by a fluid rhythm (Space 1 through 9), providing generous vertical breathing room between sections (often 7rem or more) to allow the heavy imagery and dark gradients to feel expansive rather than claustrophobic.
##
 Elevation & Depth

Depth is achieved through layering rather than traditional drop shadows. The site uses "Unified Background Wraps" involving fixed radial gradients that stay stationary as the user scrolls, creating a parallax-like sense of looking into deep space. Cards utilize a glassmorphism approach with slight fills (color-mix at 10-20%) and thin borders to separate themselves from the atmospheric background. Some specific 3D elements, such as the Bluetooth chip, use glowing outer glows (filters) to simulate light emission.
##
 Shapes

The geometric language is a blend of hard industrial lines and soft organic curves. Corner radii are consistent: 0.5rem for buttons and small interactive elements, and 20px for larger content cards. Iconic language uses 64px containers with 3.5px rounded rectangles as bases. A distinctive geometric motif is the use of thin, horizontal 1px strokes that extend across containers, mimicking technical schematics or planetary horizons.
##
 Components

Key components include the Smart Nav, which transitions from transparent to solid Blue-950 on scroll. Cards are treated with specific gradients: 'purple' for software-focused items and 'blue' for hardware kits. The 'Choice Box' is a specialized container used for the developer path selection, featuring high-fidelity 3D assets on top of tiered glass containers. Buttons come in three main variants: a high-contrast Purple fill, a 'Teal' secondary, and a minimal 'Outline' for documentation links.
##
 Do's and Don'ts

-
 
**
Do
**
 use high-contrast white text against the dark backgrounds for accessibility.
-
 
**
Do
**
 utilize fluid typography and spacing to maintain the airy, celestial feel on mobile.
-
 
**
Do
**
 maintain the subtle glow effects on icons and chips to emphasize the 'connectivity' theme.
-
 
**
Don't
**
 use solid black (#000000); always use the brand's deep navy neutrals to preserve depth.
-
 
**
Don't
**
 use standard shadows; rely on border-weight and surface transparency for elevation.
-
 
**
Don't
**
 clutter the grid; the Hubble look requires significant whitespace (negative space).
##
 Accessibility

Hubble maintains a high standard of focus visibility, using an outline-offset and a focus-width of 0.125rem. The primary blue (#5761FF) is paired with white text to pass contrast requirements, while secondary 'muted' text is kept at a high enough opacity to remain legible. Semantic cues include a 'Skip to main content' link for keyboard users. Interactive targets, especially buttons and navigation links, adhere to a generous padding model to provide large tap targets for mobile and touch interactions.
##
 Assets

-
 
**
Embed
**
: https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F925542097%3Fh%3D15f43fee51%26app_id%3D122963&dntp=1&display_name=Vimeo&url=https%3A%2F%2Fvimeo.com%2F925542097%2F15f43fee51&image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1846062544-79f40da98d9d1a0f27c002a7b1d6fb0542862767d5cffc7d8cb1b7603f35b066-d_1280%3Fregion%3Dus&type=text%2Fhtml&schema=vimeo — Introducing Hubble Network video embed.
-
 
**
Background
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/68507feffc0bdc5bb7024d6e_dots.svg — Dot pattern used for subtle texture.
-
 
**
Font
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/68508108b487ab7c3e8ce4e5_InstrumentSans-VariableFont_wdth%2Cwght.ttf — Primary sans-serif font.
-
 
**
Font
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/68508108d588f73d3599611c_InstrumentSans-Italic-VariableFont_wdth%2Cwght.ttf — Primary italic font variant.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/6851f579bc9b5923c457b04c_home_map-p-1080.webp — Coverage map visualization.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/6851f579bc9b5923c457b04c_home_map-p-1600.webp — High-res coverage map.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/6851f579bc9b5923c457b04c_home_map-p-2000.webp — 2K coverage map.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/6851f579bc9b5923c457b04c_home_map-p-500.webp — Small coverage map.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/6851f579bc9b5923c457b04c_home_map-p-800.webp — Medium coverage map.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/6851f579bc9b5923c457b04c_home_map.webp — Default coverage map asset.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/6852041c2f3bb2a22d567def_solutions_img-4-p-500.webp — Cityscape at sunset (solutions background).
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/6852041c2f3bb2a22d567def_solutions_img-4-p-800.webp — Cityscape variant.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/6852041c2f3bb2a22d567def_solutions_img-4.webp — Cityscape primary asset.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/6852041c3570051f0b7a1fed_solutions_img-1-p-500.webp — Logistics/Trucking solution image.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/6852041c3570051f0b7a1fed_solutions_img-1-p-800.webp — Logistics variant.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/6852041c3570051f0b7a1fed_solutions_img-1.webp — Logistics primary asset.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/6852041c90cfe50dfa7ecd61_solutions_img-2-p-500.webp — Heavy machinery/construction image.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/6852041c90cfe50dfa7ecd61_solutions_img-2-p-800.webp — Construction variant.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/6852041c90cfe50dfa7ecd61_solutions_img-2.webp — Construction primary asset.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/6852041cf26bfccdaae080dc_solutions_img-3-p-500.webp — Warehouse loading dock image.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/6852041cf26bfccdaae080dc_solutions_img-3-p-800.webp — Warehouse variant.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/6852041cf26bfccdaae080dc_solutions_img-3.webp — Warehouse primary asset.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/68520b110c36c0201af8a94a_satellite_img-2.webp — Aerial view of mining.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/68520b128bdbb13be8131918_satellite_img-3.webp — Canyon river landscape.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/68520b129b00d0ff0e57dc5e_satellite_img-1.webp — Container ship at sunset.
-
 
**
Icon
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/6859b5bd9df34e2dce8bdbf5_HUB-FAVICON-32PX.png — Favicon.
-
 
**
Icon
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/6859b613bbdfba78844ea118_HUB-FAVICON-256PX.png — Apple Touch Icon.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/685c93b96e32a4c79d4c4747_HUB_DEV_0101_WEB-PLANET_2250w_01_LW_v01%20(0-00-00-00)-min-p-1080.webp — Planet render variant.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/685c93b96e32a4c79d4c4747_HUB_DEV_0101_WEB-PLANET_2250w_01_LW_v01%20(0-00-00-00)-min-p-1600.png — High-res Planet render.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/685c93b96e32a4c79d4c4747_HUB_DEV_0101_WEB-PLANET_2250w_01_LW_v01%20(0-00-00-00)-min-p-2000.png — 2K Planet render.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/685c93b96e32a4c79d4c4747_HUB_DEV_0101_WEB-PLANET_2250w_01_LW_v01%20(0-00-00-00)-min-p-500.webp — Small Planet render.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/685c93b96e32a4c79d4c4747_HUB_DEV_0101_WEB-PLANET_2250w_01_LW_v01%20(0-00-00-00)-min-p-800.webp — Medium Planet render.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/685c93b96e32a4c79d4c4747_HUB_DEV_0101_WEB-PLANET_2250w_01_LW_v01%20(0-00-00-00)-min.png — Full-size Planet render.
-
 
**
Background
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/685c93b96e32a4c79d4c4747_HUB_DEV_0101_WEB-PLANET_2250w_01_LW_v01%20/(0-00-00-00/ — Planet background slice.
-
 
**
Background
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/685c94a71071095158effcf3_HUB_DEV_0101_STARS-TILE_01_LW_v01%20/(0-00-00-00/ — Stars background tile.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/685ca0277ac791333cbd3909_bb30dd5b3dbd2f945ee6a14297aed022_coming-soon_bg-p-1080.webp — Coming soon satellite render.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/685ca0277ac791333cbd3909_bb30dd5b3dbd2f945ee6a14297aed022_coming-soon_bg-p-1600.webp — Satellite render high-res.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/685ca0277ac791333cbd3909_bb30dd5b3dbd2f945ee6a14297aed022_coming-soon_bg-p-2000.webp — Satellite render 2K.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/685ca0277ac791333cbd3909_bb30dd5b3dbd2f945ee6a14297aed022_coming-soon_bg-p-500.webp — Satellite render small.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/685ca0277ac791333cbd3909_bb30dd5b3dbd2f945ee6a14297aed022_coming-soon_bg-p-800.webp — Satellite render medium.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/685ca0277ac791333cbd3909_bb30dd5b3dbd2f945ee6a14297aed022_coming-soon_bg.webp — Satellite render primary asset.
-
 
**
Background
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/685da53bf8290fbf7723265e_HUB_DEV_0101_BT-CHIP-BG_01_LW_v01_00001-min.webp — Bluetooth chip detail background.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/68c0b702025ba6a48b65e730_prefooter-bluetooth-chip-flat-p-500.png — Microchip small.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/68c0b702025ba6a48b65e730_prefooter-bluetooth-chip-flat-p-800.png — Microchip medium.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/68c0b702025ba6a48b65e730_prefooter-bluetooth-chip-flat.png — Microchip primary asset.
-
 
**
Background
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/693fdaa02ebfb473bb7ba9ac_pricing_plans.webp — Pricing section background.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/69413d7cec0a9ea5fb253651_modals-big-background-p-1080.webp — Abstract purple hills.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/69413d7cec0a9ea5fb253651_modals-big-background-p-1600.webp — Abstract hills variant.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/69413d7cec0a9ea5fb253651_modals-big-background-p-2000.webp — Abstract hills 2K.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/69413d7cec0a9ea5fb253651_modals-big-background-p-2600.webp — Abstract hills max res.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/69413d7cec0a9ea5fb253651_modals-big-background-p-500.webp — Abstract hills small.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/69413d7cec0a9ea5fb253651_modals-big-background-p-800.webp — Abstract hills medium.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/69413d7cec0a9ea5fb253651_modals-big-background.webp — Abstract hills primary.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/69416e3237ce704b8b9b6f3f_Column%20Right-p-500.webp — Toolbox with geometric shapes.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/69416e3237ce704b8b9b6f3f_Column%20Right.webp — Toolbox primary.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/69416e3273abca3a6d5badca_column%20center-p-500.webp — Circuit board render.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/69416e3273abca3a6d5badca_column%20center.webp — Circuit board primary.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/69416e327f5fd4853c0e178e_Column%20Left-p-500.webp — Device with glowing core.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/69416e327f5fd4853c0e178e_Column%20Left.webp — Device primary.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/6941b6c1b48e3daba43b8828_BLE-SAT-Europe-1216-2x.webp — Satellite over Europe render.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/69852ac978feb65173f6f85a_HUB_DEV_0101_FINGER_02_v01_260205-png%20(1)-p-500.png — Hand holding chip variant.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/69852ac978feb65173f6f85a_HUB_DEV_0101_FINGER_02_v01_260205-png%20(1)-p-800.png — Hand holding chip variant 2.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/69852ac978feb65173f6f85a_HUB_DEV_0101_FINGER_02_v01_260205-png%20(1).png — Hand holding chip primary.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/69a9be5be1e09f8675bc0818_stolen_vehicle-icon.png — Stolen vehicle recovery icon.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/69ab50e693bdccc841c98a72_b16e4685bf9d02666f417a60efd1d8ee_asset_track-icon.avif — Asset tracking icon.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/69ab60c497bfec616a1b31d3_shipment_icon.avif — Shipment/logistics icon.
-
 
**
Image
**
: https://cdn.prod.website-files.com/68507feefc0bdc5bb7024cfc/69b06d5e41d10e0bb437c6c1_Dash-UI-0310.webp — Dashboard UI preview.
-
 
**
Background
**
: https://d3e54v103j8qbb.cloudfront.net/static/custom-checkbox-checkmark.589d534424.svg — Custom checkbox icon.
-
 
**
Embed
**
: https://www.googletagmanager.com/ns.html?id=GTM-MTXCRK6B — GTM container.
Close
