# What was hard

- JSX
- Props
- State

JSX => JavaScript XML

```jsx
// In a .html document
<h1>Hello!</h1>
// is HTML
```

```jsx
// In a .jsx document
<h1>Hello!</h1>
// is JSX
```

```jsx
<h1>Hello!</h1>;
<h1 style="" class="" aria-label="">

ReactDOM.createElement("h1", { text: "Hello!" });

// Rendered in browser
```

```jsx
  <h1 className="" onClick={/*...*/}></h1>

  const Header = function(props){
    return (
      <header></header>
    )
  }

  // Header()
  <Header style="" className="" date=""/> => props {style:"", classname:"", date:""}

  const opts = {style:"", classname:"", date:""}

  <Header {...opts} />



  const someFunction = (arg1, arg2, arg3, arg4, arg5, arg6) => {}

  someFunction(null,null,null,null,null, 5)

  const betterFunction = (opts) => {}

  betterFunction({arg6:5})
```
