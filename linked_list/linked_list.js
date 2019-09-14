
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            this.tail = newNode
        }

        ++this.length;
        return this;
    }

    pop(){
        if(!this.head) return undefined;

        let removedNode = this.head;
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        }else{
            let newTail = removedNode;
            while(removedNode.next){
                newTail = removedNode;
                removedNode = removedNode.next;
            }
            newTail.next = null;
            this.tail = newTail;
        }
        --this.length;
        return removedNode;
    }

    shift(){
        if(!this.head) return undefined;

        let removedNode = this.head;
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        } else{
            this.head = removedNode.next;
        }
        --this.length;
        return removedNode;
    }

    unshift(val){
        let newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            newNode.next = this.head;
            this.head = newNode;
        }

        ++this.length;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return undefined;
        if(!this.head) return undefined;
        let current = this.head;
        let counter = 0;

        while(counter != index){
            current = current.next;
            ++counter;
        }

        return current;
    }

    set(index,value){
        let oldNode = get(index);

        if(oldNode){
            oldNode.value = value;
            return true;
        }
        return false;
    }

    insert(index,value){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(value);
        if(index === this.length) return !!this.push(value);

        let newNode = new Node(value);
        let prevNode = this.get(index - 1);
        newNode.next = prevNode.next;
        prevNode.next = newNode;

        ++this.length;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        let prevNode = this.get(index - 1);
        let removedNode = prevNode.next;
        prevNode.next = removedNode.next;

        --this.length;
        return removedNode;
    }

    reverse(){
        let current = this.head;
        this.head = this.tail;
        this.tail = current;

        let newNext = null;
        let newPrev;

        for (let i = 0; i < this.length; i++) {
            newPrev = current.next;
            current.next = newNext;

            newNext = current;
            current = newPrev;
        }

        return this;
    }
}
