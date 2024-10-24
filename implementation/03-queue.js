const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // time complexity: O(1) since we can access tail pointer without any iterations
    // space complexity: O(1) since we are only adding on 1 item
    enqueue(val) {
        // create a node
        const newNode = new SinglyLinkedNode(val);

        // increment the length since we are updating the queue
        this.length++;

        // if head is empty, assign node and tail to new node
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // we have one or more nodes, so we access where tail is currently pointing to
            let currTail = this.tail;

            // update the currTail to point to new node, tail to point to new node
            currTail.next = newNode;
            this.tail = newNode;
        }

        // return size of queue
        return this.length;
    }

    // time complexity: O(1) since we have access to head pointer at constant time
    // space complecity: O(1) since we do not need additional space
    dequeue() {
        // base case 1: check if queue is empty, throw an error
        if (!this.head) {
            return null;
        }

        // get the head of the queue
        let currHead = this.head;

        // base case 2: check if there is only 1 item in the list, then update both head and tail
        if (!this.head.next) {
            this.head = null;
            this.tail = null;
        } else {
            // otherwise, we have more than one node
            this.head = this.head.next;
        }

        // update queue length
        this.length--;

        // return the value being removed
        return currHead.value;
    }
}

module.exports = {
    Queue,
    SinglyLinkedNode
}
