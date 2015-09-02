//2.3.Implement an algorithm to delete a node in the middle of a single linked list,
//given only access to that node 
//EXAMPLE Input: the node ‘c’ from the linked list a->b->c->d->e 
//Result: nothing is returned, but the new linked list looks like a->b->d->e)


function deleteNode (list, value) {
    if (list.head.data===value) {
        list.head = list.head.next;
        list.length--;
        return deleteNode(list,value)
    }
    var prev = list.head,
        next = list.head.next
    while (next) {
        if (next.data===value) {
            prev.next =  next.next;
            list.length--;
        }
        prev = next;
        next = next.next;
    }
    return list;
}
//TODO with only access to thi s node
