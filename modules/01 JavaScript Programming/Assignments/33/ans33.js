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
}



function isCircular(ll){
    var helpNode = ll.head
    while(helpNode){
        helpNode = ll.head.next.next
        if(ll.head === helpNode){
            return true;
        }
        ll.head = ll.head.next;
    }
    return false;

}

const ll1 = new LinkedList();
const a = new Node('red');
const b = new Node('yellow');
const c = new Node('green');
ll1.head = a;
a.next = b;
b.next = c;
c.next = b;

const ll2 = new LinkedList();
const aa = new Node('red');
const bb = new Node('yellow');
const cc = new Node('green');
ll2.head = aa;
aa.next = bb;
bb.next = cc;
cc.next = null;

console.log(isCircular(ll1)); //true
console.log(isCircular(ll2)); //false
