---
name: Karl Natividad
description: A fullstack engineer's portfolio set as an architecture practice monograph, opened from a calling-card cover, with works documented as plates and a data column of recorded facts.
colors:
  paper: "#f1f1ee"
  paper-deep: "#e6e6e1"
  ink: "#141413"
  graphite: "#5d5d58"
  rule: "#cfcfc8"
  spot: "#2034c4"
  spot-deep: "#16248f"
typography:
  display-cover:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 7vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  display:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 4.2vw, 4rem)"
    fontWeight: 600
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 2.8vw, 2.875rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  lede:
    fontFamily: "Source Serif 4 Variable, ui-serif, Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.375
  body:
    fontFamily: "Source Serif 4 Variable, ui-serif, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.625
  data:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.375
    fontFeature: "\"tnum\" 1"
  label:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
rounded:
  none: "0px"
spacing:
  row: "10px"
  gap-sm: "12px"
  gutter-mobile: "20px"
  gutter-tablet: "32px"
  index-gutter: "40px"
  gutter-desktop: "56px"
  section: "56px"
  section-desktop: "80px"
components:
  button-primary:
    backgroundColor: "{colors.spot}"
    textColor: "{colors.paper}"
    typography: "{typography.data}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.spot-deep}"
    textColor: "{colors.paper}"
  link-quiet:
    textColor: "{colors.ink}"
    typography: "{typography.data}"
    height: "44px"
  link-work:
    textColor: "{colors.spot}"
    typography: "{typography.data}"
  link-work-hover:
    textColor: "{colors.spot-deep}"
  data-row:
    textColor: "{colors.ink}"
    typography: "{typography.data}"
    padding: "{spacing.row} 0"
  index-entry:
    textColor: "{colors.graphite}"
    typography: "{typography.data}"
    padding: "10px 0 10px 12px"
    height: "44px"
  index-entry-active:
    textColor: "{colors.ink}"
  cover-thumb:
    backgroundColor: "{colors.paper-deep}"
    textColor: "{colors.ink}"
    typography: "{typography.data}"
    rounded: "{rounded.none}"
  cover-thumb-phone:
    width: "7rem"
  plate-fallback:
    backgroundColor: "{colors.paper-deep}"
    textColor: "{colors.graphite}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
---

# Design System: Karl Natividad

## Overview

**Creative North Star: "The Architect's Monograph"**

The site is printed matter more than a web app: a practice monograph that opens on a calling card. The cover sets Karl's name large beside a small contents page of four plate thumbnails; choosing one opens the book at that plate. Inside, each piece of work is a plate, numbered, followed by its title, a serif note, and a data column of recorded facts (period, context, role, stack, link). The page sits on cool uncoated paper in near-black ink. Structure comes from hairline rules and a strict two-column spread, not from containers. In the book, a sticky left column holds the name, role, motto, the two actions, a numbered index of works, and the education and location lines. A single ultramarine spot marks where the reader is and what they can act on.

Density is editorial. Display type is tight and heavy, notes are set in a readable serif measure, and facts are small, tabular, and aligned to a fixed term column. Nothing floats, lifts, or glows. Depth comes from the photograph (the plate) and the paper tone, never from shadow. Motion has two signatures: the chosen thumbnail travelling from the cover into its plate, and the index mark sliding to the work in view. Everything else is small color and underline shifts.

The system rejects the developer-portfolio default: no hero banner over a grid of boxed cards, no modal detail views, no cards, no shadows, no pill chips, no tracked uppercase eyebrow labels. The cover's thumbnails are an unboxed contents page, image and caption on bare paper, not cards.

**Key Characteristics:**
- Paper, ink, graphite and hairline rules carry the whole page; one ultramarine spot does the pointing.
- Two views: a calling-card cover and the book. The cover's numbered thumbnails are the book's contents.
- Works are plates: a full-width screenshot, then a numbered title, serif note, and a ruled data column.
- A grotesk for names, titles and data; a serif for notes and ledes. Tabular figures everywhere numbers appear.
- Square corners on everything. Rules, not boxes.
- Two signature motions: the thumbnail flies into its plate, and the index mark slides to the section in view.

## Colors

A near-neutral paper-and-ink palette with a faint warm-green cast, punctuated by one saturated ultramarine.

