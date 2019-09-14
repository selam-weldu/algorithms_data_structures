
var reverseBetween = function (head, m, n) {
    var index = 1;
    var prevIndex = m - 1;
    var beforeNode, lastIntervalNode;
    var current = head;
    var prevIntervalNode = null;
    var next;

    while (current) {
        if (prevIndex === index) {
            beforeNode = current;
        }

        if (index >= m && index <= n) {
            next = current.next;
            if (index === m) {
                lastIntervalNode = current;
            }

            current.next = prevIntervalNode;
            prevIntervalNode = current;
            current = next;

            if (index === n) {
                break;
            }
        } else {
            current = current.next;
        }

        index++;
    }

    if (beforeNode) {
        beforeNode.next = prevIntervalNode;
    }
    lastIntervalNode.next = next;

    return m === 1 ? prevIntervalNode : head;
};

// ///////////////////////////////////
// doesn't work yet
var reverseBetween = function(head, m, n) {

    let start, beforeStart, prev, prev2;
    let permHead = head;
    let current = head;

    for(let i = 0; i <= n; i++){
        if(i < m - 1){
            current = current.next;
        }
        if(i === m - 1){
            beforeStart = current;
            current = current.next;
        }

        if(i === m){
            start = current
        }

        prev = current.next;
        prev2 = prev.next

        prev.next = current;
        current = prev
    }

    beforeStart.next = current;
    start.next = current.next;

    return permHead;
};





