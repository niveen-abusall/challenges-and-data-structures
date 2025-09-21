const Queue = require("../queue");

describe("Queue", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test("should start empty", () => {
    expect(queue.isEmpty()).toBe(true);
    expect(queue.peek()).toBe("Queue is Empty");
  });

  test("should enqueue elements in FIFO order", () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    expect(queue.isEmpty()).toBe(false);
    expect(queue.peek()).toBe(10); // first element stays in front
  });

  test("should dequeue elements in FIFO order", () => {
    queue.enqueue("a");
    queue.enqueue("b");
    queue.enqueue("c");

    expect(queue.dequeue()).toBe("a");
    expect(queue.dequeue()).toBe("b");
    expect(queue.dequeue()).toBe("c");
    expect(queue.dequeue()).toBe("cannot dequeue because the queue is empty");
  });

  test("should peek at the front element without removing it", () => {
    queue.enqueue(100);
    queue.enqueue(200);

    expect(queue.peek()).toBe(100); // still front
    queue.dequeue();
    expect(queue.peek()).toBe(200); // next in line
  });

  test("should handle dequeue until empty", () => {
    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.isEmpty()).toBe(true);
    expect(queue.peek()).toBe("Queue is Empty");
  });
});
