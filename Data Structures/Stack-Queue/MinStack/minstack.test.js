const MinStack = require("./minStack"); 

describe("MinStack", () => {
    let stack;

    beforeEach(() => {
        stack = new MinStack();
    });

    test("push() should add elements and update min correctly", () => {
        stack.push(5);
        expect(stack.top()).toBe(5);
        expect(stack.getMin()).toBe(5);

        stack.push(3);
        expect(stack.top()).toBe(3);
        expect(stack.getMin()).toBe(3);

        stack.push(7);
        expect(stack.top()).toBe(7);
        expect(stack.getMin()).toBe(3);
    });

    test("pop() should remove elements and update min correctly", () => {
        stack.push(5);
        stack.push(3);
        stack.push(7);

        expect(stack.pop()).toBe(7);
        expect(stack.getMin()).toBe(3);

        expect(stack.pop()).toBe(3);
        expect(stack.getMin()).toBe(5);

        expect(stack.pop()).toBe(5);
        expect(stack.isEmpty()).toBe(true);
    });

    test("top() should return the top element", () => {
        stack.push(10);
        stack.push(20);
        expect(stack.top()).toBe(20);

        stack.pop();
        expect(stack.top()).toBe(10);
    });

    test("getMin() should always return the minimum element", () => {
        stack.push(8);
        stack.push(6);
        stack.push(7);
        expect(stack.getMin()).toBe(6);

        stack.pop();
        expect(stack.getMin()).toBe(6);

        stack.pop();
        expect(stack.getMin()).toBe(8);
    });

    test("isEmpty() should return true when stack is empty", () => {
        expect(stack.isEmpty()).toBe(true);
        stack.push(1);
        expect(stack.isEmpty()).toBe(false);
    });

    test("pop(), top(), getMin() should return undefined if stack is empty", () => {
        expect(stack.pop()).toBeUndefined();
        expect(stack.top()).toBeUndefined();
        expect(stack.getMin()).toBeUndefined();
    });
});
