function setValuesToIndexes (arr) {
    let n = Number(arr[0]);
    let newArr = new Array(n);

    for (let i = 0; i < newArr.length; i++){
        newArr[i] = 0;
    }

    arr.shift();

    for (let i = 0; i < arr.length; i++){
        let splitArray = arr[i].split(' - ');
        newArr[splitArray[0]] = splitArray[1];
    }

    for (let i = 0; i < newArr.length; i++){
        console.log(newArr[i]);
    }
}

setValuesToIndexes(['2', '0 - 5', '0 - 6', '0 - 7']);