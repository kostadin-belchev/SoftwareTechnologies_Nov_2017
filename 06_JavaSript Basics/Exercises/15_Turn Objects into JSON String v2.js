//Created by *** Kostadin Belchev ***
//Created by *** Kostadin Belchev ***
function parseDataIntoObjThenStringify (arr) {
    "use strict";
    let obj = {};
    let values = arr.forEach(p => {
        let [key, value] = p.split(' -> ');
        if (!Number.isNaN(Number(value)))
            value = Number(value);
        obj[key] = value;
    });


    //converting to string
    let stringifiedObj = JSON.stringify(obj);

    //printing
    console.log(stringifiedObj);
}

let inputArray = ['name -> Angel',
    'surname -> Georgiev',
    'age -> 20',
    'grade -> 6.00',
    'date -> 23/05/1995',
    'town -> Sofia'
];

parseDataIntoObjThenStringify(inputArray);