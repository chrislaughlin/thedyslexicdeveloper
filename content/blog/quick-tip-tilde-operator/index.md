---
title: Quick Tip - The Tilde Operator
date: "2018-07-12"
---

QUICK TIP TIME!!!!!

This:

```jsx
const str = 'awesome';
if (str.indexOf('a') !== -1) {
    console.log('PASS');
}
//PASS
```

Is the same as this:

```jsx
const str = 'awesome';
if (~str.indexOf('a')) {
    console.log('PASS');
}
//PASS
```

![WUT!](./wut.gif)

This is an example of the bitwise NOT operator. You can read more on what [Bitwise Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)
but this is one of the them.

The first code example is a pre ES6 example of checking if a string contained a sub string. This has been replaced with
the [String.includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes) prototype.

The ~ (_tilde_) operator preforms a NOT operation it which inverts the bits and returns the opposite value.

When the NOT operator is run on a number it returns `-(x + 1)` so for example when NOT is run on 0 it returns -1. The
main reason to use tilde is to handle the 0 index being returned and not needing to check the value against -1.

![I understand!](./understand.gif)

## Should you use this?

**NO!** this does _look cool_ in your code, but it can be hard to understand. If you had never heard of the operator before
you read this post. Then you would struggle when you found `~` in some code while fixing a production bug at 5am.
