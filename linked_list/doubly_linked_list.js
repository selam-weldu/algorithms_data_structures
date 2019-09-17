// insertion and removal O(1)
// Searching and access O(N), searching is O(N/2) but that's O(N)
// better than singlyLinkedLists in some aspects but more flexibilty
// comes with the cost of more memory

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
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
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        ++this.length;
        return this;
    }

    pop(){
        if(!this.head) return undefined;

        let poppedNode = this.tail;
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        } else{
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }


        --this.length;
        return poppedNode;
    }

    shift(){
        if(!this.head) return undefined;

        let removedNode = this.head;

        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        }else{
            this.head = removedNode.next;
            this.head.prev = null;
            removedNode.next = null;
        }

        --this.length;
        return removedNode;
    }

    unshift(val){
        let newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        ++this.length;
        return this;
    }

    get(idx){
        if(idx < 0 || idx >= this.length) return undefined;
        if(!this.head) return undefined;
        if(idx === 0) return this.head;
        if(idx === this.length - 1) return this.tail;

        let count, current;

        if(idx <= this.length / 2){
            count = 0;
            current = this.head;
            while(count != idx){
                current = current.next;
                ++count;
            }
        }else{
            count = this.length - 1;
            current = this.tail;
            while(count != idx){
                current = current.prev;
                --count;
            }
        }
        return current;
    }

    set(idx,data){
        let foundNode = this.get(idx);

        if(foundNode){
            foundNode.val = data;
            return true;
        }
        return false;
    }

    // O(1)
    insert(idx,data){
        if(idx < 0 || idx > this.length) return false;
        if(idx === 0) return !!this.unshift(data);
        if(idx === this.length) return !!this.push(data);

        let prevNode = this.get(idx - 1);
        let nextNode = prevNode.next;
        let newNode = new Node(data);

        prevNode.next = newNode, newNode.prev = prevNode;
        newNode.next = nextNode, nextNode.prev = newNode;

        return true;
    }

    // O(1)
    remove(idx){
        if (idx < 0 || idx >= this.length) return false;
        if(!this.head) return false;
        if (idx === 0) return !!this.shift();
        if (idx === this.length - 1) return !!this.pop();

        let removedNode = this.get(idx);
        let prevNode = removedNode.prev;
        let nextNode = removedNode.next;

        prevNode.next = nextNode, nextNode.prev = prevNode;
        removedNode.next = null, removedNode.prev = null;

        return true;

    }
}