//while using an array to implement a stack works fine, it is a heavy handed
// we only need insertion and removal at constant time, so it's better to 
// use a linked-list(either singly or doubly linked)

// Stacks are LIFO DS
// used for call stack, undo/redo
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

// Instead of adding and removing from the end,we add and remove from the beginning because
// insertion and removal are O(1) for a stack, and in a linked-list removing from the end is O(n)
class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value){
        let newNode = new Node(value);

        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            newNode.next = this.first;
            this.first = newNode;
        }

        return ++this.size;
    }

    // for a stack removal has to be 0(1)
    pop(){
        if(!this.first) return null;

        let removed = this.first;
        if(this.first === this.last){
            this.first = null;
            this.last = null;
        }else{
            this.first = removed.next;
            removed.next = null;
        }
        --this.size;
        return removed.value;
    }

}



let stack = new Stack();

stack.push(5);
stack.push(4);
stack.push(4);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack.size);
