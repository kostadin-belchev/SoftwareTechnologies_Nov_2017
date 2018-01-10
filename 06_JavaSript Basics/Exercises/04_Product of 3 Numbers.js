function positiveOrNegativeProductOfThreeNums(arr) {
    let X = Number(arr[0]);
    let Y = Number(arr[1]);
    let Z = Number(arr[2]);
    let counterNegatives = 0;

    if (X == 0 || Y == 0 || Z == 0){
        return "Positive";
    }
    else {
        for (let i = 0; i < arr.length; i++){
            if (isNegativeNum(Number(arr[i]))){
                counterNegatives++;
            }
        }
    }

    if (counterNegatives % 2 == 1){
        return "Negative";
    }
    else {
        return "Positive";
    }

    function isNegativeNum(num) {
        if (num < 0){
            return true;
        }
        else {
            return false;
        }
    }
}

console.log(positiveOrNegativeProductOfThreeNums([-5, -4, -3]));