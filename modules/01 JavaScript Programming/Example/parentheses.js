function Stack(){
    this.data = [];
    this.push = function(record) {
        this.data.push(record);
    }
    this.pop = function() {
        return this.data.pop();
    }
    this.isEmpty =function(){
        return this.data.length === 0;
    }
}

function isValid(str){
    var s = new Stack();

    if (!str){
        console.log("No string as parameter");
        return false;
    }

    for (var i=0; i<str.length;i++){
        if (str[i] === "("){
            s.push(str[i]);
        }
        else if (str[i] === ")") {
            if (s.isEmpty()) {
                return false;
            }
            s.pop();
        }
    }

    return s.isEmpty();
}

console.log(isValid("((()))"));
console.log(isValid("(()))"));
console.log(isValid("((a((b))c))"));