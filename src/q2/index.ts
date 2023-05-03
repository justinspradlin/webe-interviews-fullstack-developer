// Function to evaluate arithmetic expressions
export function evaluateExpression(expression: string): number {
  // console.log(expression);

  // Split the expression string into individual chars
  let tokens = expression.split('');

  // We will need to create a couple of stacks to capture values and operations

  // Create a stack to hold the values
  let values = [];

  // Create a stack for operations
  let operations = [];

  // Loop over the tokens and determine if they are part of a value or operations
  for (let i = 0; i < tokens.length; i++) {
    const currentToken = tokens[i];

    // if the token is a space do not include it
    if (currentToken == ' ') {
      continue;
    }

    // If the token is a number (digits or periods), send it to the value stack
    if (isNumeric(currentToken)) {
      let valueBuffer = '';

      // There may be more than one digits in number so check for digits or periods in following characters
      while (i < tokens.length && isNumeric(tokens[i])) {
        valueBuffer = valueBuffer + tokens[i++];
      }
      values.push(parseFloat(valueBuffer));

      // the prior while loop mutated the index i; so it must be moved one "to the left" after reading the full numerical value
      i--;
    }

    // push the starting parentheis to the operations stack
    else if (currentToken == '(') {
      operations.push(currentToken);
    }

    // when closing parentheis is encountered solve the prior operations / values
    else if (currentToken == ')') {
      while (operations[operations.length - 1] != '(') {
        const valueB = values.pop() as number;
        const valueA = values.pop() as number;
        if (valueB && valueA) {
          values.push(applyOperation(operations.pop(), valueB, valueA));
        }
      }
      operations.pop();
    }

    // Check if the current token is a operation
    else if (
      currentToken == '+' ||
      currentToken == '-' ||
      currentToken == '*' ||
      currentToken == '/'
    ) {
      // While top of operations stack has same or greater precedence to current token and that token is an operator,
      // Apply operator on top of operations stack to top two elements in values stack
      while (
        operations.length > 0 &&
        isHigherPriority(currentToken, operations[operations.length - 1])
      ) {
        const valueB = values.pop() as number;
        const valueA = values.pop() as number;
        if (valueB && valueA) {
          values.push(applyOperation(operations.pop(), valueB, valueA));
        }
      }

      // Push current token to operation stack
      operations.push(currentToken);
    } else {
      throw `Invalid token encountered ${currentToken}`;
    }
  }

  // By this point the entire expression was parsed, just need to apply any remaining operations
  while (operations.length > 0) {
    const valueB = values.pop() as number;
    const valueA = values.pop() as number;
    if (valueB && valueA) {
      values.push(applyOperation(operations.pop(), valueB, valueA));
    }
  }

  // the top of the values stack is the final result
  const result = values.pop() as number;
  // console.log(`Calculated value: ${result}`);
  return result;
}

function isNumeric(tokenValue: string) {
  return (tokenValue >= '0' && tokenValue <= '9') || tokenValue === '.';
}

// Returns true if 'operation2' has higher or same precedence as 'operation1',
// otherwise returns false.
function isHigherPriority(operation1: string, operation2: string): boolean {
  if (operation2 == '(' || operation2 == ')') {
    return false;
  }

  if (
    (operation1 == '*' || operation1 == '/') &&
    (operation2 == '+' || operation2 == '-')
  ) {
    return false;
  } else {
    return true;
  }
}

// Apply an operation for the two given inputs
function applyOperation(
  operation: string | undefined,
  inputB: number,
  inputA: number
): number {
  switch (operation) {
    case '+':
      return inputA + inputB;
    case '-':
      return inputA - inputB;
    case '*':
      return inputA * inputB;
    case '/':
      if (inputB == 0) {
        throw 'Cannot divide by zero';
      }
      return inputA / inputB;
  }
  return 0;
}
