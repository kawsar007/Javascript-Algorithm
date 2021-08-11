// 1. Write a function that returns the sum of two numbers.
// 2. Write a function that returns the sum of all numbers regardless of # of params.

// Example: For param1 = 1 and param2 = 2, the output should be add(param1, param2) = 3;

// Requirments: 1) Arithmetic Operators. 2) Rest Operators. 3) forEach().

function sum(...param1){
   let total = 0;
   param1.forEach(item => total += item)
   return total;
}
console.log(sum(8,2));