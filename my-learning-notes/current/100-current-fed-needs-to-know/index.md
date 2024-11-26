---
title: Frontend Related
sidebar_position: 1000
---

### 1. Difference between Incoming and Current change when we merge or rebase.

<details>
<summary>
`git pull origin master` (merge)
</summary>

_Current changes_

Changes on your current feature branch.

_Incoming changes_

Changes you are pulling from i.e the master branch

</details>

<details>
<summary>
`git pull origin master --rebase` (rebase)
</summary>
During rebase your feature branch changes are applied on top of the commits that
are already there in master branch.

_Current changes_

Changes on the master branch.

_Incoming changes_

Changes on the feature branch.

</details>

### 2. Falsy values in Javascript

<details>
<summary>
  How many falsey values are there in JavaScript? List them all.
</summary>

There are 6 falsey values in JavaScript: `undefined`, `null`, `NaN`, `0` and `""` (empty string) and `false`.

</details>

### 3. Destructuring

<details>
<summary>
  What is the console output?

```JavaScript
const context = { a: 1, b: 2, c: 3 };
const { a, ...contextObj } = context;
console.log(contextObj);
```

</summary>

We can destucture an object with selected values and return the rest with a named object.
`contextObj` will be `{ b: 2, c: 3 }`

</details>

### 4. Media Queries

<details>
  <summary>
    What does these media queries mean?

    ```css
    @media only screen and (max-width: 1024px) { ... }

    @media only screen and (min-width: 1024px) { ... }

    @media only screen and (max-width: 1024px) and (min-width: 800px) { ... }
    ```

  </summary>

max-width: less than or equal to 1024px then do ...

  <br />
  min-width: greater than or equal to 1024px, then do ...
  <br />
  combined: between 800 and 1024px
  <br />
</details>

### 5. Prefer using nullish coalescing operator (??) instead of a logical or (||)

<details>
  <summary>
    What is '??'? Why is it prefereable to '||'?
  </summary>

The nullish coalescing operator ?? allows providing a default value when dealing with null or undefined. It only coalesces when the original value is null or undefined. Therefore, it is safer and shorter than relying upon chaining logical || expressions or testing against null or undefined explicitly.

  <br />
  This rule reports when disjunctions (||) and conditionals (?) can be safely replaced with coalescing (??).
  <br />
  The TSConfig needs to set strictNullChecks to true for the rule to work properly.
  <br />
</details>

### 6. Double Negation (!!) and Boolean()

<details>
  <summary>
    What's the difference btween `!!` and `Boolean()`? What do they do?
  </summary>
  They are functionally equivalent. Both converts a value to a boolean based on its
  truthiness.
  <br />
  All falsy values (null, undefined, 0, NaN, false, and "") will be converted to
  false. All truthy values to true.
  <br />
</details>
