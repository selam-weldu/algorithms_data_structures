// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let newNode = new Node(val);

        if(!this.tail){
            this.head = newNode
            this.tail = newNode
        } else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length += 1;
        return this
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if(!this.tail){
            return undefined
        } else if (this.tail === this.head) {
            let temp = this.head
            this.tail = null;
            this.head = null;
            this.length -= 1
            return temp;
        } else {
            let node = this.head;
            while(node.next.next !== null){
                node = node.next
            }

            let temp = this.tail;
            this.tail = node;
            this.tail.next = null
            this.length -= 1
            return temp;
        }
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newNode = new Node(val)

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            newNode.next = this.head
            this.head = newNode
        }
        this.length += 1
        return this
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if(!this.head) {
            return undefined
        }else if(this.head === this.tail){
            let temp = this.head
            this.head = null
            this.tail = null
            this.length -= 1
            return temp
        } else{
            let removed = this.head;
            this.head = this.head.next
            this.length -= 1
            return removed
        }
        
    }

    // TODO: Implement the contains method here
    contains(target) {
 
        let node = this.head
        while(node){
            if(node.value === target){
                return true
            }
            node = node.next
        }

        return false
    }

    // TODO: Implement the get method here
    get(index) {
        if(index < 0 || index >= this.length){
            return null
        }

        let counter = 0
        let node = this.head
        while(counter < index){
            node = node.next
            counter += 1
        }
        return node;
    }

    // TODO: Implement the set method here
    set(index, val) {
        let node = this.get(index)
        if(node){
            node.value = val
            return true
        }
        return false
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index < 0 || index >= this.length) {
            return false
        } else if (index === 0) {
            let newNode = new Node(val);
            newNode.next = this.head
            this.head = newNode
            this.length += 1;
            return true
        } else{
            let node = this.get(index - 1)

            let newNode = new Node(val)
            newNode.next = node.next
            node.next = newNode
            this.length += 1;
            return true
        }

       
    

    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined
        } else {
            let removed = this.get(index)
            let prevNode = this.get(index - 1)
            prevNode.next = removed.next
            this.length -= 1
            return removed
        }
        
    }

    // TODO: Implement the size method here
    size() {
        return this.length
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
