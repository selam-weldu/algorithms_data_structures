// Design a Phone Directory which supports the following operations:

// get: Provide a number which is not assigned to anyone.
// check: Check if a number is available or not.
// release: Recycle or release a number.

class PhoneDirectory {
    constructor(maxNumbers) {
        this.map = {};
        this.add(maxNumbers);
    }

    add(maxNums) {
        for (var i = 0; i < maxNums; i++) {
            this.map[i] = "available"
        }
    }

    get() {
        for (let key in this.map) {
            if (this.map[key] === "available") {
                this.map[key] = "unavailable";
                return key;
            }
        }
        return -1
    }

    check(num) {
        if (this.map[num] === "available") {
            return true;
        } else {
            return false;
        }
    }

    release(num) {
        this.map[num] = "available"
    }
}

/**
 * Your PhoneDirectory object will be instantiated and called as such:
 * var obj = new PhoneDirectory(maxNumbers)
 * var param_1 = obj.get()
 * var param_2 = obj.check(number)
 * obj.release(number)
 */