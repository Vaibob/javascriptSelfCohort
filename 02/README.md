# Understanding Variables in JavaScript

This repository contains a JavaScript file (`script.js`) that explores the concept of variables in JavaScript, including their definitions, scopes, and types (`var`, `let`, and `const`). Let's dive into the code and understand its different aspects.

## Prerequisites

To run this code, you'll need:

- A code editor (e.g., Visual Studio Code, Sublime Text)
- A web browser (e.g., Google Chrome, Mozilla Firefox)

## Getting Started

1. **Clone the Repository:** Start by cloning this repository to your local machine using Git or by downloading the ZIP file and extracting it.

2. **Navigate to the Folder:** Open the repository folder in your chosen code editor.

3. **Open `index.html`:** Inside the folder, you'll find an `index.html` file. Open it in your web browser by either double-clicking the file or right-clicking and selecting "Open with" your browser.

4. **Access Console:** With the web page open, right-click on the page and select "Inspect" (or press `Ctrl + Shift + I` or `Cmd + Option + I` on Mac) to open the browser's developer tools. Navigate to the "Console" tab.

5. **Observe Output:** As you load the page, you will see messages from the JavaScript code appearing in the console.

## Code Explanation

### `script.js`

```javascript
// Variable Definitions and Scopes

// Using 'var'
var age = 22;
console.log(age);

// Performing operations on variables
var num1 = 10;
var num2 = 20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

// Scope of 'var' and 'let'
if (true) {
    var scopeParameter = 69;
    console.log("Using 'var' within 'if': " + scopeParameter);
}

// Using 'let' with limited scope
if (true) {
    let scopeParameterLET = 69;
    console.log("Using 'let' within 'if': " + scopeParameterLET);
}

// Using 'const'
const motivationQuotient = "high";
console.log("Using 'const': " + motivationQuotient);
```

This JavaScript code demonstrates the usage of `var`, `let`, and `const` for declaring variables with different scopes and characteristics.

## Concepts Covered

- **Variables (`var`, `let`, `const`):** Learn about the different ways to define variables and their varying scopes and characteristics.
- **Cammel Casing:** Understand the convention for naming variables using camel case.
- **Variable Operations:** Observe how variables can be used in mathematical operations.
- **Variable Scopes:** Explore how the scope of variables differs between `var`, `let`, and `const`.

## Conclusion

By following the steps above, you've successfully run and understood the JavaScript code that illustrates variable definitions, scopes, and types. Feel free to experiment with the code and explore further!
