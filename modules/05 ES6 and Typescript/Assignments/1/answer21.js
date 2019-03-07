const max = (...arr) =>  {

    let maxValue;
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            maxValue = arr[0];
        } else {
            if (arr[i] > maxValue) {
                maxValue = arr[i];
            }
        }
    }
    return maxValue;
}
const myArr=[-12, -34, 0, -56, -1]
console.log(max(...myArr));
