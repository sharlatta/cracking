//2.4 write a code to partition linked list around value x,  such that all nodes less then x
//come before all  nodes greate then or equal to x
function partitionLessMore(list, elem) {
    var current =  list.head;
    var greater = new LinkedList(),
        less = new LinkedList();
     while(current) {
        if (current.data <=elem) {
            greater.add(current.data)
        }
        else {
            less.add(current.data)
        }
        current = current.next
    }
    return joinLists(less, greater);
}

function joinLists(list1, list2) {
    var current =  list1.head;
    while(current.next!==null) {
        current = current.next;
    }
    current.next =  list2.head;
    return list1;
}
