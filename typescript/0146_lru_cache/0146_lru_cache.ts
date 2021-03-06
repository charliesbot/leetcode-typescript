/**
 * @param {number} capacity
 */

class LRUCache {
  capacity: number;
  count: number;
  head: ListNode;
  tail: ListNode;
  hash: { [key: string]: any };

  constructor(capacity: number) {
    this.capacity = capacity;
    this.count = 0;
    this.head = new ListNode({ key: -1, value: -1 });
    this.tail = new ListNode({ key: -1, value: -1 });
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.hash = {};
  }

  get(key: number): number {
    if (this.hash[key]) {
      const currentNode = this.hash[key];
      const tempPrev = currentNode.prev;
      const tempNext = currentNode.next;
      const tempPrevTail = this.tail.prev;
      //const tempPrevNext = this.tail.next;
      tempPrev.next = tempNext;
      tempNext.prev = tempPrev;
      //this.tail.prev.next = currentNode;
      currentNode.prev = tempPrevTail;
      currentNode.next = this.tail;
      this.tail.prev = currentNode;
      return this.hash[key].value;
    }

    return -1;
  }

  // put(key: number, value: number) {
  // let node = new ListNode({ key, value });
  // if (this.hash[key]) {
  // node = this.tail.prev;
  // node.val = value;
  // } else if (this.count === this.capacity) {
  // const temp = this.head.next.next;
  // delete this.hash[this.head.next.key];
  // this.head.next = temp;
  // temp.prev = this.head;
  // } else {
  // this.count++;
  // }
  // const temp = this.tail.prev;
  // temp.next = node;
  // node.prev = temp;
  // node.next = this.tail;
  // this.tail.prev = node;
  // this.hash[key] = node;
  // this.print();
  // }
}

// LRUCache.prototype.moveToHead = function () {};

// LRUCache.prototype.print = function (message = "") {
// let currentNode = this.head;
// console.log("---- init ---");
// while (currentNode !== null) {
// console.log(`${message}: [${currentNode.key}, ${currentNode.val}]`);
// currentNode = currentNode.next;
// }
// console.log("---- end ---");
// };
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// const cache = new LRUCache(2);
// cache.put(2, 1);
// cache.put(2, 2);
// cache.get(2);
// cache.put(4, 1);
// cache.put(1, 1);
// cache.get(2);
// ["LRUCache","put","put","get","put","put","get"]
// [[2],[2,1],[2,2],[2],[1,1],[4,1],[2]]
