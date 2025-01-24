# Unexpected String Concatenation in JavaScript

This repository demonstrates a common JavaScript error: unexpected string concatenation when performing addition with mixed data types.

## The Bug
The `bug.js` file contains a function that adds two arguments. However, if one argument is a number and the other is a string, JavaScript performs string concatenation instead of numerical addition. This behavior is due to JavaScript's type coercion rules.

## The Solution
The `bugSolution.js` file provides a corrected version of the function. This version explicitly checks the types of the arguments and handles them appropriately to ensure numerical addition is performed when expected.