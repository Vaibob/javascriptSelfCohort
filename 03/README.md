# Understanding JavaScript Data Types and Operators

This repository contains a JavaScript file (`script.js`) that explores various data types and operators in JavaScript. The code covers data types like numbers, strings, booleans, null, undefined, and objects, along with demonstrating the usage of operators. Let's delve into the code and comprehend its different aspects.

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
// Data Types and Operators

// Numbers
let num0 = 3;
let num1 = 3.14;
console.log(num0 + num1);

// Strings
const firstName = "Vaibhav";
const lastName = 'Shelar';
console.log(firstName + ' ' + lastName);

// Booleans
let isLoggedIn = true;
console.log(isLoggedIn);

// NULL
let lastLoginDate = null;
console.log(lastLoginDate);

// Undefined
let dayYouWillDie = undefined;
console.log(dayYouWillDie);

// Object
const person = {
    initialName: 'Vaibhav',
    surName: 'Shelar',
    age: '22'
};
console.log(person);

// Type of Operator
console.log(typeof true);
```

This JavaScript code introduces you to various data types like numbers, strings, booleans, null, undefined, and objects. It also demonstrates how to use these data types along with the `typeof` operator to determine variable types.

## Concepts Covered

- **Data Types:** Explore different data types in JavaScript, including numbers, strings, booleans, null, undefined, and objects.
- **Operators:** Understand the usage of basic operators like `+`, `-`, `*`, and `/`.
- **`typeof` Operator:** Learn how to use the `typeof` operator to determine the type of a variable.

## Conclusion

By following the steps above, you've successfully run and understood the JavaScript code that showcases various data types and operators. Feel free to experiment with the code and explore further!