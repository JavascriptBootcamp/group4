{/* <p>check if a given linked is circular* or not.</p>
<p>* circular - when a node points to the one before it.</p>
<h3>Examples</h3>
<code>
<pre>
  const l = new List();<br>
  const a = new Node('red');<br>
  const b = new Node('yellow');<br>
  const c = new Node('green');<br>
  l.head = a;<br>
  a.next = b;<br>
  b.next = c;<br>
  c.next = b;<br>
  console.log(circular(l));
</pre>
</code>
<h3>Output</h3>
<code>true</code> */}

function circular(list)
{
    var first = list.getFirst();

    while (first) {
        if(first === first.next.next)
        {
            return true;
        }
        first = first.next;
    }
    return false;
}

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

var ll = new LinkedList();
ll.insertFirst('x');
ll.insertLast('b');
ll.insertLast('c');
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
