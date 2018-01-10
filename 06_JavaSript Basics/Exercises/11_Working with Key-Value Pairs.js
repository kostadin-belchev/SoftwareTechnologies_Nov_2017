//Created by *** Kostadin Belchev ***
function returnValue (arr) {
    let dict = [];
    let lastKey = arr.pop();

    for (let i = 0; i < arr.length; i++) {
        let arrayTokens = arr[i].split(' ');
        let key = arrayTokens[0];
        let value = arrayTokens[1];
        dict[key] = value;
        // if (!(key in dict)) {
        //     dict[key] = value;
        // }
        // else {
        //     dict[key] = value;
        // }
    }

    if (lastKey in dict) {
        console.log(dict[lastKey]);
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

returnValue(inputArr);
