import Node from './Node.js';

export default class LinkedList {
    constructor() {
        this.head = null; // Head node of the list
    }

    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode; // If list is empty, new node becomes head
        } else {
            let current = this.head;
            while (current.nextNode !== null) {
                current = current.nextNode; // Traverse to the end
            }
            current.nextNode = newNode; // Append the new node
        }
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.nextNode = this.head; // Link the new node to the old head
        this.head = newNode; // Update the head to the new node
    }

    display() {
        let current = this.head;
        const values = [];
        while (current !== null) {
            values.push(current.value); // Collect node values
            current = current.nextNode; // Move to the next node
        }
        console.log(values.join(' -> ')); // Print the linked list
    }
}