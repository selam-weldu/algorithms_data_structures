class MaxHeap {
    constructor(){
        this.array = [null]
    }

    getParent(idx){
        return Math.floor(idx / 2)
    }

    getLeftChild(idx){
        return idx * 2
    }

    getRightChild(idx){
        return (idx * 2) + 1
    }

    siftUp(idx){
        let current = idx;
        let parent = this.getParent(idx)
        while (this.array[current] > this.array[parent] && parent !== 0){
            [this.array[parent], this.array[current]] = [this.array[current], this.array[parent]]
            
            current = parent
            parent = this.getParent(current)
        }
    }

    insert(val){
        this.array.push(val)
        let pos = this.array.length - 1
        if(this.array[pos] > this.getParent(pos)){
            this.siftUp(pos)
        }
    }

    siftDown(idx){
        let current = idx;
        let left = this.getLeftChild(current);
        let right = this.getRightChild(current);
        let largerChild = (this.array[left] || (-Infinity)) > (this.array[right] || (-Infinity)) ? left : right;
        while (this.array[current] < this.array[largerChild]) { // if you compare against undefined, it will return false
            [this.array[largerChild], this.array[current]] = [this.array[current], this.array[largerChild]]

            current = largerChild;
            left = this.getLeftChild(current);
            right = this.getRightChild(current);
            largerChild = (this.array[left] || (-Infinity)) > (this.array[right] || (-Infinity)) ? left : right;
        }
    }

    deleteMax(){
        if(this.array.length === 1) return null
        if(this.array.length === 2) {
            return this.array.pop()
        }
        let max = this.array[1]
        let min = this.array.pop()
        
        this.array[1] = min

        this.siftDown(1)

        return max
    }
}

module.exports = {
    MaxHeap
};