### Primary
- **Ultramarine Spot** (`spot`): the only chromatic color. Used for the primary action ("Email Karl" fill), work links in the data column, the contact email, the sliding index mark, the focus ring, and text selection. 7.9:1 on paper.
- **Deep Ultramarine** (`spot-deep`): hover state for every spot element. Never used at rest.

### Neutral
- **Uncoated Paper** (`paper`): the page ground, the `theme-color`, and the text color on spot fills.
- **Paper Shadow Tone** (`paper-deep`): image placeholder behind plates and cover thumbnails while they load, the plate fallback panel, and the faint hover wash on Other-work rows (at 60% opacity).
- **Press Ink** (`ink`): all primary text, and the heavy rule that opens every data column and list (1px top border), including the single rule above the cover's section links. 16.3:1 on paper.
- **Graphite** (`graphite`): secondary text: role lines, ledes, the motto, fact terms, numbers, years, inactive index entries, the footer, and the name link's hover. 5.9:1 on paper, so it is safe for small text.
- **Hairline** (`rule`): 1px dividers between rows, sections, and the left column edge. Structural only; never used for text.

### Named Rules
**The One Spot Rule.** Ultramarine marks only position (the index mark, focus), action (the primary button, links, the contact email), and selection. It never decorates a heading, a background panel, or an icon at rest.

**The Two-Weight Rule.** Lists and data columns open with an ink rule and divide with hairline rules. Ink rule on top, hairlines between, nothing around.

## Typography

**Display Font:** Schibsted Grotesk Variable (with ui-sans-serif, system-ui)
**Body Font:** Source Serif 4 Variable (with ui-serif, Georgia)

**Character:** A firm, slightly condensed-feeling grotesk set tight for names and titles reads like an architecture practice's masthead. The serif is reserved for prose so notes feel written, while facts stay in the grotesk so they feel recorded.

### Hierarchy
- **Cover Display** (600, clamp 3.25rem to 6rem, line-height 0.9, -0.04em): Karl's name on the cover only, broken over two lines (Karl / Natividad).
- **Display** (600, clamp 2.75rem to 4rem, line-height 0.92, -0.035em): Karl's name at the top of the book's index column, where it is also the link back to the cover.
- **Headline** (600, clamp 1.875rem to 2.875rem, line-height 1.02, -0.03em): work titles and section titles (Other work, Experience, Contact). Featured titles carry their number in graphite at weight 400 before the title.
- **Title** (600, 1.125rem, line-height 1.25, -0.01em): entries inside lists: positions, degree, other-work titles. Sub-section heads (Education, Certifications) step up to 1.25rem at -0.015em.
- **Lede** (serif 400, 1.25rem, line-height 1.375, graphite): the one-sentence summary under each headline, max 52ch. The motto ("I like building things people actually use.") is set the same way under the role line, at 1.25rem on the cover (1.5rem from `md`) and 1.0625rem in the index column.
- **Body** (serif 400, 1.0625rem, line-height 1.625): work notes and experience summaries, max 65ch. Notes are a hyphen list hung in a 1.25rem gutter.
- **Data** (grotesk 400/500, 0.9375rem, tabular figures): fact rows, index entries, cover thumbnail titles (1rem from `sm`, weight 600), buttons and nav links.
- **Label** (grotesk 400, 0.875rem, graphite): index heading "Works", years, the education and location lines, footer. Sentence case, untracked.

### Named Rules
**The Written / Recorded Rule.** Serif for anything Karl wrote as prose; grotesk for anything that is a name, a fact, a number, or a control. Never set a fact in the serif or a note in the grotesk.

**The Tabular Figures Rule.** Every number (work numbers, index numbers, thumbnail numerals, years, periods) uses tabular figures so columns align.

**The No Eyebrow Rule.** Section context comes from the headline and the index, not from small uppercase tracked labels above headings. Labels stay sentence case and untracked.

**The Plain Hyphen Rule.** En and em dashes are not used anywhere in the copy. Date ranges use a spaced hyphen with a non-breaking space before it ("Jan - May 2025", "Jul 2026 - present") so the range never wraps at the hyphen.

## Layout

