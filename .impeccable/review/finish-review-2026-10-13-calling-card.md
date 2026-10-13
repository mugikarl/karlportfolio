# Finish review: Calling Card cover and book transition

2026-10-13

disposition: fix

Not read: isPlainClick.ts, the sections/ and data/ files, and WorksIndex.tsx beyond a grep. PRODUCT.md and DESIGN.md were grepped only. There is no QUALITY BAR card, so the ceiling is judged against OWN-WORLD. Per the coordinator, the Contact portrait is now in full color, so its grayscale in the earlier captures is not a finding.

## persistence

**Fail.**
- **Captures:** all 15 named captures exist. Their dimensions fit the named viewports, and the full-page captures start at the document top. Evidence passes.
- **Code-led build:** no `state.json`, spec, or diff directories are required. `.impeccable/mocks/decision/calling-card.html` is exempt as a dealt-hand sketch.
- **Approval record:** the surface brief records the lock. FIRST VIEWPORT reads "Calling Card cover (surface round, dealt lead)".
- **PRODUCT.md is stale:**
  - Line 32 says projects are reviewed through "a card grid that opens a detail modal".
  - Line 39 lists "Sections today: Header nav, Hero, About, Projects, Contact".
  - Neither line describes the shipped cover and book.
- **DESIGN.md predates this build:**
  - It has no entry for the cover view, the 2x2 thumbnail composition, the cover and book view states, or the active-plate View Transition (timings, easing, reduced-motion fallback).
  - This is an extension build, so it must be updated to match what was built.

## fidelity

This is a code-led build. The Calling Card sketch is a critique reference, not a spec, so there is no element matrix.

- **TYPE: match against OWN-WORLD.**
  - The name is Schibsted Grotesk 600, shown at 96px (6rem) with -0.04em tracking.
  - The motto is Source Serif 4 in graphite. Years use tabular figures.
  - The sketch's 104px name was lowered to 6rem. This adaptation is required by the craft floor's display maximum.
- **MATERIAL: match.**
  - Thumbnails and plates are real product screenshots with a 1px ink/10 hairline.
  - There are no cards, shadows, or imitation physicality.
- **GROUND: match.**
  - Sampled at (241,241,238) on cover-desktop, cover-mobile, and book-desktop.
  - That equals OWN-WORLD's #f1f1ee. The ground is neither warmer nor cooler.
- **What the sketch dared that the build did not:** nothing material. The build follows the sketch's identity block, its 2x2 grid with title and year, and the ruled link line almost line for line.

## ceiling

No QUALITY BAR card was provided, so these are judged against the monograph world:

- **Plate numbering is missing from the cover.** The book numbers its works 1 to 4 in the index and on each plate. The cover thumbnails carry no number, so the flight lands on "3 Wingman" without a numeral the reader saw leave the cover.
- **The Ateneo thumbnail reads as an empty page.** Its top crop is a near-white page with illegible text, both at 308px wide (desktop) and 112px (mobile). It holds the second most-viewed slot (top right), and the other three thumbnails are vivid.

## material_fixes

