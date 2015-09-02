 //2.1. Write code to  remove duplicates from unsorted linked list
 function removeDuplicates(list) {
     var prev =  list.head;
     var current = prev.next;
     var map = [prev.data];
     while (current) {
         if (map.contains(current.data)) {
             prev.next = current.next;
             current = current.next;
             list.length--;
         }
         else {
             map.push(current.data);
             prev = current;
             current =  current.next;
         }
     }
     return list;
 }
 
 //function call
 var list = new LinkedList();
list.add("head");
list.add("node1");
list.add("node2");
list.add("node3");
list.add("node2");
list.add("node4");
list.add("node5");
list.add("node5");
list.add("head");
list.add("node4");
list.add("node2");
console.log(list);
console.log(list.toArray());
console.log(removeDuplicates(list));
 
 //How would you solve thi sproblem if a temporary buffer is not allowed - TODO
