function sum(arr) {
    let sum = 0;
    for (let element of arr) {
        if(element % 2 == 0) {
            sum += element;
        }
    }
    return sum;
}

console.log(sum([1, 2, 3, 4, 5, 6]));