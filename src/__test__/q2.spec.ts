import {evaluateExpression} from '../q2'

describe("evaluateExpression", () => {
  it("should evaluate a simple expression with addition and multiplication", () => {
    const expression = "3 + 5 * 2";
    const result = evaluateExpression(expression);
    expect(result).toEqual(13);
  });

  it("should evaluate a simple expression with parenthesis, addition, subtraction, and multiplication and division", () => {
    const expression = "( 1 + 2 ) * 3 - 4 / 2";
    const result = evaluateExpression(expression);
    expect(result).toEqual(7);
  });

  it("should evaluate an expression with parentheses and division", () => {
    const expression = "( 6 - 2 ) * 8 / 4";
    const result = evaluateExpression(expression);
    expect(result).toEqual(8);
  });

  it("should evaluate an expression with nested parentheses and mixed operations", () => {
    const expression = "1 + 2 * ( 3 - 4 ) + 5 / 2";
    const result = evaluateExpression(expression);
    expect(result).toEqual(1.5);
  });

  it("should evaluate an expression with multiple operations and precedence", () => {
    const expression = "10 + ( 3 - 2 ) * 8 / 4";
    const result = evaluateExpression(expression);
    expect(result).toEqual(12);
  });

  it("should handle expressions with spaces between numbers and operators", () => {
    const expression = "2   +  3 * 4";
    const result = evaluateExpression(expression);
    expect(result).toEqual(14);
  });

  it("should handle expressions with decimal numbers and correct decimal precision", () => {
    const expression = "1.5 * 2.5 + 0.5";
    const result = evaluateExpression(expression);
    expect(result).toEqual(4.25);
  });

  it("should handle expressions with negative numbers", () => {
    const expression = " (5 * 2) - 3";
    const result = evaluateExpression(expression);
    expect(result).toEqual(7);
  });

  it("should handle expressions with invalid characters and throw an error", () => {
    const expression = "3 + a * 2";
    expect(() => evaluateExpression(expression)).toThrow();
  });
});
