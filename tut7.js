console.log('We are in tut7.js and lets discuss about arrays');
// const marks = [34,23,24,93,73,25];
let marks = [34,23,24,93,73,25];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 89, [3,5]];

const arr = new Array(23,123,21, 'Orange');
console.log(arr);
console.log(mixed);
console.log(fruits[1]);


console.log(arr.length);
console.log(Array.isArray('sdsfd'));
// console.log(Array.isArray('Array'));
arr[0] = 'harry';
console.log(arr);

let value = marks.indexOf(73);
console.log(value);

marks.push(555);
console.log(marks);

marks.unshift(444);
console.log(marks);

marks.pop();
console.log(marks);

marks.shift()
console.log(marks);

marks.splice(1, 2);
console.log(marks);

marks.reverse();
console.log(marks);

let marks2 =[1, 2, 3, 7];
marks = marks.concat(marks2);
console.log(marks);

let myobj = 
{
    name: 'harry',
    channel: 'CodeWithHarry',
    isActive: true,
    marks: [1,5,3,6]
}

console.log(myobj);
console.log(myobj.isActive);
console.log(myobj.marks);
console.log(myobj.name);
console.log(myobj.channel);
