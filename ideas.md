# Better Know Bo — Design Ideas

## Design Approach Brainstorm

<response>
<text>

### Idea A — "Courtroom Noir" (Dark Slab Brutalism)

**Design Movement:** Brutalist editorial meets courtroom drama — raw, confrontational, unapologetic.

**Core Principles:**
- Extreme contrast: near-black backgrounds (#0f0f18) against white type and orange fire
- Typographic dominance: headlines take up real estate, no apologies
- Structural asymmetry: hero splits 55/45 with text block left, portrait right
- Orange as a weapon: used sparingly but with maximum visual impact

**Color Philosophy:** Deep navy-black (#0f0f18) as the arena, orange (#F97316) as the fighter's corner. White text for authority. Muted slate (#94a3b8) for secondary copy. The palette communicates: serious, aggressive, trustworthy.

**Layout Paradigm:** Asymmetric two-column hero. Section labels in tight uppercase orange tracking. Cards with left-border orange accent lines. Numbered practice area cards in a 2-3 grid. No centered hero text — always left-aligned.

**Signature Elements:**
- Thick left-border orange rule on all section labels
- Cormorant Garamond italic orange for emphasized headline words
- Floating stat/badge cards with subtle orange glow shadows

**Interaction Philosophy:** Hover states lift cards with orange shadow bloom. CTA buttons scale down on press (scale 0.97). Dropdowns slide down with 200ms ease-out.

**Animation:** Hero text fades up staggered (0ms, 100ms, 200ms). Section reveals via IntersectionObserver at 60px threshold. Card hover: translateY(-4px) + box-shadow orange tint.

**Typography System:** Cormorant Garamond 700 for display headings, DM Sans 400/500 for body, DM Sans 600 for labels and nav. Heading scale: 72px hero, 48px section, 32px card.

</text>
<probability>0.08</probability>
</response>

<response>
<text>

### Idea B — "Aggressive Advocate" (Dark Editorial with Diagonal Tension)

**Design Movement:** Editorial law magazine meets aggressive sports brand — high energy, high stakes.

**Core Principles:**
- Diagonal section dividers create forward momentum
- Strong typographic hierarchy with slab serif weight contrast
- Orange used as a highlight system (borders, numbers, italic words)
- Dense information density balanced with generous section padding

**Color Philosophy:** Charcoal (#1a1a2e) surfaces over near-black (#0f0f18) base. Orange (#F97316) as the sole accent color. White (#FFFFFF) for primary text. The visual language says: this attorney does not back down.

**Layout Paradigm:** Hero uses full-bleed dark with angled bottom divider. Practice area section uses numbered cards in a horizontal scroll on mobile, 3-column grid on desktop. About section uses a 60/40 split with photo on right.

**Signature Elements:**
- Angled/diagonal section transitions
- Orange number badges on practice area cards (01, 02, 03...)
- Pill-style city tags in the service area banner

**Interaction Philosophy:** Smooth scroll with section snap. Nav items have orange underline slide-in on hover. FAQ accordion uses smooth height transition.

**Animation:** Scroll-triggered fade-up for all sections. Stats counter animation on hero. Staggered card entrance (50ms per card).

**Typography System:** Playfair Display 700 for headings with italic orange emphasis, Source Sans 3 400/600 for body and UI, uppercase tracking for section labels.

</text>
<probability>0.07</probability>
</response>

<response>
<text>

### Idea C — "Fighter's Corner" (Dark Cinematic with Texture)

**Design Movement:** Cinematic law drama — dark, textured, atmospheric. Think prestige TV title card meets law firm.

**Core Principles:**
- Subtle noise/grain texture on dark backgrounds for depth
- Large-scale typography with generous line height
- Orange as the sole warm element in a cold dark world
- Floating badge cards with glassmorphism-lite treatment

**Color Philosophy:** Near-black (#0f0f18) with a subtle blue tint for depth. Orange (#F97316) glows against the dark. White text with slight warm tint. The palette communicates: cinematic authority.

**Layout Paradigm:** Full-viewport hero with centered headline (exception to asymmetry rule — creates cinematic drama). All other sections return to left-aligned asymmetric layout. Wide gutters on desktop.

**Signature Elements:**
- Subtle radial gradient behind hero (dark center, slightly lighter edges)
- Orange glow effects on key CTA elements
- Glassmorphism-lite badge cards (semi-transparent with blur)

**Interaction Philosophy:** Smooth parallax on hero background. Hover states use orange glow ring. Buttons have ripple effect on click.

**Animation:** Hero headline letter-by-letter fade in. Section reveals with slight scale (0.98 → 1.0) + opacity. Badge cards float with subtle CSS animation.

**Typography System:** Cormorant Garamond 600/700 italic for display, DM Sans 400/500 for body, Cormorant Garamond 600 for pull quotes.

</text>
<probability>0.06</probability>
</response>

---

## Selected Approach: **Idea A — "Courtroom Noir"**

Chosen for its direct alignment with the reference site's structural layout while pushing the visual identity further with slab brutalism. The asymmetric hero, orange-accented section labels, numbered practice cards, and floating stat badges all map directly to the specification requirements. The Cormorant Garamond + DM Sans pairing delivers the "authoritative yet approachable" tone requested.
