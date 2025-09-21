const Node = require(".");

class Queue {
  constructor() {
    this.front = null; // points to the first element
    this.rear = null;  // points to the last element
  }

  enqueue(value) {
    // step 1: create a new node
    const newNode = new Node(value);

    // step 2: if the queue is empty, both front and rear are the new node
    if (!this.rear) {
      this.front = this.rear = newNode;
      return;
    }

    // step 3: link the new node after rear and update rear
    this.rear.next = newNode;
    this.rear = newNode;
  }

  dequeue() {
    // step 1: check if the queue is empty
    if (!this.front) return "cannot dequeue because the queue is empty";

    // step 2: store the value at the front
    const removed = this.front.value;

    // step 3: move front to the next node
    this.front = this.front.next;

    // step 4: if the queue became empty, rear must also be null
    if (!this.front) {
      this.rear = null;
    }

    // step 5: return the removed value
    return removed;
  }

  peek() {
    if (this.front) {
      return this.front.value;
    } else {
      return "Queue is Empty";
    }
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = Queue;
