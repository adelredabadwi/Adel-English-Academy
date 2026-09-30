# Validation — v0.1

- Initial GitHub inspection confirmed public visibility, default branch `main`, size `0`, and contents API response `This repository is empty.`
- `npm test`: answer-key validation, complete/incorrect/unanswered scoring, unique lesson IDs, whitespace word counting, HTTP startup and all six public assets, rejection of non-public paths and unsupported methods.
- `node --check src/app.js`: JavaScript syntax passes.
- Responsive CSS includes mobile breakpoints, wrapping navigation, single-column cards and forms, focus styles, and RTL/LTR content separation.
- **Browser UI validation was not completed:** the environment had no Chromium executable; its download failed. Visual appearance, browser interactions, and localStorage persistence still require a real-browser check. Automated unit/HTTP tests do not replace that check.
- GitHub Pages activation and a live deployment were not performed. See README for activation steps.

## Manual browser acceptance checklist

1. Run `npm start`, open localhost:3000 at desktop width and 390px mobile width. Check text, buttons, and horizontal overflow.
2. Enter a demo nickname, open a lesson in each pathway, mark completed, and refresh. Progress should remain.
3. Submit each five-question practice; verify explanations and saved attempt history. Incomplete forms should be blocked.
4. Type a writing draft, refresh, and confirm the draft and word count remain.
5. Log out; confirm progress remains as disclosed. Clear local progress from the dashboard and confirm removal.
6. Check keyboard navigation and browser-storage restrictions; a failed save should display the storage warning.
