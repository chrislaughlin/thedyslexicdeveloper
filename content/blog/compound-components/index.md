---
title: ReactJS Patterns - Compound Components
date: "2018-06-05"
---

React patterns have advanced and grown, you can now follow multiple approaches to rendering a component. One such pattern is the **Compound Component**.

Have you ever been in the position that you need to render multiple components that share the same state in multiple places?
For example let’s build out a input component that has a label. Both components respond to validation. Let’s build a very basic example.

```jsx
const App = () => {
    return (
        <div>
            <InputValidation
                label="Who is awesome?"
            />
        <div>
    );
};
```

We have an App component which will render a Input which responds to validation. Below is the code for  InputWithValidation:

```jsx
class InputValidation extends Component {
  state = {
    isValid: true
  };

  onChange = evt => {
    const text = evt.target.value;
    this.setState(
      { isValid: !text.includes("9") }, () =>
        this.props.onChange(this.state.isValid)
    );
  };

  render() {
    const {
      label
    } = this.props;
    const {
      isValid
    } = this.state;
    return (
      <Fragment>
        <span
          className={getClassName(isValid)}
        >
          {label}
        </span>
        <input
          className={getClassName(isValid)}
          onChange={this.onChange}
        />
      </Fragment>
    );
  }
}
```

As we can see above we have a component that renders a span and a input tag, when the input is changed it performs some validation and updates the isValid state value. This is fine however what if we want to change how this is rendered. For some reason we want to have the label below the input. We could hack a solution to the existing code to handle this. We could add an additional prop to InputWithValidation which sets the placement of the label.

```jsx
return (
    <Fragment>
        {
            position === 'top' &&
            <span
                className={getClassName(isValid)}
            >
                {label}
            </span>
        }
        <input
            className={getClassName(isValid)}
            onChange={this.onChange}
        />
        {
            position === 'bottom' &&
            <span
                className={getClassName(isValid)}
            >
                {label}
            </span>
        }
    </Fragment>
);
```

So now we are checking if the position is top then rendering before the input or checking of position is bottom and rendering after the input. This works but is hacky and is hard to maintain. For example if we add a sub label we need to then repeat the process for it. This is where the compound component pattern comes into play. It allows the consumer to use the component how they wish to use it.

```jsx
const App = () => (
  <div>
    <InputValidation
      onChange={onChange}
    >
      <InputValidation.Label>
        What is the coolest company?
      </InputValidation.Label>
      <InputValidation.Input/>
    </InputValidation>
  </div>
);
```

We can see now that we have access to the inner components and are able to arrange the display logic how we with. However these components are still fully aware of the parent state of theInputWithValidation component. But how is this built inside theInputWithValidation component?

First we need to add some static properties to theInputWithValidation class. These properties are actually functional React components, they are functional as all data they need will be passed as props.

```jsx
static Label = ({ isValid, children }) => {
    return <span className={getClassName(isValid)}>{children}</span>;
};

static Input = ({ isValid, change, ...props }) => {
    return (
      <input className={getClassName(isValid)} onChange={change} {...props} />
    );
};
```

We can see that the two static properties are components that deconstruct the isValid prop, the span also takes the children to allow for the customer label. The input takes the change prop to allow the validation to be performed. These get passed in via the render method below:

```jsx
render() {
    return React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        isValid: this.state.isValid,
        change: this.onChange
      })
    );
}
```

The render method returns the value of mapping over each child and cloning the child then passing new props to the child with isVald and change. We use the React children API as it provides methods that can interact with the Reach Children opaque data structure. We then use React.cloneElement which clones and return a new React element using the current element as the starting point. The resulting element will have the original element’s props with the new props merged in shallowly. This allows use to add additional props to the children passed from the parent container.

This provides us with a extendable and customisable component that the consumer can restructure and mold as they wish.
