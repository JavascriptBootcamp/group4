function Queue(){
    var arr =[];
    this.add = (element) => {
        arr[arr.length] = element;
        console.log(arr);
    };
    this.remove = () => {
        for(var i= 1 ; i < arr.length; i++){
            arr[i - 1] = arr[i];
            //delete arr[i];
        }
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
