# Fly-JSS

## Overview

Optimized library to create "Atomic CSS IN JS" inspired in **Stylex** CSS of Facebook.

## Installation

To use the library you need to install the package typing the next command.

```console
$ yarn add fly-jss
```

```console
$ npm i add fly-jss
```

### Uso

```javascript
import fly from "fly-jss";

const styles = fly.create({
	primary: {
		background: "blue",
		color: "white",
	},
	flat: {
		color: "blue",
		border: "2px solid blue",
	},
});

function App() {
	return (
		<div>
			<button className={styles("primary")}>PRIMARY BUTTON</button>
			<button className={styles("flat")}>FLAT BUTTON</button>
		</div>
	);
}
export default App;
```

```javascript
import fly from "fly-jss";

const styles = fly.create({
	title: ({ fontSize }) => ({
		fontWeight: "bold",
		fontSize,
	}),
});

function App() {
	return (
		<div>
			<p classNames={styles.title({ fontSize: "2rem" })}>Title 1</p>
		</div>
	);
}
export default App;
```
