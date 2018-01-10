function addAndRemoveElements (arr) {
    let newArr = new Array();

    for (let i = 0; i < arr.length; i++) {
        let inputParameters = arr[i].split(' ');
        let command = inputParameters[0];

        if (command == 'add') {
            let numberToAdd = Number(inputParameters[1]);
            newArr.push(numberToAdd);
        } else if (command == 'remove') {
            let indexOfElemToBeRemoved = Number(inputParameters[1]);
            if (indexOfElemToBeRemoved > -1) {
                newArr.splice(indexOfElemToBeRemoved, 1);
            }
        }
    }

    for (let obj of newArr) {
        console.log(obj);
    }
}

let inputArray = ['add 2', 'add 5', 'remove 1', 'add 2'];

addAndRemoveElements(inputArray);