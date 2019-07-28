// ============================================================================
// Interview Problem: Constant Time Stack Max
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Modify the definition of the Stack class provided to create an enhanced 
// version of a Stack data structure called MinMaxStack.
//
// A MinMaxStack has all of the same behavior as a Stack, but can also return
// the node with the minimum or maximum value in constant time.
//
// You may alter any of the original Stack's methods, including the 
// constructor.
//  
// Values of nodes of the MinMaxStack are always guaranteed to be numbers.
//
//
// ------------
// Constraints:
// ------------
//
// (1) All MinMaxStack methods must run in constant time, O(1).
//
//
// --------
// Example:
// --------
//
// const minMaxStack = new MinMaxStack();
//
// minMaxStack.push(10);
// minMaxStack.push(12);
// minMaxStack.push(8);
// minMaxStack.push(2);
// minMaxStack.push(20);
//
// console.log(minMaxStack.min().value);   => 2
// console.log(minMaxStack.max().value);   => 20
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 2
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 8
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 10
// console.log(minMaxStack.max().value);   => 12
//
// minMaxStack.pop();
// console.log(minMaxStack.min().value);   => 10
// console.log(minMaxStack.max().value);   => 10
//
// minMaxStack.pop();
// console.log(minMaxStack.min());   => null
// console.log(minMaxStack.max());   => null
//
//
// -----------
// Let's code!
// -----------
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prevMax = null;
        this.prevMin = null;
    }
}

// Refactor the regular Stack below into a MinMaxStack!
class MinMaxStack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
        this.maxNode = null;
        this.minNode = null;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.top) {
            this.maxNode = newNode;
            this.minNode = newNode;
            this.top = newNode;
            this.bottom = newNode;
        } else {
            if(newNode.value > this.maxNode.value){
                newNode.prevMax = this.maxNode
                this.maxNode = newNode
            } else if(newNode.value < this.minNode.value){
                newNode.prevMin = this.minNode
                this.minNode = newNode
            }
            const temp = this.top;
            this.top = newNode;
            this.top.next = temp;
        }
        return ++this.length;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        const temp = this.top;
        if (this.top === this.bottom){
            this.bottom = null;
            this.maxNode = null;
            this.minNode = null;
        } else if (temp.value === this.maxNode.value){
            this.maxNode = temp.prevMax;
        } else if(temp.value === this.minNode.value){
            this.minNode = temp.prevMin;
        }
        this.top = this.top.next;
        this.length--;
        return temp;
    }

    min(){
        if(!this.length) return null;
        return this.minNode;
    }
        
    max(){
        if(!this.length) return null;
        return this.maxNode;
    }

    size() {
        return this.length;
    }
}

// Forgetting something down here? 
exports.Node = Node;
exports.MinMaxStack = MinMaxStack;