1. **(Floor: browser surfaces; Contract: STORY)** A deep-link load shows a 2px ultramarine focus box around the work title (visible on "1 The Prestige Pickleball Society" in book-desktop-full.png and book-mobile-full.png). The cause is that `revealTarget` focuses an `h2` with `tabIndex={-1}`, and Chrome matches `:focus-visible` for programmatic focus. Suppress the outline on `[tabindex="-1"]` headings and on `#cover-title`, which are focus destinations rather than controls. Keep it on links and the skip link.
2. **(Ceiling; Contract: FIRST VIEWPORT, "strongest built work")** produce: the Ateneo Admissions and Aid Chatbot cover thumbnail as a raster crop of the chat exchange (or set a per-work `object-position`). It must read as a product at 308px and at 112px. Today it reads as a blank white page.
3. **(Contract: FORM, signature interaction)** The book lands fully opaque while the plate is still in flight. Transition frames 1 and 2 show the plate sliding across a finished "3 Wingman" heading and the "Period" data row. Start `::view-transition-new(root)` later, around 220-260ms, or shorten its rise, so the text settles as the plate lands rather than under it. Re-check it frame by frame at 10% speed.
4. **(Truth: copy consistency)** The cover and the book sidebar set the same identity lines differently. The cover reads "General Santos City, PH. Open to remote." and puts the degree on one comma-joined line. WorksIndex.tsx (lines 71 and 147) reads "General Santos City, PH · Open to remote" and breaks the degree before the school. Choose one form for both views.
5. **(Ceiling; Contract: FORM)** Set each work's plate numeral (1-4) before its title on the cover, in graphite and tabular figures, matching the index. Then the thumbnail that flies is visibly "plate 3" in both views.
6. **(Persistence)** Update PRODUCT.md "Operating Context" (line 32) and "Sections today" (line 39) to describe the cover and book. Add the cover view, its phone list layout, the view states, and the transition spec to DESIGN.md.

## keep

Keep the quiet two-column Calling Card cover: the 6rem name, the motto, and a single ultramarine action beside four real screenshots on #f1f1ee. Also keep the single-thumbnail flight into the plate. Do not add more motion, more labels, or more content to the cover while fixing.

## notes

The FORM seed `seed: none (unavailable)` was checked with `impeccable concept-seed --check-seed none`, which exited 0. That is the contract's confirmation criterion. However, the command printed a live surface roll (source: api) instead of an "unavailable" confirmation. Treat the corroboration as weak. No telemetry ping was sent.

## Verdict pass (2026-10-13)

### verdict

1. **Focus ring on deep links: resolved.**
   - book-desktop-deeplink.png (a load of /#wingman) shows "3 Wingman" with no outline.
   - index.css line 52 limits the suppression to `:is(h1, h2)[tabindex="-1"]`, so links and controls keep the ring.
2. **Ateneo thumbnail: partial.**
   - The new chatbot-thumb.webp crop now shows the crest, the knight watermark and the requirements card.
   - At 308px on cover-desktop.png it reads as an app, which was not true before.
   - At 112px on cover-mobile.png it still reads as a pale grey-on-white page. The chat exchange that would identify it as a chatbot (the blue user bubble, the message rows) is outside the crop.
   - The cross-fade handoff in transition-ateneo-1/2 is clean, with no double image.
3. **Book landing during the flight: resolved.**
   - In transition-wingman-1.png the plate travels over empty paper.
   - In transition-wingman-2.png the plate has landed and the heading, notes and data column are fading up under it, not ahead of it.
4. **Copy consistency: resolved, judged from source.**
   - Cover.tsx lines 54-57 and WorksIndex.tsx lines 144-147 use the same two degree lines and then "{location}. {availability}.", which now reads "Open to remote and onsite".
   - The captures still show the older "Open to remote.", as the coordinator noted.
5. **Cover numerals: resolved.** cover-desktop.png and cover-mobile.png show a graphite tabular numeral 1-4 before each title, matching the index.
6. **Stale docs: resolved.**
   - PRODUCT.md lines 32 and 39 now describe the cover and then the monograph.
   - DESIGN.md has the cover description and cover-thumb tokens.

**Regressions from the fix batch:** none material.
- With the 240ms book delay, transition-wingman-1.png shows an empty field around the moving plate. The cover has finished fading by 160ms and the book starts at 240ms, so for about 80ms the plate is the only thing on screen.
- This reads as a deliberate held beat on the plate rather than a defect.

### remaining

- **Fix 2:** the Ateneo thumbnail does not read as a chatbot at phone size (112px). Re-crop chatbot-thumb.webp to include the chat exchange (the user bubble and the first reply), or tighten the crop, so it identifies the product at 112px. Then recapture cover-mobile.png.
- A ship earned on the next pass covers only these six scored fixes, not a fresh review of the whole surface.

disposition: fix
