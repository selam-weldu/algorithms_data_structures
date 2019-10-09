class MinBinaryHeap {
    constructor() {
        this.values = [];
        this.length = 0;
    }

    peek() {
        return this.values[0];
    }

    insert(val) {
        this.values.push(val);
        this.bubbleUp();
        ++this.length;
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element >= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    remove() {
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        --this.length;
        return min;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild < element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild < element) ||
                    (swap !== null && rightChild < leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}










/////////////////////////////////

class MaxBinaryHeap {
    constructor() {
        this.values = [];
        this.length = 0;
    }

    peek() {
        return this.values[0];
    }

    insert(val) {
        this.values.push(val);
        this.bubbleUp();
        ++this.length;
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    remove() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        --this.length;
        return max;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}










/////////////////////

class MedianFinder {
    constructor() {
        this.lower = new MaxBinaryHeap();
        this.greater = new MinBinaryHeap();
        this.median = null;
    }

    addNum(num) {
        if (!this.lower.length || num < this.lower.peek()) {
            this.lower.insert(num);
        } else {
            this.greater.insert(num);
        }

        this.balanceHeaps();
        this.updateMedian();
    }

    balanceHeaps() {
        if (this.lower.length - this.greater.length == 2) {
            this.greater.insert(this.lower.remove());
        } else if (this.greater.length - this.lower.length == 2) {
            this.lower.insert(this.greater.remove());
        }
    }

    updateMedian() {
        if (this.lower.length === this.greater.length) {
            this.median = (this.lower.peek() + this.greater.peek()) / 2;
        } else if (this.lower.length > this.greater.length) {
            this.median = this.lower.peek();
        } else {
            this.median = this.greater.peek();
        }
    }

    findMedian() {
        return this.median;
    }
}
