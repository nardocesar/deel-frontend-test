## 1. What is the difference between Component and PureComponent? give an example where it might break my app.

The main difference between `Component` and `PureComponent` is that `PureComponent` implements a `shouldComponentUpdate` (or `React.memo` in functional components) method that performs a shallow comparison of props and state before re-rendering, whereas `Component` always re-renders when its parent component re-renders, regardless there's updates.

In some cases, using `PureComponent` can cause issues because it only performs a shallow comparison. For example, if you have an array of objects as a prop, and the reference to the array changes but the content of the array does not, `PureComponent` will still re-render, which may be inefficient.

In this case, it may be better to use `Component` or implement a custom `shouldComponentUpdate` method that performs a deep comparison of the array.

## 2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

When using the `Context` API in combination with `shouldComponentUpdate`, it is possible to accidentally cause an infinite loop of re-renders. This can happen if the `Context` value is changed in a way that does not trigger a re-render of the component, but still causes the component to receive a new context value via the contextType API or the `useContext` hook.

To avoid this issue, it is recommended to avoid using `shouldComponentUpdate` when using the Context API or to ensure that any changes to the Context value trigger a re-render of the component.

## 3. Describe 3 ways to pass information from a component to its PARENT.

Three ways to pass information from a component to its parent are:

Callbacks: A child component can pass data to its parent by passing a callback function as a prop, and then calling that function with the data from the child component.

Props: A child component can also pass data to its parent by updating a prop that was passed down from the parent component.

Context: If the child component is several levels deep in the component tree, you can use Context to pass data down the tree to the parent component.

## 4. Give 2 ways to prevent components from re-rendering.

Use `PureComponent` instead of `Component` when possible.
Use the `useMemo` hook to memoize a value so that it is only recomputed when its dependencies change. This can be useful for expensive computations that don't need to be recalculated on every render.

## 5. What is a fragment and why do we need it? Give an example where it might break my app.

A fragment is a way to group multiple elements together without adding extra nodes to the DOM. It's useful when you need to return multiple elements from a component, but you don't want to wrap them in a container element.
For example, if you have a list component that needs to render multiple list items, you can use a fragment to group the list items together without having to wrap them in a ul or ol element.

Using a fragment won't break your app, but if you're using an older version of React that doesn't support fragments, you'll need to use an alternative solution like an array or a higher-order component.

## 6. Give 3 examples of the HOC pattern.

Three examples of the Higher Order Component (HOC):

WithAuth: An HOC that adds authentication to a component. The HOC would check if the user is authenticated and either render the component or redirect to the login page.

WithTheme: An HOC that adds a theme to a component. The HOC would pass down a theme object as a prop to the component, allowing it to use the theme's styles.

WithLoading: An HOC that adds a loading indicator to a component. The HOC would wrap the component in a loading spinner and only render the component once the data has been loaded.

## 7. what's the difference in handling exceptions in promises, callbacks and async...await.

The difference in handling exceptions in promises, callbacks, and async/await is that promises and async/await handle errors using catch blocks, while callbacks use the err parameter passed to the callback function. Promises and async/await also have built-in error handling that allows you to catch errors in a more concise and readable way.

## 8. How many arguments does setState take and why is it async.

setState method takes two arguments: an object representing the new state to be set, and an optional callback function to be executed after the state has been updated. The reason why setState is asynchronous is to improve performance by batching multiple updates together, rather than updating the state after every single change.

## 9. List the steps needed to migrate a Class to Function Component.

To migrate a Class Component to a Function Component, follow these steps:

Replace the class keyword with the function keyword.
Remove the render() method and instead return the JSX code directly.
Replace this.props with just props.
Replace this.state with the useState hook.
Replace any other lifecycle methods with their corresponding hooks (e.g., componentDidMount() with useEffect()).
Remove the constructor and any other class-specific methods.

## 10. List a few ways styles can be used with components.

Styles can be used with components in several ways:
Inline styles using the style attribute in JSX.
External stylesheets imported into the component.
CSS Modules, which allow you to import styles as an object and reference them using keys.
CSS-in-JS libraries like styled-components or emotion.

## 11. How to render an HTML string coming from the server.

To render an HTML string from the server, you can use the `dangerouslySetInnerHTML` prop in React, which is highly unrecommended and dangerous.
