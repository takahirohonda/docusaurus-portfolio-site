---
title: Quick CSS/ Tailwind Reminders
sidebar_position: 96
---

<details>
<summary>
  1. Make the height full screen on the page. The height should stay the same even the inner content height grows. Make sure to have the main content centred.
</summary>

```html
<html lang="en">
  <body className="bg-primary-black text-white">
    <div className="min-h-screen">
      <div className="container h-screen flex flex-col items-center px-[16px]">
        <nav>
          ...
          <nav>
            <main className="flex flex-col justify-center h-full"></main>
          </nav>
        </nav>
      </div>
    </div>
  </body>
</html>
```

</details>

<details>
<summary>
  2. Align items in the middle when `flex-row` and `flex-col`. Also vertically center the content when `flex-row` and `flex-col`.
</summary>

2-1. `flex justify-center` -> `justify-content: center` is used for x axis.

2-2. `flex flex-col items-center` -> the css to align items will be reversed when `flex-col`.

2-3. `flex items-center` -> `align-items: center` is used for y axis.

2-4. `flex items-center`

This is so far the best cheat sheet for flex: https://css-tricks.com/snippets/css/a-guide-to-flexbox/.

</details>

<details>
<summary>
  3. What are the default breakpoints in tailwind?
</summary>

```
sm (640px) max-width: 640px;
md (768px) max-width: 768px;
lg (1024px) max-width: 1024px;
xl (1280px) max-width: 1280px;
2xl (1536px) max-width: 1536px;
```

We can add new breakpoints like this:

```ts
module.exports = {
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}
```

Other breakpoint examples...

```ts
export const BREAKPOINT = {
  XS: 640, // tablet - portrait
  SM: 768, // tablet - landscape
  MD: 1024, // laptop - smaller
  LG: 1280, // laptop - medium
  XL: 1536, // desktop
  XXL: 1920, // desktop - extra wide
} as const
```

</details>

<details>
<summary>
  4. What are the differences between replaced elements (like iframe, img, video, embed, fencedframe) and block level containers (like div, p)

</summary>

**Replaced Elements**

- Has an intrinsic size defined by its content or attributes (e.g., width and height).
- Won't automatically stretch to fit its container unless something like width 100% is applied.
- Isolated and rendered separately by the browser, making it less responsive to flexbox rules without additional CSS.

https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element

**Block Elements**

- A div is a non-replaced block-level element that follows standard CSS rules for layout.
- A div automatically stretches to the width of its parent unless constrained by styles (e.g., max-width, flex-basis, or width).
- It works well with flexbox, grid, and other layout systems because it has no intrinsic size.

</details>
