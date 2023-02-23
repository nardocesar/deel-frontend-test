## 1. What is the difference between Component and PureComponent? give an example where it might break my app.

The difference between Component and PureComponent is that PureComponent performs a shallow comparison of props and state, and only re-renders if there are differences, whereas Component always re-renders when the setState method is called.
For example, let's say you have a large dataset that is passed down to a child component as a prop. If you use a Component instead of a PureComponent, the child component will re-render every time the parent component re-renders, even if the dataset is unchanged. This can result in a lot of unnecessary re-renders and slow down your app.

## 2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?

Context is used to pass data down the component tree without having to pass props down manually at every level. However, using Context in combination with ShouldComponentUpdate can be dangerous because if you don't update the shouldComponentUpdate method properly, it can lead to unexpected behavior and bugs.

## 3. Describe 3 ways to pass information from a component to its PARENT.

Three ways to pass information from a component to its parent are:

Callbacks: A child component can pass data to its parent by passing a callback function as a prop, and then calling that function with the data from the child component.

Props: A child component can also pass data to its parent by updating a prop that was passed down from the parent component.

Context: If the child component is several levels deep in the component tree, you can use Context to pass data down the tree to the parent component.

## 4. Give 2 ways to prevent components from re-rendering.

Two ways to prevent components from re-rendering are:
Use PureComponent instead of Component when possible.

Use the shouldComponentUpdate lifecycle method to manually check if the component needs to re-render. This method should return a boolean value indicating whether the component should re-render or not based on the new props and state.

## 5. What is a fragment and why do we need it? Give an example where it might break my app.

A fragment is a way to group multiple elements together without adding extra nodes to the DOM. It's useful when you need to return multiple elements from a component, but you don't want to wrap them in a container element.
For example, if you have a list component that needs to render multiple list items, you can use a fragment to group the list items together without having to wrap them in a ul or ol element.

Using a fragment won't break your app, but if you're using an older version of React that doesn't support fragments, you'll need to use an alternative solution like an array or a higher-order component.

## 6. Give 3 examples of the HOC pattern.

Three examples of the Higher Order Component (HOC) pattern are:
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

To render an HTML string from the server, you can use the dangerouslySetInnerHTML prop in React. This prop takes an object with a \_\_html property containing the HTML string, which is then rendered as raw HTML. However, it is important to use this prop with caution and only when necessary, as it can be a security risk if used improperly. It is recommended to use server-side rendering or sanitize the HTML string before rendering it.
