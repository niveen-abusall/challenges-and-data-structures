class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

reverse(); {
  let prev = null;
  let current = this.head;
  let next = null;

  while (current !== null) {
    next = current.next;   // Save next node
    current.next = prev;   // Reverse the link
    prev = current;        // Move prev forward
    current = next;        // Move current forward
  }

  this.head = prev; // New head = last node
}

