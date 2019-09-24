// Queues are FIFO
// used for Printing/task processing, background tasks

// insertion and removal O(1)

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    enqueue(value){
        let newNode = new Node(value);

        if(!this.front){
            this.front = newNode;
            this.back = newNode;
        }else{
            this.back.next = newNode;
            this.back = newNode
        }

        return ++this.size;
    }

    dequeue(){
        if(!this.front) return null;

        let removed = this.front;
        if(this.front === this.back){
            this.front = null;
            this.back = null;
        }else{
            this.front = removed.next;
            removed.next = null
        }

        --this.size;
        return removed.value;
    }
}


let queue = new Queue();

queue.enqueue(5);
queue.enqueue(4);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.size);