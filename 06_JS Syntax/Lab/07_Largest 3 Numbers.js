function largestThreeNums(arr) {
    arr.sort( (a, b) => b - a );
    let count = Math.min(arr.length, 3);

    for (let i = 0; i < count; i++){
        console.log(arr[i]);
    }
}

let inputArray = [10, 30, 15, 20, 50, 5];
largestThreeNums(inputArray);