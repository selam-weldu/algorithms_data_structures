var reorderList = function (head) {
    // add nodes into an arrary
    // loop through array upto mid point
    // connect arr[i] to arr[len-1-i]
    // set the final node next to null
    // return head
    
    if (!head || !head.next) return head;

    let arr = [],
        current = head;

    while (current) {
        arr.push(current);
        current = current.next;
    }

    let i = 0;
    while (i < Math.floor(arr.length / 2)) {
        current = arr[i];
        current.next = arr[arr.length - 1 - i];
        current.next.next = arr[++i];
    }

    arr[i].next = null;
    return head;

};

////////////////////////

var reorderList = function (head) {
    if (!head || !head.next || !head.next.next) return null;

    let midNode = findMid(head);
    // reverse list after the middle node
    let reversed = reverse(midNode.next);
    // important because divides list into two different ones, and
    // accuratly sets middleNode as the new tail of the reodered list
    midNode.next = null;
    return merge(head, reversed);
};

const findMid = function (node) {
    let slow = node,
        fast = node;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

const reverse = function (node) {
    let prev,
        next = null,
        current = node;

    while (current) {
        prev = current.next;

        current.next = next;

        next = current;
        current = prev;
    }

    return next;
}

const merge = function (l1, l2) {
    if (!l2) return l1;

    let current = l1,
        current2 = l2,
        prev, prev2;

    while (current2) {
        prev = current.next;
        prev2 = current2.next;

        current.next = current2;
        current2.next = prev;

        current = prev;
        current2 = prev2;
    }

    return l1;
}
