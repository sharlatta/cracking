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
 
 //How would you solve thi sproblem if a temporary buffer is not allowed - TODO
