function Node(data, next) {
    this.data = data;
    this.next = next
}

function LinkedList(){
    this.head = null;

    this.getFirst = function(){
        return this.head;
    }

    this.getLast =function(){
        var node;
        if (!this.head) {
            return null;
        }
        node = this.head;
        while (node.next){
            node = node.next;
        }
        return node;
    }

    this.insertFirst = function(data) {
        this.head = new Node(data, this.head);
    }

    this.insertLast = function(data){
        var last = this.getLast();
        if (last) {
            last.next = new Node(data, null);
        }
        else {
            this.head = new Node(data, null);
        }
    }

    this.printAll = function() {
        var head = this.head;
        if (!head) {
            return null;
        }
        while (head) {
            console.log(head.data);
            head = head.next;
        }
    }

    this.circular = function(){
        var isCilrcular = false;
        var headPtr = this.head;
        while(isCilrcular && headPtr && headPtr.next && headPtr.next.next){
            if(headPtr.next === headPtr.next.next){
                isCilrcular =true; 
            }
            else{
                headPtr = headPtr.next;
            }
        }
        return isCilrcular;
    }
}

// var ll = new LinkedList();
// ll.insertFirst('x');
// ll.insertLast('c');
// ll.insertLast('c');
// ll.insertLast('z');
// ll.insertLast('y');
// ll.printAll();

function midpoint(list){
    var slow = list.getFirst();
    var fast = list.getFirst();

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

//console.log("midpoint is", midpoint(ll));