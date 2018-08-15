---
title: Quick Tip - Double Bang
date: "2018-08-15"
---

QUICK TIP TIME!!!!!

Double bang, double exclamation or not not whatever you want to call it. You will most likely see or use this in your
development life. 

## What is this?

The double bang operator can be used when doing equality checking i.e if statements. Well its not actually an operator 
is two operators used together. 

![NOT](./not.gif)

To really understand this we need to look at the `NOT` operator lets see this in action below:

```jsx
console.log(1 == 1) // true
console.log(1 != 1) // false
console.log(!true) // false
console.log(!false) // false
```

This can be used when trying to determine if values equal other values but you can also use `!!` in some use cases. So 
if we wanted to check if a value is true but also the value could be null or undefined. As JavaScript is not strongly
typed the below can happen:

```jsx
console.log(!undefined) //true
console.log(!null) //true
console.log(!false) //true
```

This can be used to quickly determine if the value is true or false without having to do null/undefined checks e.g.

```jsx
const cat = {name: 'Mittens', likes: 'string'};  
const dog = null;

console.log(!!cat); //true  
console.log(!!dog); //false 
```

Or for some reason you need a function to always return a boolean you could have something like below:


```jsx
const hasItems = (arr) => !!arr.length;

//compared to

const hasItems = (arr) => arr.length !== 0;
```

## Should you use this?

Probably not, it can confused your code and make things harder to read.

![OKAY](./okay.gif)

