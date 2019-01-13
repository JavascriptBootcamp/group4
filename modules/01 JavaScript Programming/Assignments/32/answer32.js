function Queue() {
    this.Q = [];
    this.add = function(value) {
        this.Q.push(value);
    };
    this.remove = function () {
        return this.Q.shift();
    };
}
function Stack(){
    this.data = [];
    this.push = function(record) {
        this.data.push(record);
    }
    this.pop = function() {
        return this.data.pop();
    }
}

function isPalindrom (str) {
    var Q = new Queue();
    var S = new Stack();
    if (str.length<2) return true; 
    for (var i=0 ; i < str.length / 2 ; i++) {
        S.push(str[str.length/2+i]);
        Q.add(str[i])
        console.log(str[str.length/2+i],str[i])
    }

    for (var i=0 ; i < str.length / 2 ; i++) {
        if (Q.remove() !== S.pop()) {
            return false;
        }
        return true;
    }

}
