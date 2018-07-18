---
title: Immutable Patterns
date: "2018-07-18"
---

If you work with data driven applications or have been working with React/Redux/any modern JavaScript framework/library
then you have probably heard of or follow the practice of immutability. Immutability is the act of modifying data without
 changing the original data. This helps provide context on the changes you have made and helps provide single points of
 truth. One simple example is the array push prototype.

When working with modern applications you will want to maintain immutability but some actions can be tricky to perform
in an immutable way. I have built a number of immutable utility functions to help with this.

## Updating an item in an array
Updating an item in an array is a very common use case, for example if you have an array of people and you want to change
the email address of one person.

```jsx
const people = [
    {name: 'John', email: 'john@email.com'},
    {name: 'Jane', email: 'jane@email.com'},
    {name: 'Jack', email: 'jack@email.com'},
];

const updatedPeople = updatePerson(1, {name: 'Jane', email: 'coolJane@email.com'}, people);
```

How do we write the `updatePerson` function:

```jsx
const updateItemInArray = (index, item, list) => {
    return [
        ...list.slice(0, index),
        item,
        ...list.slice(index + 1)
    ];
};
```

This util takes the array from before the item index and spreads it into a new array. Then slots the updated item after
the first half. Then takes from the item index onwards and spreads it into the array.

## Update Attribute in an Array

Like the before example, we want to update the email address. However in this instance we don't have access to the
 whole item. Just the index and array. This could happen if you have a very nested pattern in react that does not need
 to know about the whole person.

```jsx
const updateItemPropInArray = (index, attrToUpdate, value, list) => {
    const updatedItem = {
        ...list[ index ],
        [ attrToUpdate ]: value
    };

    return [
        ...list.slice(0, index),
        updatedItem,
        ...list.slice(index + 1)
    ];
};
```

the main different here, is we use the index to pull the item to be updated from the list based on the index. We then
add/update the attribute on the item. Then use the same method as before to update the array.

## Removing Items from an array

Another common use case is removing items from arrays, e.g we want to remove Jack from the array.

```jsx
const removeItemFromArray = (index, list) => {
    return [
        ...list.slice(0, index),
        ...list.slice(index + 1)
    ];
};
```

## Bonus

Each of the examples we have seen all need the index of the item in the array. However in many cases you might not track
you data by index or the order of the data could change a lot. If you want to achieve the same as above but want to use
a unique identifier for the data set. Lets use the people array but add a id to each of them.

```jsx
const people = [
    {id: 1, name: 'John', email: 'john@email.com'},
    {id: 2, name: 'Jane', email: 'jane@email.com'},
    {id: 3, name: 'Jack', email: 'jack@email.com'},
];
```

The we can build a function to get the index from an identifier. For this we can take advantage of the very popular functional
utility library [ramda](https://ramdajs.com/).

```jsx
import {
    findIndex,
    propEq
} from 'ramda';


const findIndexByAttribute = (identifier, value, list) => {
    return findIndex(propEq(identifier, value))(list);
}

console.log(findIndexByAttribute('id', 2, people)) //1
```

This can work for any attribute on the object
```jsx
console.log(findIndexByAttribute('name', 'Jane', people)) //1
```

Did you find any of these useful? Do you have any immutable tips? Let me know on twitter!