- **Two views:** the cover and the book. The cover is the default view; a link from the cover pushes a history entry with the target's hash and opens the book scrolled to that work or section, with focus on its heading. Browser Back and the name link in the index column return to the cover. Loading the site with a known hash (a work, Other work, Experience, Contact, or an other-work entry) opens the book directly at that target. Modified clicks (new tab, etc.) keep native link behavior.
- **Cover:** at `lg` and up, a two-column grid inside the 1680px container: identity on the left (`minmax(0, 1fr)`), the contents on the right (up to 40rem), 80px apart, with 6vw side and 9vh vertical padding. The pair is centered vertically in the viewport (`100dvh` minimum) and the columns align at their bottoms. Identity runs top to bottom: name, role, motto, the two actions, then degree and school on two lines and the location line in ink. The contents are a 2x2 of thumbnails (24px column gap, 32px row gap from `sm`), then one 1px ink rule and the Other work / Experience / Contact links.
- **Cover below lg:** identity stacks above the contents with 20px gutters (32px from `sm`). Below `sm`, the thumbnails become a list of rows, a 7rem thumbnail beside its number, title and year, opened by a hairline.
- **Book spread:** at `lg` (1024px) and up, a two-column grid inside a 1680px max container: the index column at `minmax(320px, 27%)` and the main column taking the rest. The index column is sticky, full viewport height (`100dvh`), scrolls internally, and is separated by a 1px hairline on its right. Education and location sit at its foot.
- **Book below lg:** the index column becomes a top header with a bottom hairline; the location line, the numbered works list and plain section links appear inline, and the sliding mark is not shown.
- **Gutters:** 20px on mobile, 32px from `sm`, 56px in the main column at `lg`; the index column uses 40px.
- **Vertical rhythm:** sections use 56px top and bottom, 80px at `lg`; every work and section ends on a hairline.
- **Work spread:** plate at full column width, then a text column and a 260 to 320px data column side by side from `xl` (1280px); stacked below.
- **Term column:** data rows use a fixed 6.5rem term column; experience rows use an 11rem period column from `md`.
- **Anchors:** sections use a 16px scroll margin; scrolling is smooth unless reduced motion is requested.

## Elevation & Depth

Flat. There are no shadows anywhere in the system. Depth comes from the plates themselves (screenshots set full width with a 1px inset ink outline at 10% opacity so pale screenshots keep an edge against the paper), from the same edge on cover thumbnails, and from the paper-deep tone used for placeholders and hover washes.

### Named Rules
**The Flat Paper Rule.** Surfaces never lift. State is shown with color (graphite to ink, spot to spot-deep), weight (500 to 600 for the active index entry), a darkening edge or underline, a paper-deep wash, or a slight press (scale 0.97) on the two actions, never with elevation.

## Shapes

Square everything: 0 radius on buttons, plates, thumbnails, fallback panels, and the index mark. Form is built from lines: 1px hairline rules between rows, a 1px ink rule opening each list, a 1px hairline edge on the index column, and a 3px ultramarine bar as the index mark. Cover thumbnails are 16:9, cropped from the top of the screenshot so the first screen of each product shows. Icons are thin Feather line icons (arrow up-right, plus, lock) at 13 to 18px, always beside text.

## Components

### Buttons
- **Shape:** square (0px), at least 44px tall.
- **Primary ("Email Karl"):** spot fill, paper text, grotesk 600 at 0.9375rem, 20px horizontal padding. Hover moves to spot-deep and press scales to 0.97, both over 160ms on the strong ease-out.
- **Quiet action ("Resume (PDF)"):** no fill, ink text at 600 with a 1px underline at 30% ink; hover brings the underline to full ink, press scales to 0.97 (160ms, strong ease-out). There is only one filled button per view.

### Work Links
- **Style:** spot text at weight 500, 1px underline at 40% spot, offset 0.22em, followed by an up-right arrow.
- **Hover:** text and underline move to spot-deep over 200ms. The arrow stays put.
- **Private work:** a graphite label with a small lock icon and no link, so private repositories read as recorded facts rather than broken links.

### Cover Thumbnails (Signature)
- **Style:** a 16:9 screenshot thumbnail (top-cropped, paper-deep placeholder, 1px inset ink edge at 10%), then a caption row: graphite tabular numeral (1 to 4) in a 1.25rem slot, the title in ink at 600, and the year in graphite label size pushed right. No box, border, or background around the pair.
- **Hover:** over 200ms, the image edge darkens to 50% ink and an underline at 40% ink appears under the title.
- **Dedicated crops:** when a plate's top crop does not read at thumbnail size, the work supplies its own thumbnail (the Ateneo Admissions and Aid Chatbot uses a separate chatbot crop) and the transition cross-fades instead of flying image-to-image.
- **Phones:** a list of rows, 7rem thumbnail beside the caption, 16px apart.

