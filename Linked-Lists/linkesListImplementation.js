//linkedlist class
function LinkedList() {
    this.head = null;
    this.length = 0;
}

LinkedList.prototype = {
    add: function (data) {
        var node = {
            data: data,
            next: null
        }
        if (this.head === null) {
            this.head = node;
        }
        else {
            var currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this.length++;
    },
    getNodeData: function (itemIndex) {
        if (itemIndex > -1 && itemIndex < this.length) {
            var i = 0;
            var currentNode = this.head;
            while (i < itemIndex) {
                currentNode = currentNode.next;
                i++;
            }
            return currentNode.data;
        }
        else {
            return null;
        }
    },
    removeNode: function (itemIndex) {
        if (itemIndex > -1 && itemIndex < this.length) {
            if (itemIndex === 0) {
                this.head = this.head.next;
            }
            else {
                var i = 1;
                var prev = this.head;
                var current = this.head.next;
                while (i !== itemIndex) {
                    i++;
                    prev = current;
                    current = current.next;
                }
                prev.next = current.next;
            }
            this.length--;
        }
    },
    toArray: function () {
        var arr = [],
            current = this.head;
        while (current) {
            arr.push(current.data)
            current = current.next;
        }
        return arr;
    }
}
