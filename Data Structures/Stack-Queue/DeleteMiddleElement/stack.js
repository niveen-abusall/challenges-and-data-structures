class StackWithDeleteMiddle {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  deleteMiddle() {
    const n = this.size();
    if (n === 0) return null; 

    const middleIndex = Math.floor((n - 1) / 2); 
 

    const deleted = this.items.splice(middleIndex, 1)[0]; 
    return deleted;
  }
}

module.exports = StackWithDeleteMiddle;

