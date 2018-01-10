function devideOrMultiplyNumers(arr) {
    let N = Number(arr[0]);
    let X = Number(arr[1]);

    if (X >= N){
        return N * X;
    }
    else { ////if (N > X)
        return N / X;
    }
}

console.log(devideOrMultiplyNumers([2, 4]));