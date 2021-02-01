let ages = [10,56,23,34,2];
let ages2=[40,22,6];
let ages3 =[14,99,2];
let newAges=ages.concat(ages2).concat(ages3);
console.log(`newAges :`,newAges);
let newAges2=[ages,ages2,ages3];
console.log(newAges2);
let newAges3=[...ages,...ages2,...ages3];//spread operator
console.log(newAges3);

let array=[30,40,50,60,70];
let maximum =Math.max(...array);
console.log(maximum);