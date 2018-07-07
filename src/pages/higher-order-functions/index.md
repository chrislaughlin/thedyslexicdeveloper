---
title: Higher Order Functions
date: "2018-07-07"
---

Higher order functions is a very useful and easy to use design pattern in JavaScript. I have been using it more and
more recently. The growth in functional programming in JavaScript has moved a lot of developers down this path.

**Technical bullshit alert**
> JavaScript treats functions as first-class citizens.

This just means that functions are treated as objects, the have the type of `object`, they can be assigned as the value
of a variable. This is why you can pass functions as params to other functions and why callbacks _where+ such as cool thing.

## I still don't get it

Okay if you didn't study computer science this Idea of first class and object might not make much sense. Lets look at
some examples.

### Passing a function as a param

```jsx
const makePizza = (orderDetails, onPizzaComplete) => {
    cookPizza();
    sendForDeliver();
    onPizzaComplete();
};

makePizza(
    {type: 'meat lover'},
    () => {
        alert('Its on the way')
    }
);
```

This example shows how we can pass a call back function to an other function. This is useful for triggering some action
when the first function is complete. This pattern has gone out of fashion with the uptake of promises and async await.

when using call backs its best to follow a pattern when it comes to naming the param, e.g. `callback` or `onSomething`.

#### Higher Order Functions

A simple example of a higher order function is shown by taking a function and expanding on it.

```jsx
const add = (a, b) => a + b;
add(2, 2); // 4
```

We can then extend this to make a 10 function:

```jsx
const add = (a, b) => a + b;
const addPostFix = postFix => {
    return a => add(a, postFix)
};

const addFive = addPostFix(5);
const addTen = addPostFix(10);

addFive(5); //10
addTen(5);  //15
```

We can now create any number of add functions that have a postFix that will get added to the first number.

For higher order functions I find it best to give some sort of real world example. Lets use React for this:

If we have a list of buttons that preform an action. Lets say they can trigger our make pizza code from above.

```jsx
render() {
    return (
        <div>
            <button
                onClick={() => makePizza({type: 'meat lover'})}
            >
                Meat Lover
            </button>
            <button
                onClick={() => makePizza({type: 'veggie lover'})}
            >
                Veggie lover
            </button>
        </div>
    )
}
```

The above code will work however it triggers an anti-pattern in react. The code will create a new function on every
render and will not only cause performance issues but also will break the shallow compare for the DOM diff. This means
the code will always trigger a re-render and in turn cause redundant renders.

**We can improve this with higher order components.**

 ```jsx
 onMakePizza = type => () => makePizza(type);

 render() {
     return (
         <div>
             <button
                 onClick={this.onMakePizza({type: 'meat lover'})}
             >
                 Meat Lover
             </button>
             <button
                 onClick={this.onMakePizza({type: 'veggie lover'})}
             >
                 Veggie lover
             </button>
         </div>
     )
 }
 ```

This example shows how we can create a function that is prefixed with the type of the pizza. This function is not called
 until the button is clicked and the function knows what the type should be. This is a common pattern for prepopulting
functions with data. You could always use `bind` on the function to bind params.

```jsx
<button
 onClick={makePizza.bind(this, {type: 'meat lover'})}
>
 Meat Lover
</button>
```

However the above example will still pass other params to the `makePizza` function such as the event. You may not want/need
this.