// use arrays for implementing the stacks, linked list would probabaly
// better but arrays are easier to use in this case

// can only use pop and push because those are the only methods for stacks

// init a front and back stack
// when pushing, push val into back stack
// when popping, empty back stack into front and then pop from front
// then empty front stack back into back stack
// update size accordingly
// to peek, return back[0]

class MyQueue {
    constructor() {
        this.front = [];
        this.back = [];
        this.size = 0;
    }

    push(val) {
        this.back.push(val);
        return ++this.size;
    }

    pop() {
        if (!this.back.length && !this.front.length) return undefined;

        while (this.back.length) {
            this.front.push(this.back.pop());
        }

        let removed = this.front.pop();

        while(this.front.length){
            this.back.push(this.front.pop());
        }

        --this.size;
        return removed;
    }

    peek() {
        if (!this.back.length && !this.front.length) return undefined;

        return this.back[0];
    }

    empty() {
        return !this.size ? true : false;
    }
}