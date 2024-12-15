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

    size() {
        let count = 0;           // Initialize counter
        let current = this.head; // Start at the head of the list
    
        while (current !== null) { // Traverse the list
            count++;              // Increment counter for each node
            current = current.nextNode; // Move to the next node
        }
    
        return count; // Return the total count
    }
    head() {
        if (this.head === null) { // Check if the list is empty
            return null;          // Return null or an appropriate message
        }
        return this.head.value;   // Return the value of the head node
    }
    tail () {
       
        let current = this.head;
        if (current === null) {
            return null;
        }
        while (current.nextNode !== null) {
           current = current.nextNode;
       
                }
                     
            return current.value;
            }
            

    index (value){
        let current=this.head;
        let index=0;
        while(current !== null){
            if(current.value === value){
                return index;
            }
            current = current.nextNode;
            index++;
        }
        return -1;
    }
    
    pop() {
        if (this.head === null) {
            console.log("List is empty, nothing to pop.");
            return null;
        }
    
        // Case 1: List has only one node
        if (this.head.nextNode === null) {
            const value = this.head.value; // Save value to return
            this.head = null; // Set head to null, list becomes empty
            return value;
        }
    
        // Case 2: Traverse to find the second-to-last node
        let current = this.head;
        while (current.nextNode.nextNode !== null) { // Stop at second-to-last node
            current = current.nextNode;
        }
    
        // Save the value of the tail node to return
        const value = current.nextNode.value;
        current.nextNode = null; // Remove the last node by setting nextNode to null
        return value;
    }
    
    contains (value) {
        let current = this.head;
        if (this.head === null){
            return null;
    
        } while(current.value !== value) {
            current = current.nextNode;
        }
    }
number (value) {
    let current = this.head;
    let index = 0;
    if (current.value === null){
        return null;    
    } while (current.value !== value){
        current = nextNode;
        index ++;
        if (current.value === value) {
            return index;
        }
    }
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