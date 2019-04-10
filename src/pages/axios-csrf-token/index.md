---
title: From Cookie to Header with Axios
date: "2019-04-10"
---

If you have worked with a JavaScript application that needs to talk with a server you have most likely used a
library to handle the REST (GET, POST, PUT DELETE) interactions. Over the last year or so I have been moving from jQuery
ajax to [axios](https://github.com/axios) (_yes I know I'm probably the only person still using jQuery_). Axios provides a more configurable and easy
to use API for REST interactions. Also even know I'm only the ajax code from jQuery I am in turn shipping the whole jQuery
library to the end user.

Also if you have ever built and application that talks with a server then you might have needed some method of
authentication and need to pass a token to and from the server to ensure that its the user you know making REST calls.
In most applications you will use a csrf token. This token is linked to the users session and can help authenticate them.

So whats the blog post really about? Its how I broke a production application and had to read a lot of code to fix it. It
all started when our application wanted to change how we manage the csrf token. Previously the token was stored on the browser
cookie and in the JavaScript we would read the cookie, get the token and then add this as a header to any write requests
(POST, PUT and DELETE). This worked fine until we noticed that the cookie was unsecured and this needed to change. So we
decided to add http only and secure true to the cookie which in turn locks down the cookie from being read by the
JavaScript. However we still needed to get the token and it's needed for REST calls. So we obtained the token via a different
method (_which I can't disclose_). But now we had the token and all was good...

Well sort of! At first from testing everything seemed fine when testing the changes, however when we had existing users
without having a fresh session in which they still had the old cookie issues started showing up. The main issue was with
all REST calls that used axios. It looked like they still used the old value from the old cookie which was an invalid token.
But looking at out code I could see that the correct token was being sent as a header, however the value from the cookie was
always being sent to the server. My first thought, the backend team has broken something. I was unfortunately wrong. You
can see from the code below how I was 100% sure that the JavaScript was sending the correct value:

```javascript
axios.request({
    { data }
    'post',
    url,
    headers: {
        [ X_XSRF_TOKEN_HEADER ]: getCSRFToken(),
    }
});
```

So it was time to Google like a mad man in hopes that someone else had this issue, from my searching I could not see anything
that matched my use case 100% but I was seeing some trends and some hints that it might be the core of axios causing me issues.
So I started to dig thought the core code for the axios library. This digging led me to the following [code](https://github.com/axios/axios/blob/503418718f669fcc674719fd862b355605d7b41f/lib/adapters/xhr.js#L103)

```javascript
// Add xsrf header
  var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
    cookies.read(config.xsrfCookieName) :
    undefined;

  if (xsrfValue) {
    requestHeaders[config.xsrfHeaderName] = xsrfValue;
  }
```

Lets step though this code and see whats going on. IF the config has the `withCredentials` OR the url is the same origin
as the current app AND there is a `xsrfCookieName` config value THEN get the token value from the cookie. IF the value
exists then set this value as the token header. However this is not only setting the value but its also overwriting any
header with the same name passed into axios. So we have found the smoking gun what now. We could accept defeat and move
back to jQuery. Trust me I thought about this. However we need to advance and move forward and fix issues not run away.

As you might have noticed in my axios example I'm not passing a `xsrfCookieName` config value. So where does this value
come from? Axios has a number of default values that get added to all REST calls, including the `xsrfCookieName`. So the
fix here is to change the default value. For me (_note this could be a really bad fix_) I was able to change the default
value to `undefined` which then hits the ELSE of the `if (xsrfValue) {` code and thus respects the token passed in on each
config and not the value from the cookie.

```javascript
axios.defaults.xsrfCookieName = undefined;
```

What have we learnt from this?
- Moving from a cookie based token to a header based token is not a simple change
- Reading the core source of a third party JavaScript library is not as scary as you think, its just JavaScript too!
- Make sure to test code with all possible use cases and don't clear your cookies from the browser unless you really should