### Cover-to-Book Transition (Signature)
A View Transition, used when the browser supports it; otherwise the view swaps instantly.
- **Enter:** only the chosen thumbnail travels. It and the target work's `figure` share one transition name, so the box flies from the cover into the plate over 460ms on the strong ease-in-out. The thumbnail image is hidden and the plate image fills the moving box (cover fit, anchored top), so the top-cropped thumbnail grows into its full plate. The cover fades out in 160ms; the book fades in over 300ms after a 240ms delay, rising 8px, on the strong ease-out. Section links (no thumbnail) get the page cross-fade only.
- **Cross-fade variant:** a thumbnail cropped differently from its plate still flies its box, but the two images cross-fade inside it over 220ms.
- **Exit (back to cover):** the book fades out in 120ms and the cover fades in over 220ms after 60ms. Nothing travels.
- **Reduced motion:** no flight; the incoming view fades in over 200ms.

### Plates
- **Image:** full column width, intrinsic width and height set, responsive `srcset` (800w and 1600w WebP), paper-deep placeholder, 1px inset ink outline at 10%. The image fades in over 200ms once loaded. No caption: the numbered headline below names the plate.
- **Fallback:** if the image fails, a paper-deep panel at the same aspect ratio with graphite label text "Screenshot unavailable right now."

### Data Column
- **Style:** a definition list opened by a 1px ink rule, rows divided by hairlines, 10px vertical padding, graphite term in a 6.5rem column, ink detail beside it. Used for featured works, expanded other works, and (with a wider period column) experience.

### Navigation (Works Index)
- **Style:** numbered rows in a three-column grid (number, label, year), opened by a hairline and divided by hairlines, each at least 44px tall.
- **States:** inactive rows are graphite at weight 500; hover moves to ink; the active row is ink at weight 600 with `aria-current="location"`.
- **Signature mark:** a 3px spot bar on the left edge that moves and stretches to the active row (one transform, 250ms, strong ease-in-out; no motion under reduced motion). The active section is tracked by an IntersectionObserver band from 35% to 40% of the viewport height.
- **Name link:** the display-size name returns to the cover; hover shifts it to graphite.

### Other Work Disclosure
- **Style:** native `details` rows: number, title with serif summary, up to three stack items (from `md`), and a plus icon.
- **States:** hover adds a paper-deep wash at 60%; when open, the plus rotates 45 degrees (200ms, strong ease-out) and the body fades in with a 4px drop (200ms, expo-out; fade only under reduced motion), revealing the plate beside a data column and notes, indented to align with the title.

### Focus
- Links and controls show a 2px spot outline at 3px offset on `:focus-visible`. Headings that receive focus programmatically (h1 and h2 with `tabindex="-1"`, focused after a view change) show no ring.

### Contact
- The email address is the largest spot element on the page (grotesk 600, clamp 1.5rem to 3rem, -0.03em, 2px underline at 30% spot). Profile links and the resume follow as data rows with an arrow. The portrait is small (96px, 160px from `md`) and in full color.

## Do's and Don'ts

### Do:
- **Do** present each significant work as a plate: full-width screenshot, headline with its number, serif lede, notes, then the ruled data column.
- **Do** give every featured work a cover thumbnail: 16:9, top-cropped, numbered, titled and dated; supply a dedicated crop when the top of the plate does not read small.
- **Do** open every list or data column with a 1px ink rule and divide its rows with 1px hairlines.
- **Do** keep ultramarine to the index mark, links, the primary action, focus, and selection.
- **Do** use tabular figures for every number and keep facts in the grotesk.
- **Do** write date ranges with a spaced hyphen and a non-breaking space before it.
- **Do** keep every interactive row and button at least 44px tall, and show focus with the 2px spot outline at 3px offset.
- **Do** respect reduced motion: smooth scroll off, no image flight or mark slide, fades only.

### Don't:
- **Don't** wrap content in cards, panels with borders on all sides, or rounded containers.
- **Don't** add shadows or hover lifts; state changes are color, weight, an edge or underline, or a paper-deep wash.
- **Don't** use pill chips or tags for stack items; stack is a comma-separated fact.
- **Don't** put small uppercase tracked eyebrow labels above headings.
- **Don't** open work details in a modal; details expand in place or live on the page.
- **Don't** introduce a second accent hue or use spot as a background panel.
- **Don't** use en or em dashes in copy.
