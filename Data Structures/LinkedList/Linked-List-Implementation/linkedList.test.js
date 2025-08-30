const LinkedList = require("./linkedList");

describe("LinkedList", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test("adds nodes", () => {
    list.add(10);
    list.add(20);
    expect(list.includes(10)).toBe(true);
    expect(list.includes(20)).toBe(true);
  });

  test("removes a node", () => {
    list.add(10);
    list.add(20);
    list.remove(10);
    expect(list.includes(10)).toBe(false);
    expect(list.includes(20)).toBe(true);
  });

  test("inserts at index", () => {
    list.add(10);
    list.add(30);
    list.insertAt(20, 1);
    expect(list.includes(20)).toBe(true);
  });
});


const list = new LinkedList();
list.append(30);
list.append(20);
list.append(10);


console.log("Before Reverse:");
list.printList();   // Output: 30 → 20 → 10 

