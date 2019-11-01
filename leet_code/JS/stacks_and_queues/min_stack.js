class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
        this.stackSize = 0;
        this.minStackSize = 0;
    }

    push(val) {

        if (this.minStackSize === 0) {
            this.minStack.push(val);
            ++this.minStackSize;
        } else if (val <= this.minStack[this.minStackSize - 1]) {
            this.minStack.push(val);
            ++this.minStackSize;
        }
        this.stack.push(val);
        ++this.stackSize;
    }

    pop() {
        let removed = this.stack.pop();

        if (removed === this.minStack[this.minStackSize - 1]) {
            this.minStack.pop();
            --this.minStackSize;
        }
        --this.stackSize;
    }

    top() {
        return this.stack[this.stackSize - 1];
    }

    getMin() {
        return this.minStack[this.minStackSize - 1];
    }
}

