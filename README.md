# JavaScript Fundamentals

Comprehensive study and practical implementation repository covering core JavaScript concepts, modern ES6+ features, functional programming patterns, DOM manipulation, ES Modules, asynchronous architecture, and REST API integration.

---

## Executive Summary

This repository documents a structured learning path in modern JavaScript development. It combines theoretical foundations with unit-tested coding challenges, modular web components, and asynchronous data-fetching implementations.

---

## Technical Topics Covered

### 1. Core Language Syntax & Data Types
- **Variables and Scope:** Block scoping (`let`, `const`), function scoping (`var`), and variable hoisting.
- **Type System & Coercion:** Explicit and implicit type coercion, strict equality (`===`) vs loose equality (`==`), and primitive vs reference types.
- **Operators & Control Flow:** Logical operators, short-circuit evaluation, conditional branching (`if-else`, `switch`), and iteration constructs (`for`, `while`, `do-while`).

### 2. Functions, Scope & Closures
- **Function Expressions & Arrow Functions:** Function anatomy, implicit returns, and lexical `this` binding.
- **Lexical Scope & Execution Context:** Global, function, and block scope isolation.
- **Closures & Encapsulation:** Private state preservation using closure patterns (e.g., bank account state simulation).

### 3. Data Structures: Arrays & Objects
- **Object Manipulation:** Literals, dynamic key access, method declaration, destructuring assignment, and spread operator (`...`).
- **Functional Array Methods:** Iteration and transformation via `map`, `filter`, `reduce`, `find`, and array destructuring.

### 4. DOM Manipulation, Events & Storage Persistence
- **DOM Selection & Dynamic Rendering:** Element selection (`querySelector`, `getElementById`), inner HTML updates, and dynamic element creation.
- **Event Listeners & Form Handling:** Event propagation, `preventDefault()`, `FormData` parsing, and input validation.
- **Storage Persistence:** Serialization (`JSON.stringify`) and deserialization (`JSON.parse`) using `localStorage`.

### 5. ES Modules (ESM) & Code Organization
- **Modular Architecture:** Native ES module configuration (`"type": "module"` in `package.json`).
- **Export / Import Syntax:** Named exports, default exports, and module encapsulation across components.

### 6. Asynchronous JavaScript & HTTP Requests
- **Event Loop & Asynchrony:** Non-blocking I/O execution, `setTimeout`, and callback functions.
- **Promises & Async/Await Syntax:** Resolution/rejection handling, `then`/`catch` chains, `try/catch` blocks, and asynchronous flow control.
- **Fetch API & REST Services:** HTTP GET, POST, PUT, and DELETE operations targeting external API endpoints (`api.escuelajs.co`).

---

## Repository Structure

```text
src/
├── 01-vars.js
├── 02-types.js
├── 03-operators.js
├── 04-strings.js
├── 05-coercion.js
├── 06-comparison.js
├── 07-logic.js
├── 08-if-else.js
├── 09-switch.js
├── 10-for-while-do-while.js
├── 11-anatomia-functions.js
├── 12-scope-en-javascript-global-function-block.js
├── 13-closure-bank-account.js
├── 14-arrays.js
├── 15-objects.js
├── 16-map-filter-find-reduce-with-arrays-object.js
├── 21-challenge-localStorage-con-JSONstringify-y-JSONparse.js
├── 22-module.js
├── 23-async.js
├── 24-solicitudes-http.js
├── math.js
├── dom/
│   ├── index.html
│   └── app.js
├── events/
│   ├── index.html
│   └── app.js
├── form/
│   ├── index.html
│   └── app.js
├── module/
│   ├── index.html
│   └── app.js
└── async/
    ├── index.html
    └── app.js
```

---

## Testing & Verification

Unit tests are executed using Vitest to validate state management, local storage operations, and algorithmic logic.

To run tests locally:

```bash
npm test
```

---

## License

This repository is maintained for educational and portfolio purposes.