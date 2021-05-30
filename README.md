# Flexbox Demo

**This project serves as a tool for teaching CSS Flexbox:** Do the katas together with learners, narrating as you go. Please see the solutions for direction.

### Advice:
Repetition is good. **Continually reinforce** the following key ideas:
-  The vocabulary of "<mark>main axis</mark>" and "<mark>cross axis</mark>". That is, don't take [`flex-direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#the_two_axes_of_flexbox) or [`writing-mode`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods#writing_modes) for granted. Example language:
    > And what is the main axis in this case? That's right: `row` because I am working in English and I have not specified otherwise.
-  The vocabulary of the "<mark>start</mark>" and the "<mark>end</mark>" of the axis, rather than "left," "right," "top," or "bottom."
-  The distinction between the "<mark>flex container</mark>" and its rules and "<mark>flex items</mark>" and their rules.
-  The idea that flexbox is as much about distributing ***available space*** as it is about distributing ***flex items***.

---

#### TODO:
- Detect plaintext-only feature and prompt with undo? Or other attempt at cross-browser compat with Firefox, Safari, Edge
- Cache <style> elements individually
- Then add a "View Solution" toggle for each `.container`
- Capture Ctrl+/ and Cmd+/ to toggle line comments
- Perhaps the "Solutions" may be cachable, as well, to be restored by a page-wide Reset