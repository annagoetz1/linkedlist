import LinkedList from './LinkedList.js';

const list = new LinkedList();

// Adding example data
list.append(10);
list.append(20);
list.prepend(5);

// Displaying the linked list
list.display(); // Output: 5 -> 10 -> 20