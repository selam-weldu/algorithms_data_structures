// with two queues
// push into input queue
// for popping, empty input queue into output queue leaving the last element
// shift out that element, then put everything back


class MyStack{
    constructor(){
        this.input = [];
        this.output = [];
        this.size = 0;
    }

    push(val){
        this.input.push(val);
        return ++this.size;
    }

    pop(){
        while(this.input.length !== 1){
            this.output.push(this.input.shift());
        }

        let removed = this.input.pop();

        while(this.output.length){
            this.input.push(this.output.shift());
        }

        --this.size;
        return removed;
    }

    top(){
        return this.input[this.size - 1];
    }

    empty(){
        return !this.size ? true : false;
    }
}



// with one queue
// for popping, shift from and push into queue until the last element is in 
// front, then shift that one
// dassittt

class MyStack {
    constructor() {
        this.inputOutput = [];
        this.size = 0;
    }

    push(val) {
        this.inputOutput.push(val);
        return ++this.size;
    }

    pop() {
        let counter = this.size;

        while (counter != 1) {
            this.inputOutput.push(this.inputOutput.shift());
            --counter
        }

        let removed = this.inputOutput.shift();

        --this.size;
        return removed;
    }

    top() {
        return this.inputOutput[this.size - 1];
    }

    empty() {
        return !this.size ? true : false;
    }
}

