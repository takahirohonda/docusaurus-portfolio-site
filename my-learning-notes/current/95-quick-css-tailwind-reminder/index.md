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
