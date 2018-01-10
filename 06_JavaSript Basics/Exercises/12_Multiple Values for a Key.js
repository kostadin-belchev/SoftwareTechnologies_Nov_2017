//Created by *** Kostadin Belchev ***
function multipleValuesPerKey (arr) {
    let dict = [];
    let lastKey = arr.pop();

    for (let i = 0; i < arr.length; i++) {
        let arrayTokens = arr[i].split(' ');
        let key = arrayTokens[0];
        let value = arrayTokens[1];
        //Error is somewhere here, the dict is left empty at the end
        //Error fixed, the creation of the empty array should happen here every time
        if (!(key in dict)) {
            dict[key] = [];
        }
        dict[key].push(value);
    }

    if (lastKey in dict) {
        for (let value of dict[lastKey]) {
            console.log(value);
        }
    }
    else {
        console.log("None");
    }
}

let inputArr = ['key value',
    'key eulav',
    'test tset',
    'key'
];

multipleValuesPerKey(inputArr);