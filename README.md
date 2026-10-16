# Synagogue Material Studio · v1.0

**Live:** https://dzzk-r.github.io/synagogue-material-studio/

A mobile-first static wall covering visualizer with Hebrew as the primary language, English as the second, and Russian as an optional third.

## What is included

- **Seven selectable mask profiles** with strict per-profile photo state: `clean_master` (1536 × 864) and six legacy profiles (1536 × 693).
- **Public generated example:** the cleaned Aron Kodesh scene chosen for the new master mask. This is an illustrative AI-generated concept rather than an original room photograph.
- **Ten Kalkir models** with supplier names, published dimensions, coverage and approximate panel weight, plus links to product pages. Supplier SKUs were not found on the checked product pages; internal model IDs are *not* supplier SKU numbers.
- Upper, lower, full-wall, Ark-only, all-areas and original-image scenarios; independent material selectors for upper, lower and two Ark groups.
- Mask polygons, protected regions, display/drag and polygon editing, inscription preview, lighting, PNG rendering, JSON project import/export.

## Privacy

**The six original synagogue photographs are NOT checked into the public repository.** Select a corresponding mask profile, and upload the matching photograph on your own device. The page processes it in the browser and may cache it in the device's IndexedDB for convenience; no application server receives it. Clear the website's local data in your browser to erase cached photos. Selecting a profile does not reuse a photo from another profile.

The demonstration image of the reconstructed room **is public** (embedded within `index.html`), so do not treat it as a private image. The site requests catalog photos directly from the manufacturer's website.

## Source files

- `index.html` — standalone published application (HTML, CSS, JS and preview assets embedded; open it locally without build tools)
- `masks.json` — separate reference data for all seven mask profiles (the live app uses the embedded copy; an exported user project captures edits)
- `catalog.json`, `kalkir_products.csv` — reference supplier metadata
- `README.md` — this document

Obsolete `i18n.js` and `mobile.js` from early prototypes are not used by the current app.

## Accuracy and limitations

The new master has 10 editable regions and 13 protected cutouts, all traced from the supplied generated clean scene. Boundaries remain approximate and are correctable in Advanced tools. Other profiles are *legacy approximations* and require the original corresponding camera angle. Matching image dimensions **does not prove perspective compatibility**.

Actual installed tile layout, photogrammetric reconstruction, fire certification, prices and purchase quantities are **not validated**. Product preview textures can be illustrative. Manufacturer catalog photos are not guaranteed to be flat, seamless, metrically calibrated panel scans.

For **טובזה קטנה (Small Tuvza)** the supplier's visible units conflict with the published coverage; its dimensions are intentionally marked as unverified.

No affiliation or endorsement by Kalkir is implied.

## Deploying

The site is published from the `main` branch in GitHub Pages, directory `/(root)`. To use privately offline, save the single `index.html` file and open it in a modern browser; supplier photos may not load without network access.
