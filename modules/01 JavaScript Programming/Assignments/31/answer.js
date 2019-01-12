function Queue(){
    var arr =[];
    this.add = (element) => {
        for(var i= arr.length - 1; i >= 0; i--){
            arr[i+1] = arr[i];
        }
        arr[0] = element;
        console.log(arr);
    };
    this.remove = () => {
        arr.length = arr.length === 0 ? 0:arr.length - 1;
        console.log(arr);
    };
}

var q = new Queue();

q.add(23);
q.add(123);
q.add(1234);
q.remove();
q.remove();
q.remove();
