// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    // TODO: Implement the Node class!
    constructor(val){
        this.value = val;
        this.next = null;
    }

}

class Stack {
    // TODO: Implement the Stack class!
    constructor(){
        this.top = null
        this.bottom = null
        this.length = 0;
    }

    push(newNode){
        // const newNode = new Node(val);
        if(!this.length){
            // this.top.next = newNode.next;
            this.top = newNode;
            this.bottom = newNode;
        }else{
            let temp = this.top;
            this.top = newNode;
            this.top.next = temp
        }
        return ++this.length
    }

    pop(){
        if (!this.length) return null

        const removedNode = this.top;
        if(this.top === this.bottom){
            this.bottom = null;
            this.top = null;
        } else{
            this.top = this.top.next
        }
        this.length--;
        return removedNode;
    }

    size(){
        return this.length
    }
}

class StackQueue {
    // TODO: Implement the StackQueue class!
    constructor(){
        this.inStack = new Stack();
        this.outStack = new Stack();
        this.front = null;
        this.back = null;
    }

    enqueue(val){
        const newNode = new Node(val);

        if(!this.size()){
            this.outStack.push(newNode);
            this.front = this.outStack.top;
            this.back = this.outStack.top;
        } else{
            this.inStack.push(newNode);
            this.outStack.top.next = this.inStack.bottom;
            this.back = this.inStack.top;
        }
        return this.size()
    }

    dequeue(){

        if(!this.size()) return null

        // let nextTop = this.inStack.bottom;
        let removedNode = this.outStack.pop();
        // this.outStack.top = nextTop;

        // debugger;
        if(this.front === this.back){
            this.front = null;
            this.back = null;
        } else{
            this.front = this.front.next;
            // this.outStack.push(this.front);
            // this.inStack.push(this.back);
        }

        if(this.outStack.size() === 0){
            while(this.inStack.size() > 0){
                this.outStack.push(this.inStack.pop())
            }
        }


        return removedNode;
    }

    size(){
        return this.inStack.size() + this.outStack.size();
    }

};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
