const StackWithDeleteMiddle = require("./stack");

describe("StackWithDeleteMiddle", () => {
  test("should handle empty stack", () => {
    const stack = new StackWithDeleteMiddle();
    expect(stack.deleteMiddle()).toBeNull();
    expect(stack.size()).toBe(0);
  });

  test("should handle stack with one element", () => {
    const stack = new StackWithDeleteMiddle();
    stack.push(10);
    expect(stack.deleteMiddle()).toBe(10);
    expect(stack.size()).toBe(0);
  });

  test("should delete middle element when odd size", () => {
    const stack = new StackWithDeleteMiddle();
    [10, 20, 30, 40, 50].forEach(x => stack.push(x));
    expect(stack.deleteMiddle()).toBe(30);
    expect(stack.items).toEqual([10, 20, 40, 50]);
  });

  test("should delete lower middle element when even size", () => {
    const stack = new StackWithDeleteMiddle();
    [10, 20, 30, 40].forEach(x => stack.push(x));
    expect(stack.deleteMiddle()).toBe(20);
    expect(stack.items).toEqual([10, 30, 40]);
  });

  test("should keep correct order after deletion", () => {
    const stack = new StackWithDeleteMiddle();
    [1, 2, 3, 4, 5, 6].forEach(x => stack.push(x));
    stack.deleteMiddle(); 
    expect(stack.items).toEqual([1, 2, 4, 5, 6]);
  });
});
