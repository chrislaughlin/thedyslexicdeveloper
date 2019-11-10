---
title: Simple Stateful Provider
date: "2018-11-10"
---

As React hooks mature are are more wildly used I have been updating part of my applications to be more hooks focused. 
As I scale with hooks and managing large state across multiple components, I started to look into react context and how this 
could be used to share state across my application. I found context useful but there was some boiler plate needed to really 
make the most out of context. It was then when I found [this](https://kentcdodds.com/blog/how-to-use-react-context-effectively) 
post from [Kent C. Dodds](https://twitter.com/kentcdodds/). It describes a great pattern for working with context and how to 
use it in an application. You should read the post from Kent before continuing. 

I really loved this pattern and started using it thought my apps, however having to copy/paste the code from Kent's blog post 
was not sustainable. So I decided to create wrapper around this pattern. Introducing Simple Statefull Provider, and yes I know
 stateful is spelt wrong. I am the Dyslexic Developer after all. 
 
 ## So what does Simple Statefull Provider do?
 
 Simple statefull provider provides a create function that will return you a Provider component, state hook and a set state hook. 
 Under the hood it creates a new Provider component and connects up a react context to the provider and the state hooks. 
 
 Lets take a look at how it all works. 
 
 ### Creating a new provider 
 
 ```js
 import createProvider from 'simple-statefull-provider';

const [
    DemoProvider,
    useDemoState,
    useDemoSetState
] = createProvider(initState);
```

The create function takes an optional initState which will be the initial state for the context. It will then return an array 
of the provider, seStateHook and useSetState hook. It is returned as an array to allow for array destructuring assignment. This 
allows the user to rename the provider and hooks. 

### Using the provider 

```jsx
return (
    <DemoProvider>
        <App/>
    </DemoProvider>
)
```

The provider can be used just like and react provider, you can place this at the root of your application so the context is 
 available to all components. Or place it locally to where you need to use the context.
 
 ### Getting/Setting the context value 
 
 ```jsx
 const ExampleComponent = () => {
  const state = useDemoState();
  const setState = useDemoSetState();

  return (
      <p>
        <input
            value={state || ''}
            onChange={evt => {
              setState(evt.target.value)
            }}
        />
      </p>
  )
}
 ```     
 
 The two hooks can be used anywhere in the component tree under provider. useDemoState will return the state object, and 
 will trigger re-renders whenever the state has updated. useDemoSetState provides a method of updating the state. This works 
 like a traditional react setState function.
 
 Hopefully this will provide an even lower barrier to entry when getting into react hooks and context.        
