//Created by *** Kostadin Belchev ***
function printObjects (arr) {
    let arrOfStudents = [];

    for (let line of arr) {
        let inputTokens = line.split(' -> ');
        let name = inputTokens[0];
        let age = inputTokens[1];
        let grade = inputTokens[2];

        arrOfStudents.push({name: name, age: age, grade: grade});
    }

    for (let obj of arrOfStudents) {
        console.log('Name: '+ obj.name);
        console.log('Age: '+ obj.age);
        console.log('Grade: '+ obj.grade);
    }
}

let inputArray = ['Pesho -> 13 -> 6.00',
'Ivan -> 12 -> 5.57',
'Toni -> 13 -> 4.90',
];

printObjects(inputArray);