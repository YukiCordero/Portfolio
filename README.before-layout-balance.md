# Yuki Cordero Portfolio Website

A lightweight one-page portfolio website for **Yuki Cordero — AI Automation & Tech Virtual Assistant**. The site is built for GitHub Pages with plain HTML, CSS, and JavaScript. It keeps the premium dark navy / cream / gold visual direction while presenting the work as a polished, client-facing service website.


## Final launch cleanup status

This final cleanup keeps the current website design unchanged. The final GitHub Pages deployment URL was not provided, so all `YOUR-GITHUB-USERNAME` and `YOUR-REPOSITORY-NAME` placeholders remain intentionally in `index.html` and this README with TODO guidance. Replace those placeholders only after the final GitHub Pages repository URL is confirmed.

The workflow screenshot links now use `rel="noopener noreferrer"` for consistency with other external/new-tab links. The existing Loom demo links, GitHub repository links, Calendly links, LinkedIn link, email link, testimonial, and case studies were preserved.

## Final launch QA cleanup

This pass kept the existing premium design and made no structural redesigns. The final GitHub Pages URL was not provided, so deployment URL placeholders remain intentionally in `index.html` and this README. Replace every `YOUR-GITHUB-USERNAME` and `YOUR-REPOSITORY-NAME` placeholder after the repository URL is known.

Static QA confirmed: the duplicate hero eyebrow is not present, `assets/social-preview.png` is 1200×630, local asset paths resolve, JSON-LD parses, JavaScript syntax passes, internal anchor targets exist, CTA URLs are consistently assigned, external links use safe `target`/`rel` attributes where appropriate, and below-the-fold images keep lazy loading and explicit dimensions.

## Final premium launch improvements made

### Copy and conversion polish

- Kept the core positioning: AI Automation VA / Tech VA support for small businesses.
- Preserved the message around faster lead response, cleaner CRM tracking, fewer missed inquiries, workflow automation, testing, documentation, Loom walkthroughs, and async-friendly PHT / UTC+8 support.
- Removed above-the-fold duplication by keeping the hero eyebrow to one clear instance and simplifying the header micro-label.
- Kept the primary CTA consistent as **Book a Workflow Review**, with the compact nav CTA labeled **Workflow Review**.
- Made small wording refinements in the hero, best-fit, process, and case-study sections without adding fabricated metrics, ROI, saved-hours claims, client names, or testimonials.


### Premium visual effects added

- Added a soft cursor-following spotlight on desktop/fine-pointer devices only.
- Added slow ambient gradient orb movement and subtle animated hero glow layers.
- Added refined hover treatments for CTAs, service cards, tool groups, tool logos, case-study cards, metrics, package cards, FAQ items, testimonial, and contact panels.
- Added tasteful light-sweep and glow effects that use CSS and respect `prefers-reduced-motion`.
- Added optional metric count-up animation for the portfolio build highlight numbers, disabled automatically for reduced-motion users.
- Kept all effects dependency-free, lightweight, and safe if JavaScript fails.

### Case-study clarity

- Kept Case Study 1 clearly labeled as a **portfolio simulation** for a cleaning business.
- Kept careful language such as **Potential business benefit**, **Business use case**, **demonstrates**, **helps reduce manual steps**, and **supports clearer follow-up ownership**.
- Preserved the cleaning automation focus: lead capture, formatting, scoring, routing, email follow-up, Google Sheets updates, CRM tasks, and calendar booking when valid schedule details are provided.
- Kept Case Study 2 clearly framed as a **family business system**.
- Strengthened the Dream Coffee POS bridge to Tech VA / operations support by emphasizing workflow understanding, structured operational data, record maintenance, reporting, and internal tool organization.

### Accessibility, UX, and responsiveness

- Confirmed useful alt text, explicit image dimensions, internal anchor targets, and local asset paths.
- Kept a visible text link for opening the full workflow screenshot, so the screenshot link is not only image-based.
- Kept visible keyboard focus states for links, buttons, summaries, and workflow screenshot links.
- Kept the skip link pointing to the main content area.
- Added `scroll-margin-top` to anchored sections so sticky navigation does not cover headings.
- Preserved mobile navigation behavior: the button label updates between **Open navigation** and **Close navigation**, Escape closes the menu, outside click closes the menu, and the menu resets on wider screens.
- Polished active nav behavior so only sections represented in the primary navigation are observed.
- Adjusted the nav breakpoint so the menu collapses before tablet/laptop widths become crowded.
- Kept reveal animations robust: content is visible by default and only animates after `script.js` successfully initializes the observer.
- Preserved no-JavaScript and reduced-motion fallbacks.

