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
    if(!head || !head.next) return head;

    let mid = findMid(head)
    let reversedList = reverse(mid.next)
    mid.next = null
    return merge(head, reversedList)
};

var findMid = function (node) {
    let slow = node;
    let fast = node;
    while (fast.next && fast.next.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow;
}
// reverse only after mid

var reverse = function (node) {
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

var merge = function (list1, list2) {
    if (!list2) return list1
    while (list2) {
        let tmp = list2.next
        list2.next = list1.next
        list1.next = list2
        list2 = tmp
        list1 = list1.next.next
    }
    return list1
}


