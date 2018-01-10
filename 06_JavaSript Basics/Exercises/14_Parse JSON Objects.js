//Created by *** Kostadin Belchev ***
function parseJSONObjects (arr) {
    let arrayOfObjects = [];
    for (let element of arr) {
        let obj = JSON.parse(element);
        arrayOfObjects.push(obj);
    }

    for (let obj of arrayOfObjects) {
        console.log('Name: ' + obj.name);
        console.log('Age: ' + obj.age);
        console.log('Date: ' + obj.date);
    }
}

let inputArray = ['{"name":"Gosho","age":10,"date":"19/06/2005"}',
    '{"name":"Tosho","age":11,"date":"04/04/2005"}'
];

parseJSONObjects(inputArray);