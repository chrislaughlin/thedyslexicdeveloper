---
title: Do You Even Babel Bro!
date: "2018-06-26"
---

![Do You Even Babel Bro!](./doyoueven.jpg)

I recently ran into an issue while running my test suit.

```
PhantomJS 2.1.1 (Mac OS X 0.0.0) ERROR
SyntaxError: Unexpected token 'const'

```

For full context my tests run using phantom, yes I know its old and everyone uses chrome driver or whatever the new
hotness is.

## Whats going on here?

So when this happened my first reaction was to wipe clean my node modules, as with all JavaScript development bugs
`rm -rf node_modules/ && npm i`. This still did'nt fix the issue, at this point I thought that phantom was truly broken
and I would have to join the rest of the JavaScript community and upgrade my testing setup. However no one has time for
that, maybe its time to give up on testing all together?

## There must be a solution
I can't give up that early, I need to find the problem! All I had to go on was the fact that `const` was not expected.
As my code ran fine in the browser this had me thinking it was something to do with transplantation. Also for context
this all started after I added the package [query-string](https://www.npmjs.com/package/query-string) when looking back
at the docs I noticed
> "If you want support for older browsers, use version 5: npm install query-string@5"

This got me thinking more about transplantation.

## It was Babel the whole time
Well sort of, the package I was consuming was not being transpiled into ES5 code and most babel/webpack configs
exclude the node modules folder from any transpilation to save processing. As most modern web browsers support a wide
range of ES6 features and Phantom still only supports ES5 (_at least the version I use does_) the issue only showed in
testing.

## Whats the fix already
If you made it this far, congrats you were able to read my rambles.

So this way to resolve this issue is to add the package in question to the list of includes in your babel config. Either
in your .babelrc or in your webpack config. An example from webpack can be seen here:

```javascript
test: /\.js?$/,
loader: 'babel-loader',
query: {
    cacheDirectory: true,
    presets: [...],
    plugins: [...]
},
include: [
    path.resolve(__dirname, 'src'),
    path.resolve(__dirname, 'node_modules', 'query-string')
]
```

## What was the point of this post?
I wanted to highlight an issue that can commonly happen and if you are like me and only test with Chrome could break your
 code in older browsers or test runners.

However this does open the bigger question, should you always transplie a node module when releasing it into the wild?
has the community and browsers advanced enough that releasing production code with `const` is acceptable? I always follow
the pattern of publishing a module in ES5 code as that's what has always been done until now. But the JavaScript space has
changed and ES6 is getting more and more support.

If you have views on this or found this post helpful tweet me at [chrislaughlin](https://twitter.com/chrislaughlin)!

**After writing and publishing this post I fould a very relevant post on the babel site [On Consuming (and Publishing) ES2015+ Packages](https://babeljs.io/blog/2018/06/26/on-consuming-and-publishing-es2015+-packages)**
