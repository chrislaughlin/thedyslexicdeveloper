# Neon wordmark

The homepage wordmark recreates the pink script treatment in the supplied logo reference. Each character is an SVG outline adapted from the Sacramento typeface, distributed under the SIL Open Font License in `static/fonts/Sacramento-OFL.txt`.

`logo-paths.json` contains each character's outline and its displacement, rotation, and stagger. The lettering is arranged on a 600 × 556 canvas. `neon-logo.js` controls assembly and schematic guides with CSS animations. IntersectionObserver and document visibility pause the animation when hidden; the reduced-motion preference provides a static alternative.

The space theme is mounted by the homepage layout. The single-page profile, talks, publications, and live-streaming sections live in `resume.js`. The legacy About URL redirects to the homepage. Other routes retain their existing layout.
