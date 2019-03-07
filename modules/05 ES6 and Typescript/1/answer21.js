
const max = (arr, ...args) => {
    let max = arr[0];
    console.log(`initial max ${max}`);
    arr.forEach((item, index) => {
        if (args[index]) {
            console.log(args[index]);
        }
        if (index === 0) {
            return;
        }
        else {
            if (item > max) {
                max = item;
            }
        }
    });
    return max;
}
let arr1 = [12, 34, 56, 1];
let arr2 = [-12, -34, 0, -56, -1];
let [a, b, c, d] = arr1;
let [e, f, g, h] = arr2;
console.log(max([a, b, c, d]), "gaby", "test", "args");
console.log(max([e, f, g, h]));

