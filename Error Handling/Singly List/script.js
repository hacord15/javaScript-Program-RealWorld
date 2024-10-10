// Define a class representing a node in a singly linked list
class Node {
    constructor(data) {
        // Initialize the node with provided data
        this.data = data
        // Initialize the next pointer to null
        this.next = null                
    }
}

// Define a class representing a singly linked list
class SinglyLinkedList {
    constructor(Head = null) {
        // Initialize the head of the list
        this.Head = Head
    }

    // Method to add a new node to the end of the list
    add(newNode){
        // Start traversal from the head node
        let node = this.Head;
        // If the list is empty, set the new node as the head and return
        if(node == null){
            this.Head = newNode;
            return;
        }
        // Traverse the list until the last node
        while (node.next) {
            node = node.next;
        }
        // Set the next pointer of the last node to the new node
        node.next = newNode;
    } 

    // Method to get the node at the specified index in the list
    get_node(index){
        // Start traversal from the head node
        let node = this.Head;
        // If the specified index is 0, return the head node
        if(index == 0) {
            return this.Head;
        }
        // Traverse the list until the specified index
        while(index--){
            // If the next node exists, move to the next node
            if(node.next !== null)
                node = node.next;
            // If the next node does not exist and the index is not reached, throw an error
            else
                throw Error("Index Out of Bound");
        }
        // Return the node at the specified index
        return node;
    }  

    // Method to display the elements of the list
    displayList(){
        // Start traversal from the head node
        let node = this.Head;
        // Initialize an empty string to store the elements of the list
        var str = ""
        // Traverse the list and concatenate each element to the string
        while (node) {
            str += node.data + "->";
            node = node.next;
        }
        // Append "NULL" to indicate the end of the list
        str += "NULL"
        // Print the string containing the list elements
        console.log(str);  
    }
}

// Create an instance of the SinglyLinkedList class
let numList = new SinglyLinkedList();
// Add nodes with data values to the list
numList.add(new Node(12));
numList.add(new Node(13));
numList.add(new Node(14));
numList.add(new Node(15));
// Display the elements of the list
console.log("Original Linked list:");
numList.displayList();
// Get the details of the node at index 0
console.log("Node details at index 0:");
console.log(numList.get_node(0));
// Get the details of the node at index 2
console.log("Node details at index 2:");
console.log(numList.get_node(2));
S