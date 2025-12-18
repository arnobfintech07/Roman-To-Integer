## Roman to Integer Converter
A JavaScript utility to convert Roman numeral strings into decimal integers using a manual indexing approach.

## Description

This project provides a functional solution for the "Roman to Integer" problem. It uses two synchronized arrays to map Roman symbols to their respective numerical values and implements the subtraction rule (e.g., IV = 4) by comparing current and subsequent values.

The project was created as a learning exercise to explore algorithms and data structures in JavaScript.

## Getting Started

### Prerequisites

You need a modern web browser or a JavaScript runtime environment which can be run in Console

### Installation and Usage

1.  **Clone the repository:**
    ```bash
    git clone github.com
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd Roman-Numbers-Conversion

### How it Works
The algorithm iterates through the input string and compares the value of the current Roman symbol with the one following it:
If the current value is less than the next value (e.g., IV), it subtracts the current value from the total.
Otherwise, it adds the value to the total.
The project uses a custom getIndex function to map symbols like M, D, and C to their respective numeric values without using built-in JavaScript object



### Algorithm Workflow
1.getIndex(arr, target): A helper function that performs a linear search to return the index of a character, returning -1 if not found.
2.romanToInt(romanStr): The primary function that iterates through the string, compares current vs. subsequent values, and aggregates the final result.
3.Core Logic:
The converter operates on the principle of right-to-left comparison logic:
Symbol Mapping: It identifies the integer value of each character by locating its position in a predefined symbols array and retrieving the corresponding index from a values array.
4.Subtraction Rule: If a smaller symbol precedes a larger symbol (e.g., "IV"), the smaller value is subtracted from the total.
Addition Rule: In all other cases, the value is added to the running total.
 ## Code

The conversion logic is contained within a single block of JavaScript code:

```javascript
