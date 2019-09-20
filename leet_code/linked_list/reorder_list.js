var reorderList = function (head) {
    if (head === null) return null
    let mid = findMid(head)
    let new_list = reverse(mid.next)
    mid.next = null
    return merge(head, new_list)
};

var findMid = function (node) {
    let fast = node
    let slow = node
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}
// reverse only after mid

var reverse = function (node) {
    let prev = null;
    while (head != null) {
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}
//  merge
var merge = function (head, list) {
    if (!list) return head
    while (list) {
        let tmp = list.next
        list.next = head.next
        head.next = list
        list = tmp
        // 由于一次插入两个节点
        head = head.next.next
    }
    return head
}




////////


var reorderList = function (head) {
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
        ++i;
        current.next.next = arr[i];
    }

    arr[i].next = null;
    return head;

};