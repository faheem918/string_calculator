# **String Calculator TDD Kata**

This project implements a **String Calculator** as part of the TDD Kata challenge. The goal is to demonstrate proficiency in Test-Driven Development (TDD) by iteratively building a solution using tests, following best practices.

---

## **Features**

The `add` function supports the following functionality:

1. **Empty String:** Returns `0` for an empty string input.
2. **Single Number:** Returns the number itself for a single input.
3. **Two Numbers:** Returns the sum of two numbers separated by a delimiter.
4. **Multiple Numbers:** Returns the sum of multiple numbers separated by a delimiter.
5. **Newline Delimiter:** Handles newlines as valid delimiters.
6. **Custom Delimiters:** Supports single-character custom delimiters specified in the input.
7. **Negative Numbers:** Throws an exception for negative numbers and lists all negative values in the error message.
8. **Numbers Larger than 1000:** Ignores numbers greater than 1000.
9. **Delimiters of Any Length:** Supports delimiters of any length (e.g., `***`).
10. **Multiple Custom Delimiters:** Allows multiple delimiters to be used simultaneously (e.g., `[*][%]`).
11. **Multiple Delimiters with Different Lengths:** Supports multiple delimiters of varying lengths (e.g., `[*][%%]`).

---

## **Getting Started**

### **Prerequisites**

- [Node.js](https://nodejs.org/) installed on your machine.

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/faheem918/string_calculator.git
   cd string_calculator
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

---

## **Usage**

Run the program with:

```javascript
const add = require("./src/calculator");

console.log(add("")); // 0
console.log(add("1")); // 1
console.log(add("1,2,3")); // 6
console.log(add("//[***]\n1***2***3")); // 6
```

---

## **Testing**

This project uses **Jest** for unit testing. Run the tests with:

```bash
npm test
```

### **Test Coverage**

- Tests cover all the required features and edge cases, following TDD principles.
- Check the `tests/calculator.test.js` file for details.

---

## **Project Structure**

```plaintext
.
├── src
│   └── calculator.js       # Implementation of the String Calculator
├── tests
│   └── calculator.test.js  # Unit tests for the String Calculator
├── package.json            # Project configuration and dependencies
├── README.md               # Project documentation
```

## **Example Inputs and Outputs**

| Input                  | Output                                        |
| ---------------------- | --------------------------------------------- |
| `""`                   | `0`                                           |
| `"1"`                  | `1`                                           |
| `"1,2"`                | `3`                                           |
| `"1,2,3,4"`            | `10`                                          |
| `"1\n2,3"`             | `6`                                           |
| `"//;\n1;2;3"`         | `6`                                           |
| `"1,-2"`               | Exception: `negative numbers not allowed: -2` |
| `"2,1001,6"`           | `8`                                           |
| `"//[***]\n1***2***3"` | `6`                                           |
| `"//[*][%]\n1*2%3"`    | `6`                                           |
| `"//[*][%%]\n1*2%%3"`  | `6`                                           |

---

## **Author**

- **Name:** Faheem Ahmad

---
