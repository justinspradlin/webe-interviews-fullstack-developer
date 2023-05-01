### Question:

You are given a string containing a mathematical expression that includes `parentheses`, `addition`, `subtraction`
, `multiplication`, and `division` operations. You need to write a function that evaluates the expression and returns
the result.

### Function Signature:

```typescript
function evaluateExpression(expression: string): number {
  // Implementation here
}
```

### Input:

A string `expression` (1 <= expression.length <= 10^5), where `expression` is a valid mathematical expression. The
expression may contain parentheses, `addition (+)`, `subtraction (-)`, `multiplication (*)`, and `division (/)`
operations. The expression may also contain spaces between numbers and operators.


### Output:

A number representing the result of the evaluated expression.


### Examples:

```typescript
const expression1 = "3 + 5 * 2";
const result1 = evaluateExpression(expression1);
console.log(result1);
// Expected Output: 13

const expression2 = "( 6 - 2 ) * 8 / 4";
const result2 = evaluateExpression(expression2);
console.log(result2);
// Expected Output: 8

const expression3 = "1 + 2 * ( 3 - 4 ) + 5 / 2";
const result3 = evaluateExpression(expression3);
console.log(result3);
// Expected Output: 1.5

const expression4 = "10 + ( 3 - 2 ) * 8 / 4";
const result4 = evaluateExpression(expression4);
console.log(result4);
// Expected Output: 12

```

### Note:

* DO NOT USE `eval` 
* The function should follow the order of operations `(PEMDAS/BODMAS)`, where `parentheses` have the highest precedence, followed by `multiplication` and `division`, and then `addition` and `subtraction`.
* The function should handle cases with `nested parentheses` and `multiple operations`.
* The function should return the result as a number with proper decimal precision (if applicable).
