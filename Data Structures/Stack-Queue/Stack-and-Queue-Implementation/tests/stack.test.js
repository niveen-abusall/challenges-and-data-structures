const Stack = require("../stack");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test("should start empty", () => {
    expect(stack.isEmpty()).toBe(true);
    expect(stack.peek()).toBe("Stack is Empty");
  });

  test("should push elements onto the stack", () => {
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.peek()).toBe(1);

    stack.push(2);
    expect(stack.peek()).toBe(2); // last pushed is on top
  });

  test("should pop elements from the stack", () => {
    stack.push(1);
    stack.push(2);

    expect(stack.pop()).toBe(2); // LIFO
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe("cannot pop because the stack is empty");
  });

  test("peek should return the top without removing it", () => {
    stack.push(1);
    expect(stack.peek()).toBe(1);
    expect(stack.peek()).toBe(1); // still 1

    stack.push(2);
    expect(stack.peek()).toBe(2);
  });

  test("isEmpty should correctly detect empty stack", () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });
});
