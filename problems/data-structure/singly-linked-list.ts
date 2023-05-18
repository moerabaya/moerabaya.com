class ListNode {
  next: ListNode | null;
  val: number | string;
  constructor(val: number | string) {
    this.val = val;
    this.next = null;
  }
}

interface SinglyLinkedListParams {
  head: ListNode | null;
  tail: ListNode | null;
  length: number;
  push: (val: string) => SinglyLinkedList;
}

class SinglyLinkedList implements SinglyLinkedListParams {
  head: ListNode | null;
  tail: ListNode | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val: string) {
    const node = new ListNode(val);
    if (!this.head) this.head = node;
    if (this.tail) this.tail.next = node;
    this.tail = node;
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return null;
    let temp = this.head;
    let prev = temp;
    while (temp?.next) {
      prev = temp;
      temp = temp.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  shift() {
    if (!this.head || !this.head.next) return null;
    let temp = this.head;
    this.head = this.head?.next;
    return this;
  }

  unshift(val: string) {
    let node = new ListNode(val);
    if (!this.head) {
      this.tail = node;
    } else {
      node.next = this.head;
    }
    this.head = node;
    this.length++;
    return this;
  }

  get(index: number) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let node = this.head;
    while (node?.next && counter !== index) {
      node = node.next;
      counter++;
    }
    return node;
  }

  // TODO Implement set, insert, remove, and reverse
  set(index: number, val: string) {
    if (index < 0 || index > this.length) return null;
    let newItem = new ListNode(val);
    let old = this.get(index);
    newItem.next = old;
    old = newItem;

    return newItem;
  }
}
