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

    // Method to find the index of the first occurrence of a value in the list
    indexOf(data){
        // Initialize the index variable to -1
        let ind = -1;
        // Start traversal from the head node
        let node = this.Head;
        // Traverse the list
        while(node){
            // Increment the index
            ++ind;
            // If the data of the current node matches the target data, return the index
            if(node.data === data) return ind;
            // Move to the next node
            node = node.next;
        }
        // If the target data is not found, return -1
        return -1;
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
numList.add(new Node(14));
// Display the elements of the list
console.log("Original Linked list:");
numList.displayList();
// Find the index of the first occurrence of value 14 in the list
console.log("Find the first index that matches the value 14:");
console.log(numList.indexOf(14));
// Find the index of the first occurrence of value 5 in the list
console.log("Find the first index that matches the value 5:");
console.log(numList.indexOf(5));
