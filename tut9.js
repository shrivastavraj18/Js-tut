console.log('This is a tut9');

// let a= 34;
// a +=1;
// a++;
// console.log(a);

// for(let i=0; i<100;i++)
// {
//      console.log(i);
// }

// let j = 0;
// while(j<10)
// {
//     console.log(j+1);
//     j +=1;
// }

// let k = 0;

// do {
//      if(k===5){
//           // break;
//           k+=1;
//           continue;
//      }
//      console.log(k+1);
//      k +=1;
// }
//      while (k < 10);

// let arr = [2, 5, 3, 4, 6, 7, 9];

// arr.forEach(function (element) 
// {
//      console.log(element);
// })
// console.log('done');

let obj = {
     name:"rohan das",
     age: 78,
     type: "Dengerous Programmer",
     os: "Ubuntu"
}

for(let key in obj){
     console.log(`The ${key} of object is ${obj[key]}`)
}