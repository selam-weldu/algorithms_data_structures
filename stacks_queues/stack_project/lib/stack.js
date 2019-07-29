// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
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
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);

        if(!this.top){
            this.top = newNode;
            this.bottom = newNode;
        } else if(this.length >= 1){
            newNode.next = this.top
            this.top = newNode
        }

        return ++this.length
    }

    pop(){
        if(this.length === 0){
            return null
        } else if(this.length === 1){
            let poppedNode = this.top.value
            this.top = null;
            this.bottom = null;
            this.length--
            return poppedNode;
        } else{
            let poppedNode = this.top.value
            this.top = this.top.next
            this.length--
            return poppedNode;
        }
    }

    size(){
        return this.length
    }
}

exports.Node = Node;
exports.Stack = Stack;
