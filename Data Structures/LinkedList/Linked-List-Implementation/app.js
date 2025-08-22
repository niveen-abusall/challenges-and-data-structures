const LinkedList = require("./linkedList");

const list = new LinkedList();

list.add(10);
list.add(20);
list.add(30);

list.printList(); // 10 -> 20 -> 30 -> null

list.remove(20);
list.printList(); // 10 -> 30 -> null

console.log(list.includes(30)); // true
console.log(list.includes(40)); // false

list.insertAt(25, 1);
list.printList(); // 10 -> 25 -> 30 -> null