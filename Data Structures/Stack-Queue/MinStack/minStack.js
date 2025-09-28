class MinStack {
    constructor() {
        this.dataStack = [];
        this.minStack = [];
    }

    // O(1) Time: Add an element to the stack.
    push(value) {
        this.dataStack.push(value);

        // Update minStack
        if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
            // New minimum found or stack is empty, push the new value
            this.minStack.push(value);
        } else {
            // Maintain the minimum count by pushing the current minimum again
            this.minStack.push(this.minStack[this.minStack.length - 1]);
        }
    }

    // O(1) Time: Remove and return the top element.
    pop() {
        if (this.isEmpty()) {
            console.log("Error: Stack is empty.");
            return undefined;
        }
        // Popping from both stacks is crucial for O(1) getMin()
        this.minStack.pop(); 
        return this.dataStack.pop();
    }

    // O(1) Time: Return the top element without removing it.
    top() {
        if (this.isEmpty()) {
            console.log("Error: Stack is empty.");
            return undefined;
        }
        return this.dataStack[this.dataStack.length - 1];
    }

    // O(1) Time: Check if the stack is empty.
    isEmpty() {
        return this.dataStack.length === 0;
    }

    // O(1) Time: Return the minimum element in the stack.
    getMin() {
        if (this.isEmpty()) {
            console.log("Error: Stack is empty.");
            return undefined;
        }
        // The minimum is always the top of the minStack
        return this.minStack[this.minStack.length - 1];
    }

    // O(N) Time: Print the contents of the stack (from bottom to top).
    printStack() {
        console.log("Data Stack (bottom -> top):", this.dataStack);
    }
}


module.exports = MinStack;
