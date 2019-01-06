---
title: Are Hooks Ready?
date: "2019-01-06"
---

So React hooks are awesome and we all want to use them in production. But I don't know about you but I don't like deploying production code using an non stable version of a library. So until then i'll will have to just play about with hooks on side projects. If you have not heard about hooks you can read more on the [React docs](https://reactjs.org/docs/hooks-intro.html) or check out the [video](https://www.youtube.com/watch?v=dpw9EHDh2bM) from React Conf 2018. 

[*So are hooks ready?*](https://are-react-hooks-ready.netlify.com/) 

_As of writing this no_. However they will be ready soon. If you clicked the above link you would have seen my latest side project. Inspidered by sites like [http://isfiberreadyyet.com/](http://isfiberreadyyet.com/) and [http://youmightnotneedjquery.com/](http://youmightnotneedjquery.com/) I decided to build [https://are-react-hooks-ready.netlify.com/](https://are-react-hooks-ready.netlify.com/). It is a simple site that checks if any hook features exist on the latest stable version of react. Lets look at how this is achieved. 

The base of thr site is a simple index.html page with some inline scripts. Below is the core of the code:

```jsx
const message = React.useState ? "HOOKS ARE READY!" : "NOT READY YET!";
const version = React.version;
const App = (
  <div>
    <h2>{message}</h2>
    <p>Current stable version: {version}</p>
  </div>
```

As `useState` is a new pattern added by hooks it will only exist on the React object when hooks are included in the current version of react. Checking if this exists can tell us if we can use hooks. So how are we loading in the version of React and ensuring that we always have the latest stable version. 

Using [*unpkg*](https://unpkg.com/#/), this a great resource that lets you all your favourte npm packages without having to use npm! Useing unpkg is great when you just want to test something out or have a simple project that does not require bundling or packaging. You can simply link to the package you need in your html.

```html
<script src="https://unpkg.com/react/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
```

In this case pointing to the package name will give you the latest stable release. Which means every time my site is accessed I will get the latest stable version. For many use cases this is a bad practice as the user is downloading all that JS each time. However you can also link to a specific version   

```html
<script src="https://unpkg.com/react@16.0.0/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>
```

Using these techniques and tools allows us to quickly develop and deploy a fun application. You can have a look at the full code [here](https://github.com/chrislaughlin/are-react-hooks-ready/blob/master/index.html).
