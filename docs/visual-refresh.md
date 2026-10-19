# Portfolio visual refresh

The presentation update keeps the static HTML/CSS/JavaScript structure and adds no runtime dependencies. Project 01 and Project 02 now use responsive HTML/CSS architecture previews; their original detailed diagram assets remain available through the full-diagram links. The surrounding case-study content is preserved.

## Design

- Midnight navy, warm paper sections, and restrained champagne accents.
- Lighter Manrope headings, Inter body type, and system-serif accents.
- Responsive portrait sizing, open editorial layouts, compact tool groups, and clearly separated case studies.
- Consistent button shapes, thin dividers, restrained shadows, and visible keyboard focus.
- Brief entrance transitions, smooth anchor navigation, and reduced-motion overrides; no continuous background or pointer effects.

`presentation.css` is the final visual layer after `styles.css`. Keep both stylesheets when deploying. Existing content and assets remain in place.

## Verification

- Compared the initial presentation refresh against its snapshot for content preservation, then checked each architecture update separately to confirm that only the intended preview changed.
- Checked page and element overflow at 320, 375, 414, 680, 768, 900, 1024, 1280, and 1440 CSS pixels.
- Inspected desktop/mobile hero, services, project, and closing-section layouts in the browser.
- Verified menu opening, Escape dismissal, navigation dismissal, FAQ click/keyboard interaction, and email copying.
- Checked internal anchors, loaded images, browser errors, JavaScript syntax, and Git whitespace errors.
- Reviewed CSS reduced-motion and no-JavaScript visibility fallbacks. OS-level preference emulation was not available in the preview browser.
- Checked both architecture previews at 320–1440 CSS pixels and verified that their original diagram links open successfully.

## Preview

From the portfolio folder, run `python -m http.server 8765 --bind 127.0.0.1`, then visit `http://127.0.0.1:8765/`.

GitHub Pages publishes the repository root from `main` at https://yukicordero.github.io/Portfolio/. Push updates to `main` and confirm that the Pages build and deployment succeeds.
