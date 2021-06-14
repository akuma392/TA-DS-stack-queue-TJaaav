class Stack {
  constructor(capacity = Infinity) {
    this.storage = [];
    this.capacity = capacity;
  }

  get length() {
    return this.storage.length;
  }
  add(value) {
    if (this.storage.length < this.capacity) {
      this.storage.push(value);
      return this.storage;
    } else {
      alert('stack is over flowing');
    }
  }
  remove() {
    return this.storage.pop();
  }
  peak() {
    return this.storage[this.storage.length - 1];
  }
  printAll() {
    let rev = [...this.storage.reverse()];
    rev.forEach((elm, i) => console.log(elm));
  }
  isEmpty() {
    return this.storage.length > 0 ? false : true;
  }
}

const stack2 = new Stack(4);

stack2.add(10);
stack2.add(12);
stack2.add(120);
stack2.add(1);

class Queue {
  constructor(capacity = Infinity) {
    this.storage = [];
    this.capacity = capacity;
  }

  get length() {
    return this.storage.length;
  }
  add(value) {
    if (this.storage.length < this.capacity) {
      this.storage.unshift(value);
      return this.storage;
    } else {
      alert('queue is over flowing');
    }
  }
  remove() {
    return this.storage.pop();
  }
  peak() {
    return this.storage[this.storage.length - 1];
  }
  printAll() {
    let rev = this.storage.reverse();
    rev.forEach((elm, i) => console.log(elm));
  }
  isEmpty() {
    return this.storage.length > 0 ? false : true;
  }
}

const queue = new Queue();

queue.add(10);
queue.add(12);
queue.add(120);
queue.add(1);
queue.add(4);
