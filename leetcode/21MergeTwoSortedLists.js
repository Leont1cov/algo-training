function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
}

let mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0)
    let curr = dummy

    while (list1 && list2) {
        if (list1.val < list2.val) {
            curr.next = list1
            list1 = list1.next
        } else {
            curr.next = list2
            list2 = list2.next
        }
        curr = curr.next
    }

    curr.next = list1 || list2

    return dummy.next
};