// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // time complexity: O(1) since getting value of head pointer is constant operation
    // space complexity: O(1) since we are only dealing with constant variables
    addToHead(val) {

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        // update length
        this.length++;
    }

    // time complexity: O(1) since getting value of tail pointer is constant operation
    // space complexity: O(1) since we are only dealing with constant variables
    addToTail(val) {
        // Add node of val to tail of linked list
        let newNode = new DoublyLinkedNode(val);

        this.length++;
        // if linked list is empty
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        // get current tail
        let currTail = this.tail;

        // currTail next points to new Node, new node prev points to current tail and tail updates to point to new node
        currTail.next = newNode;
        newNode.prev  =currTail;
        this.tail = newNode;
    }

    // time complexity: O(1) since getting value of head pointer is constant operation
    // space complexity: O(1) since we are only dealing with constant variables
    removeFromHead() {
        // base case 1: if it is empty, return
        if (!this.head) {
            return;
        }

        // save element to be removed
        const currentHead = this.head;

        // base case 2: we only have one item
        if (!this.head.next) {
            this.head = null;
            this.tail = null;
        } else {
            // update the list
            this.head = this.head.next;
            this.head.prev = null;
        }

        // update length since we are removing from here on
        this.length -= 1;

        // return the item that we just removed
        return currentHead.value;
    }

    // time complexity: O(1) since getting value of tail pointer is constant operation
    // space complexity: O(1) since we are only dealing with constant variables
    removeFromTail() {
        // base case 1: Remove node at tail
        if (!this.tail) {
            return;
        }

        // update the length
        const currTail = this.tail;

        // base case 2: we only have one item
        if (!this.head.next) {
            this.head = null;
            this.tail = null;
        } else {
            // we have more than 1 nodes in linked list
            let secondToLast = currTail.prev;

            secondToLast.next = null;
            this.tail = secondToLast;
        }

        // update length
        this.length--;

        // return value
        return currTail.value;
    }

    // time complexity: O(1) since getting value of head pointer is constant operation
    // space complexity: O(1) since we are only dealing with 1 constant variable
    peekAtHead() {
        // Return value of head node
        if (!this.head) {
            return;
        }

        // return value at head node
        return this.head.value;
    }

    // time complexity: O(1) since getting value of tail pointer is constant operation
    // space complexity: O(1) since we are only dealing with 1 constant variable
    peekAtTail() {
        // Return value of tail node
        if (!this.tail) {
            return;
        }

        // return value at tail node
        return this.tail.value;
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
