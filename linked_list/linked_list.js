
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

    // O(1)
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

    // O(n), n is this.length - 1
    pop(){
        if(!this.head) return undefined;

        let removed = this.head;
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        }else{
            let newTail = this.head;
            while(removed.next){
                newTail = removed;
                removed = removed.next;
            }
            newTail.next = null;
            this.tail = newTail;
        }

        --this.length;
        return removed;
    }

    // O(1)
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

    // O(1)
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

    get(idx){
        if(idx < 0 || idx >= this.length) return undefined;
        if(!this.head) return undefined;
        if(idx === 0) return this.head;
        if(idx === this.length - 1) return this.tail;

        let current = this.head;
        let counter = 0;

        while(counter != idx){
            current = current.next;
            ++counter;
        }

        return current;
    }

    set(idx,value){
        // don't need to check for edge cases, because get() checks
        let oldNode = this.get(idx);

        if(oldNode){
            oldNode.value = value;
            return true;
        }
        return false;
    }

    insert(idx,value){
        if(idx < 0 || idx > this.length) return false;
        if(idx === 0) return !!this.unshift(value);
        if(idx === this.length) return !!this.push(value);

        let newNode = new Node(value);
        let prevNode = this.get(idx - 1);
        let newNext = prevNode.next;
        
        prevNode.next = newNode;
        newNode.next = newNext;

        ++this.length;
        return true;
    }

    remove(idx){
        if(idx < 0 || idx >= this.length) return undefined;
        if(idx === 0) return this.shift();
        if(idx === this.length - 1) return this.pop();

        let prevNode = this.get(index - 1);
        let removedNode = prevNode.next;
        prevNode.next = removedNode.next;

        --this.length;
        return removedNode;
    }

    reverse(){
        // switch head and tail
        // set current to head, because we can only go in one direction
        // init next and prev, prev is the oldNext and next is the oldPrev
        // since we are starting from tail, it needs to point to null, so set next to null
        // loop through the length of list
        // in each iteration, assign prev first so we don't loose that reference
        // connect node to new next
        // reassign current and next

        let current = this.head;
        this.head = this.tail;
        this.tail = current;

        let newNext = null,
            prev;

        while(current){
            prev = current.next;
            current.next = newNext;

            newNext = current;
            current = prev;
        }   

        return this;
    }
}
