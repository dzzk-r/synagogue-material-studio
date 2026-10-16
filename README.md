# Synagogue Material Studio v1.2

**Public website:** https://dzzk-r.github.io/synagogue-material-studio/

Hebrew is the primary UI language. English is second, Russian is optional.

## Features

- Mask profile switcher: new 1536 × 864 demonstration master and six 1536 × 693 legacy profiles. A photo is only matched to its own profile; camera perspective still needs manual checking.
- Independent renovation zones: upper / lower / full wall / Aron Kodesh / all.
- Inscription independent of renovation scenario: text, Hebrew font presets, size, letter finish (solid, metallic-gold, engraved, outline, stone), two colors, width and two-position sliders, and direct drag.
- Advanced editable mask polygons: select a mask, drag yellow vertex handles with mouse or touch, add/remove corners, zoom, undo, reset. Save/export project JSON.
- **Approximate isolated light field:** the browser derives a smooth, grayscale brightness map from the current photograph inside marked wall polygons only, excludes the ceiling, windows, curtain and protected decor, normalizes the field for each surface and applies it as a *soft-light overlay* to new textures. The light-field preview button shows the map; the lighting slider controls its strength. It recalculates for each newly uploaded photo and after mask edits. It does not infer physical surface normals, light sources, HDR illumination, or realistic shadows from new 3D relief.
- Browser-only local photo handling; no application photo-upload endpoint. Images may be cached locally in IndexedDB.
- Ten catalog entries with verified supplier URLs and available specifications, not invented SKUs.

## Limitations

- This is an **architectural concept visualizer**, not an installation or procurement plan. Masks are approximate and must be manually corrected for each perspective. Wall lengths and true panel seams need measurements.
- The public default photograph is an **AI-generated cleaned concept image**, not a source photograph of the existing room. Original on-site photographs remain private and are **not included** in this public release.
- Images supplied by Kalkir may be photographed installations rather than rectified tile sheets. The offline illustrative texture is not necessarily the exact manufacturer's product texture.
- A light-field estimated from a JPEG can mix shadows, surface reflectance and exposure; its use is a presentation approximation, not a physically grounded luminance reconstruction.

## Files

- `index.html` — **complete, standalone** application including bundled images, masks, client-side JS and CSS. Open directly or publish via GitHub Pages.
- `masks.json`, `catalog.json` — reference sources for further modifications. The browser application uses its embedded bundle, so changes to these files alone do not change the live rendering until the bundle is rebuilt.

## Publishing

Upload `index.html` from this package to `dzzk-r/synagogue-material-studio` on branch `main`, root. GitHub Pages should already be enabled.
