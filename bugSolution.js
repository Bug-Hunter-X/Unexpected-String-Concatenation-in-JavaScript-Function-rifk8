function foo(a, b) {
  // Type checking to handle different data types.
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else if (typeof a === 'number' && typeof b === 'string' ) {
    return a + parseFloat(b);
  } else if (typeof a === 'string' && typeof b === 'number'){
    return parseFloat(a) + b;
  } else {
    return "Invalid input types";
  }
}
console.log(foo(1, "1")); // Output: 2
console.log(foo(1, 2)); // Output: 3
console.log(foo("1", 2)); //Output: 3
console.log(foo("a", 2)); //Output: Invalid input types