# <p align="center"> Fly-JSS </p>

Optimized library to create "Atomic CSS in JS" inspired in **Stylex** at Facebook.

## Installation

To use the library you need to install the package typing the next command.

```console
$ npm i fly-jss
```

## Usage

The main way to use styles is instancing the method **create** of module. After whe use the method props to pass arguments.

```javascript
import fly from "fly-jss";

// Create base styles
const styles = fly.create({
 primary: {
   background: "blue",
 },
 flat: {
   border: "2px solid aqua",
 },
 text : {
   color : "white"
 }
});


// Using styles passing arguments
function A() {
  return(
    <button className={styles.props("primary","text")}>Primary button</button>
  )
}

// Passing arguments how object
// the names are key of styles created, if the value is true it class will be added.
function B() {
  return(
    <button className={styles.props({
      primary : isPrimary,
      flat : isFlat,
    })}>
     Dynamic button
    </button>
  )
}

```


Whe can create dynamic styles using a method in a property.

```javascript
import fly from "fly-jss";

// Create dynamic base styles
const styles = fly.create({
 title: ({ fontSize }) => ({
   fontSize,
   fontWeight: "bold",
 })
});

function App() {
 return (
  <div>
    <p classNames={styles.dynamic.title({ fontSize: "2rem" })}>Title 1</p>
  </div>
 );
}
export default App;
```


The project uses below [CXS](https://github.com/cxs-css/cxs), a library with high performance, deduplicates repeated styles and zero dependencies.
If you wank to know most about this subject, in the next link [Atomic CSS-in-JS](https://sebastienlorber.com/atomic-css-in-js) you can learn how work it methodology.
