

function Node(data, next) {
    this.data = data;  // Item at current index
    this.next = next   // Reference to item at next index 
}


function LinkedList(){
    this.head = null;

    this.getFirst = function() {
        return this.head;
    }
}


function isCircular(someList) {
    var currentNode = someList.getFirst(); // Here currentNode is a first Node (head points on it)

    if(currentNode) {
        var nextNode = currentNode.next;

        while(currentNode && nextNode) {
            if (nextNode.next === currentNode) return true;

            currentNode = currentNode.next;
            nextNode = nextNode.next;
            
        }
    }

    return false;
}


const l = new LinkedList();
const a = new Node('red');      // a = Node { data: 'red', next: undefined}
l.head = a;                     // head of l points on a (first Node)
const b = new Node('yellow');   // b = Node { data: 'yellow', next: undefined }
a.next = b;                     // a = Node { data: 'red', next: Node { data: 'yellow', next: undefined } }   
const c = new Node('green');    // c = Node { data: 'green', next: undefined }
b.next = c;                     // b = Node { data: 'yellow', next: Node { data: 'green', next: undefined } }
c.next = b;                     // c = Node { data: 'green', next: Node { data: 'yellow', next: [Circular] } }

console.log(isCircular(l));