### Performance and maintainability

- Kept the site dependency-free and GitHub Pages-ready.
- Kept the hero profile image prioritized with preload/fetch priority.
- Kept below-the-fold images lazy-loaded.
- Kept explicit image width and height attributes.
- Cleaned small duplicated CSS rules and clarified responsive comments.
- Kept `script.js` simple and dependency-free while preserving current year, scroll progress, mobile menu, active nav state, reveal animations, count-up highlights, desktop spotlight, and copy-email behavior.

### SEO and social sharing readiness

- Kept the title, meta description, Open Graph, Twitter, and JSON-LD metadata.
- Replaced the temporary profile-preview reference with a dedicated **1200×630 social preview image** created from existing portfolio assets: `assets/social-preview.png`.
- Left clear deployment placeholders for the final GitHub Pages URL because the final URL is not known yet.
- After deployment, replace every `YOUR-GITHUB-USERNAME` and `YOUR-REPOSITORY-NAME` placeholder with the final public URL.

## Files

```text
.
├── index.html
├── styles.css
├── script.js
├── README.md
├── .nojekyll
└── assets/
    ├── favicon.svg
    ├── profile.webp
    ├── social-preview.png
    ├── workspace.webp
    ├── pos-system.webp
    ├── testimonial-devie.webp
    ├── cleaning-lead-workflow.png
    ├── cleaning-lead-workflow.webp
    └── logos/
        ├── canva.webp
        ├── chatgpt.webp
        ├── claude.webp
        ├── github.webp
        ├── gohighlevel.webp
        ├── google-workspace.webp
        ├── make.webp
        ├── monday.webp
        ├── n8n.webp
        ├── vscode.webp
        ├── wordpress.webp
        └── zapier.webp
```

## Links already configured

The main portfolio links are already set in `index.html`:

- Calendly workflow review call
- Case Study 1 Loom demo
- Case Study 1 GitHub repository
- Case Study 2 Loom demo
- Case Study 2 GitHub repository
- Email contact link
- LinkedIn profile link
- Internal navigation anchors


### Case-study repository links

Each case study now includes a visible **View GitHub Repository** link near its Loom demo link for project verification:

- AI Appointment Setter — Cleaning Business: `https://github.com/YukiCordero/ai-appointment-setter-cleaning-business`
- Dream Coffee POS System: `https://github.com/YukiCordero/dream-coffee-pos-firebase`

## Required placeholder replacements before launch

The final GitHub Pages URL is not known yet, so the site still contains clear placeholders. Replace these everywhere in `index.html` after the repository is created and published:

```text
https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY-NAME/
```

Update the following fields with the same final deployed URL:

- Canonical URL
- Open Graph image URL
- Twitter image URL
- JSON-LD `@id` fields
- JSON-LD `url` fields

The social preview image should use an absolute deployed URL such as:

```text
https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY-NAME/assets/social-preview.png
```

## Final pre-launch checklist

Before publishing or sharing the site, confirm the following:

- Confirm Calendly link.
- Confirm both Loom demo links.
- Confirm both GitHub repository links.
- Confirm LinkedIn URL.
- Confirm email address.
- Confirm the starting rate and availability are still accurate.
- Replace the canonical URL placeholder.
- Replace Open Graph image URL with an absolute deployed URL.
- Replace Twitter image URL with an absolute deployed URL.
- Replace JSON-LD URL placeholders.
- Test all external links.
- Test all internal anchor links.
- Test desktop, tablet, and mobile layouts.
- Test keyboard navigation, including the skip link and mobile menu.
- Test the copy-email button.
- Test the no-JavaScript fallback.
- Test reduced-motion behavior.
- Test premium hover/spotlight effects on desktop and confirm they remain subtle.
- Check the shared link preview after deployment.
- Review `assets/social-preview.png` in the deployed link preview. The current image is 1200×630, uses existing assets only, and keeps text inside safe margins.
- Optional: revise or replace `assets/social-preview.png` if a different 1200×630 branded preview is preferred.

## Deploy with GitHub Pages

1. Create a new GitHub repository, for example `yuki-portfolio`.
2. Upload all files and folders from this project.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/root` folder.
6. Click **Save**.
7. GitHub will publish the site after a short build process.

Your site will usually be available at:

```text
https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY-NAME/
```

## Local preview

Open `index.html` directly in a browser, or run a small local server:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```
