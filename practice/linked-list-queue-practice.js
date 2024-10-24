// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        this.length++;

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    // Returns the length of the list
    listLength() {
        // O(n) operation
        /*************
         * let len = 0, current = this.head
         * while (current) {
         *      len++;
         *      current = current.next
         * }
         *
         * return len;
         */

        // O(1) operation -- track length from onset so that it gets updated when
        // items are added or removed from list
        return this.length;
    }

    /**  Returns the sum of the values of all the nodes
     * time complexity is O(n) since we must traverse the entire list nodes to calculate the sum
     * space complexity is O(1) as we are dealing with constant variables
    */
    sumOfNodes() {
        let sum = 0, current = this.head;

        while (current) {
            sum += current.value;
            current = current.next;
        }

        return sum;
    }

    /**
     * Returns the average value of all the nodes
     * time complexity: O(n) since finding sum is O(n) and division to get average is O(1)
     * space complexity: O(1) since we are only assigning constant variables
     */
    averageValue() {

        let sum = this.sumOfNodes();

        // average = sum / number of nodes
        return sum / this.length;
    }

    /**
     * Returns the node at the nth index from the head
     * time complexity is O(n) since we must traverse the entire list nodes if necessary to find node
     * space complexity: O(1)
     */
    findNthNode(n) {
        if (!this.head) {
            return;
        }
        // console.log("head value: ", this.head.value)
        let index = 0, current = this.head;

        while (current) {
            // check if we have found the index that equal to n
            if (n === index) {
                return current;
            }

            // update index and current
            index++;
            current = current.next;
        }

        // we haven't found a node
        return null;
    }

    /**
     * Returns the middle node
     * time: O(n) --> O(n/2) where n is the number of nodes
     * space: O(1)
     */
    findMid() {

        // find the index at midpoint
        let midPoint = Math.floor(this.length/2);

        // offset by 1 if list has even length
        if (this.length % 2 === 0) {
            midPoint -= 1;
        }

        // index to keep track of current index, current to keep track of the
        // node we are current processing
        let index = 0, current = this.head;

        while (current) {

            // check if we found node before the midpoint
            if (midPoint === index) {
                return current;
            }

            // update index and current
            index++;
            current = current.next;
        }

        // if list is empty, we return null
        return null;
    }

    /**
     * Returns a new reversed version of the linked list
     */
    reverse() {
        // create empty linked list
        let newList = new SinglyLinkedList();

        // traverse current  list
        let current = this.head;

        while (current) {
            let newNode = new SinglyLinkedNode(current.value);
            // link new node to newList

            newNode.next = newList.head;
            // update head of newList to point to new node that we are addin g
            newList.head = newNode;
            // update current to the next node
            current = current.next;
        }

        // return the new linked list
        return newList;
    }

    /**
     * Reverses the linked list in-place
     */
    reverseInPlace() {
        // check if it is empty
        if (!this.head) {
            return;
        }

        // reverse
        let current = this.head, prev = null, next = null;

        while (current) {

            // get the next before being updated
            next = current.next;

            // update current next to point backwards to prev
            current.next = prev;

            // update prev to current
            prev = current;

            // update current to current nex
            current = next;
        }

        // update the head
        this.head = prev;
    }
}

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

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        this.length++;

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here
        let midPoint = Math.floor(this.length / 2);

        // handle offset case for even length lists
        if (this.length % 2 === 0) {
            midPoint -= 1;
        }

        let current = this.head;

        while (current) {
            if (midPoint === 0) {
                return current;
            }

            // update midpoint and current
            midPoint--;
            current = current.next;
        }

        return null;
    }

    reverse() {
        // Returns a new reversed version of the linked list
        let newDoublyList = new DoublyLinkedList();

        let current = this.head;

        while (current) {
            // create new list
            let newNode = new DoublyLinkedNode(current.value);

            // link new node to the list using next pointer
            newNode.next = newDoublyList.head;

            // link the current head's next to new node if list is not empty
            if (newDoublyList.head) {
                newDoublyList.head.prev = newNode;
            }
            // update head of list
            newDoublyList.head = newNode;

            // update current node
            current = current.next;
        }

        return newDoublyList;
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Write your hypothesis on the time complexity of this method here
        let current = this.head, previous = null;

        while (current) {
            let next = current.next;

            current.next = previous;
            current.prev = next;
            previous = current;

            //
            current = next;
        }

        this.head = previous;
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
