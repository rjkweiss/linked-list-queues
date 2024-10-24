// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // update the length right away
        this.length += 1;

        let newNode = new SinglyLinkedNode(val);
        // if head is empty, make head point to new node and return
        if (!this.head) {
            this.head = newNode;
            return this;
        }

        // otherwise, get current head and set new node's next to point it
        // make head point to new node
        // let currHead = this.head;
        newNode.next = this.head;
        this.head = newNode;

        return this;
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        this.length += 1;


        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;

        return this;
    }

    removeFromHead() {
        // Remove node at head
        if (!this.head) {
            return;
        }

        // Write your hypothesis on the time complexity of this method here
        const current = this.head;
        this.head = this.head.next;

        // update the length of linked list
        this.length -= 1;

        // return the removed item
        return current;
    }

    removeFromTail() {

        // if head is empty, return undefined
        if (!this.head) {
            return;
        }

        // otherwise, we have at least one node to remove

        // update length
        this.length -= 1;

        // check if we have 1 item
        if (!this.head.next) {
            let currentHead = this.head;
            this.head = null;
            return currentHead;
        }

        // we have more than 1 items
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }

        // save tail node so, we can return it
        const tailNode = current.next;

        // update the tail node by removing current tail node
        current.next = null;

        // return the tail node that was removed
        return tailNode;
    }

    peekAtHead() {
        // Return value of head node
        if (!this.head) {
            return;
        }

        // Write your hypothesis on the time complexity of this method here
        return this.head.value;
    }

    print() {
        // Print out the linked list
        if (!this.head) {
            return;
        }

        // Write your hypothesis on the time complexity of this method here
        let current = this.head;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
