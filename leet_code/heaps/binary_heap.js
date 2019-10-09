class MinBinaryHeap {
    constructor() {
        this.values = [];
    }

    // O(log n)
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        let element = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];

            if (element <= parent) break;

            this.values[parentIdx] = element;
            this.values[idx] = parent;

            idx = parentIdx;
        }
    }

    // O(log n)
    extractMin() {
        let min = this.values[0],
            lastElement = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = lastElement;
            this.sinkDown();
        }
        return min;
    }

    sinkDown() {
        let idx = 0;
        let length = this.values.length;
        let element = this.values[0];

        while (idx < length) {
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
                    (!swap && rightChild < element) ||
                    (swap && rightChild < leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (!swap) break;
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
    }

    // O(log n)
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        let element = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];

            if (element >= parent) break;

            this.values[parentIdx] = element;
            this.values[idx] = parent;

            idx = parentIdx;
        }
    }

    // O(log n)
    extractMax() {
        let min = this.values[0],
            lastElement = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = lastElement;
            this.sinkDown();
        }
        return min;
    }

    sinkDown() {
        let idx = 0;
        let length = this.values.length;
        let element = this.values[0];

        while (idx < length) {
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
                    (!swap && rightChild > element) ||
                    (swap && rightChild > leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (!swap) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}


// let heap = new MaxBinaryHeap();
// heap.insert(41);
// heap.insert(39);
// heap.insert(33);
// heap.insert(18);
// heap.insert(27);
// heap.insert(12);
// heap.insert(55);



