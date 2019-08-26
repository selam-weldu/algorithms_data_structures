// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Queue {
    constructor(){
        this.front = null;
        this.back = null;
        this.length = 0;
    }

    enqueue(value){
        let newNode = new Node(value)
        if(!this.front){
            this.front = newNode;
            this.back = newNode;
        } else{
            this.back.next = newNode;
            this.back = newNode
        }

        return ++this.length
    }

    dequeue(){
        if(!this.front){
            return null
        } else if(this.length === 1){
            let removed = this.front
            this.front = null;
            this.back = null;
            --this.length;
            return removed.value
        } else{
            let removed = this.front;
            this.front = this.front.next;
            --this.length;
            return removed.value
        }
    }

    size(){
        return this.length
    }
}

exports.Node = Node;
exports.Queue = Queue;