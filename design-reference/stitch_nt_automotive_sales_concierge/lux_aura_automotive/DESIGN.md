---
name: Lux-Aura Automotive
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#46eaed'
  on-secondary: '#003738'
  secondary-container: '#00cdd0'
  on-secondary-container: '#005253'
  tertiary: '#bfcdff'
  on-tertiary: '#082b72'
  tertiary-container: '#97b0ff'
  on-tertiary-container: '#254188'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#5af8fb'
  secondary-fixed-dim: '#2ddbde'
  on-secondary-fixed: '#002020'
  on-secondary-fixed-variant: '#004f51'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#27438a'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  technical-label:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-md-mobile:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style
The design system embodies the precision and luxury of a high-performance grand tourer. It targets discerning automotive owners who expect a digital experience that mirrors the craftsmanship of a premium vehicle's cabin.

The aesthetic is **Modern Minimalist with a Technical edge**, drawing inspiration from high-end digital instrument clusters. The interface avoids the "playful" nature of consumer apps in favor of a sophisticated, high-end SaaS feel. It prioritizes clarity and executive presence, utilizing a card-based architecture that feels like integrated modules rather than floating elements. The emotional response is one of calm, authoritative control.

## Colors
The palette is rooted in a deep, near-black environment to reduce eye strain during night driving and to provide a premium "OLED" backdrop.

- **Base/Background:** Graphite (#121212) serves as the primary canvas.
- **Accents:** Warm Gold (#D4AF37) is reserved for high-value interactions, brand presence, and primary calls to action.
- **AI/States:** Electric Blue (#00CED1) signifies the "live" state of the conversational agent, indicating activity and intelligence.
- **Surfaces:** Use #1E1E1E for card containers to create subtle separation from the background without relying on heavy shadows.

## Typography
The typographic hierarchy balances modern accessibility with technical precision.

- **Inter** is the workhorse font, providing a clean, humanist-grotesque feel for all primary reading and navigation.
- **JetBrains Mono** is utilized for metadata, system statuses, and "instrumental" readings to reinforce the automotive-technical aesthetic.
- **Stylistic Note:** All labels and technical data should be in uppercase with slight tracking (letter spacing) to mimic luxury dashboard labels. Large display text should use a tight letter spacing for a more aggressive, high-end feel.

## Layout & Spacing
The design system utilizes a **Fixed Grid** model for desktop and a **Fluid Content** model for mobile.

- **Grid:** On desktop, the central interface is contained within a 1200px max-width container, centered. On mobile, elements span the full width minus the standard 16px margins.
- **Rhythm:** A 4px baseline grid ensures tight, mathematical alignment.
- **Adaptive Strategy:** On desktop, the "Assistant" area resides in a wider right-hand panel with contextual vehicle data on the left. On mobile, these stack vertically, with the Assistant occupying the bottom 60% of the viewport to ensure easy thumb reach while driving/parked.

## Elevation & Depth
Depth is created through **Tonal Layering** and **Low-Contrast Outlines** rather than traditional shadows.

- **Layer 0 (Background):** #121212.
- **Layer 1 (Cards/Containers):** #1E1E1E.
- **Borders:** All interactive cards use a subtle 1px border (#2A2A2A). When an element is active or focused, the border transitions to a dimmed version of the Primary Gold or AI Blue.
- **Focus States:** Avoid heavy glows. Use a single-pixel inset border or a high-contrast stroke. The interface should feel flat and integrated, like a glass-cockpit display.

## Shapes
The shape language is disciplined and geometric.

- **Corner Radii:** We use "Soft" (0.25rem) rounding. This creates a modern feel that is less harsh than sharp corners but avoids the "bubbly" appearance of rounded consumer apps. 
- **Interactive Elements:** Buttons and input fields follow the standard 4px radius. 
- **Status Indicators:** Small indicators (like "System Online") should be sharp squares or subtle horizontal bars, reinforcing the technical instrument feel.

## Components
- **Conversational Interface:** Avoid chat bubbles. Use alternating horizontal blocks with a subtle vertical accent line on the left side (Gold for User, Blue for Agent).
- **Cards:** Content is grouped in modules with 1px borders. No drop shadows. Labels within cards must use the `technical-label` style.
- **Buttons:** 
  - *Primary:* Solid Gold background with black text.
  - *Secondary:* Ghost style with Gold border and Gold text.
  - *AI Action:* Ghost style with Electric Blue border.
- **Inputs:** Darker than the card background (#0A0A0A) with a 1px border. The cursor and focus state should utilize the AI Blue.
- **Vehicle Telemetry:** Group data (e.g., fuel level, tire pressure) into "Data Strips"—slim, horizontal rows with the label on the left and value on the right, separated by a dotted leader line.
- **AI State Visualizer:** A thin, pulsing horizontal line (Electric Blue) at the bottom of the active response container to indicate the AI is processing or speaking.