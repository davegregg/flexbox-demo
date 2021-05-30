# Flexbox Demo, Katas, and Reference

This project is meant to be used in three ways:

1. **As a set of katas:** Fork and clone it. Open `index.html` in a browser. Then edit `stylesheets/flex-containers.css`. You will find that, for example, ".container-2 {}" is where you will write the CSS for what you see in the browser as "2 – Basic Flex". Work through these like katas.

2. **As tool for demoing Flexbox to others:** Do the katas together with students, narrating as you go. To prepare, please see `stylesheets/solutions.css` for the solution code.

3. **As a basic reference for basic Flexbox features:** When this project is hosted on GitHub Pages, the JavaScript in `scripts/onload.js` detects this automatically *and switches the active stylesheet* from `stylesheets/flex-containers.css` to `stylesheets/solutions.css`, so that each container correctly displays the effect of the Flexbox feature being discussed.

---

#### TODO:
- Detect plaintext-only feature and prompt with undo? Or other attempt at cross-browser compat with Firefox, Safari, Edge
- Cache <style> elements individually
- Then add a "View Solution" toggle for each `.container`
- Capture Ctrl+/ and Cmd+/ to toggle line comments
- Perhaps the "Solutions" may be cachable, as well, to be restored by a page-wide Reset