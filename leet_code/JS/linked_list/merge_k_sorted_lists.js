var mergeKLists = function (lists) {
    if (!lists.length) return null;
    if (lists.length === 1) return lists[0];

    let merged = lists[0];
    // start i from 1
    for (let i = 1; i < lists.length; i++) {
        // merge merged with lists[i] and update merged
        merged = mergeTwoLists(merged, lists[i]);
    }

    return merged;
};

var mergeTwoLists = function (l1, l2) {

    if (!l1 || !l2) return l1 || l2;

    let merged = new ListNode();
    let head = merged;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            merged.next = l1;
            l1 = l1.next;
        } else {
            merged.next = l2;
            l2 = l2.next;
        }
        merged = merged.next;
    }

    if (l1) merged.next = l1;
    if (l2) merged.next = l2;

    return head.next;

};