---
title: React Authorization Wrapper
date: "2018-08-01"
---

I was recently listening to the [syntax podcast](https://syntax.fm/show/055/hasty-treat-user-role-systems) and they were
talking about user roles, authentication and authorization. This made me think of how I added client side **authorization**
to my application. I focus on the authorization as this controls the features visible to the user. You can not 100% use
client side code for authentication and not even 100% for authorization. This method is useful for hiding or showing
features to the user but you should also have server side measures in place to prevent users from doing actions they
should not be able to do.

## The wrapper

The code used to create the wrapper makes use of a common React pattern HOC (Higher Order Components).

```jsx
const meetsAllAuthorities = requiredAuthorities => {
    const currentUserAuthorities = UserStore.getCurrentUserAuthorities();

    return currentUserAuthorities.includes(...requiredAuthorities);
};

const AuthorizationWrapper = allowedAuthorities => {
    return WrappedComponent => {
        return props => {
            if (!meetsAllAuthorities(allowedAuthorities)) {
                return <div />;
            }

            return (
                <WrappedComponent {...props} />
            );
        };
    };
};
```

So we can see two functions that are needed, `meetsAllAuthorities` and `AuthorizationWrapper`. AuthorizationWrapper is our
HOC this takes the auths needed to render the component. Then returns a function which takes a React component. This
inner function takes props and decides if the WrappedComponent should be rendered.

We can also see a `meetsAllAuthorities` function, this handles if the user has the authorities to view the component. This logic
is very simple in my use case as the user will have an array of authorities and is compared against the required authorities.
You could change this to meet your application and how you manage user authorities.

## Using the Wrapper

When using the wrapper you can wrap your component at the export phase as shown below:

```jsx
import React from 'react';
import AuthorizationWrapper from './authorizationWrapper';

const DeleteOrderButton = ({
    orderId,
    onDeleteOrder
}) => {
    return (
        <button
            onClick={onDeleteOrder}
        >
            DELETE
            <i className="delete-icon"/>
        </button>
    );
};

export default AuthorizationWrapper(['MANAGE_ORDERS'])(DeleteOrderButton);
```

In this example we only want to show the delete button to users that have the `MANAGE_ORDERS` authority. When exporting
we export the default DeleteOrderButton we instead wrap it in the AuthorizationWrapper HOC. This means at run
time the users authority is checked and the component is rendered if needed. Then you can use the component as normal
throughout your application.

```jsx
<OrderInfo>
    Name: {order.name}
    <DeleteOrderButton
        orderId={order.id}
        onDeleteOrder={this.deleteOrder}
    />
</OrderInfo>
```

### What about testing

If you have unit testing and want to render the DeleteOrderButton component you can either stub or setup the user/authorization data.
However you can also export an unwrapped version of the component for testing.

```jsx
export default AuthorizationWrapper('MANAGE_ORDERS')(DeleteOrderButton);
export { DeleteOrderButton as Unwrapped };

......
//test.js
import { Unwrapped as DeleteOrderButton } from './authorizationWrapper';
```

If you don't like the thought of leaving _testing_ code littered throughout your project when its only needed for the
testing process you could use [babel-strip-test-code](https://github.com/madole/babel-strip-test-code) and follow the pattern
of:

```jsx
export const __test__ {
    testComp: DeleteOrderButton
};

```

**Whats your method for client side authorization?**

**What do you think of this method?**

**Let me know on twitter!**